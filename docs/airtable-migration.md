# Airtable Migration Guide

## Overview

This guide outlines the complete migration from Notion to Airtable for the wedding website database. Airtable provides better API support, more flexible data structures, and superior two-way synchronization capabilities.

## Why Airtable?

- **Robust API**: RESTful API with comprehensive CRUD operations
- **Real-time Sync**: Webhooks and real-time updates
- **Flexible Schema**: Easy to modify table structures
- **Better Performance**: Faster queries and data retrieval
- **Rich Data Types**: Support for attachments, formulas, and relationships

## Database Schema Design

### 1. RSVP Responses Table

**Table Name**: `rsvp_responses`

| Field Name      | Type               | Description                                          | Required |
| --------------- | ------------------ | ---------------------------------------------------- | -------- |
| `id`            | Auto Number        | Primary key                                          | Yes      |
| `full_name`     | Single Line Text   | Guest full name                                      | Yes      |
| `email`         | Email              | Contact email                                        | Yes      |
| `phone`         | Phone Number       | Contact phone                                        | No       |
| `attending`     | Single Select      | Yes/No/Maybe                                         | Yes      |
| `guest_count`   | Number             | Total attendees                                      | Yes      |
| `plus_one_name` | Single Line Text   | Plus one name                                        | No       |
| `events`        | Multiple Select    | Ceremony, Reception, Welcome Drinks, Farewell Brunch | No       |
| `dietary_notes` | Long Text          | Dietary restrictions/notes                           | No       |
| `song_request`  | Long Text          | Music requests                                       | No       |
| `message`       | Long Text          | Message to couple                                    | No       |
| `photo_consent` | Checkbox           | Photo sharing consent                                | Yes      |
| `created_at`    | Created Time       | Submission timestamp                                 | Auto     |
| `updated_at`    | Last Modified Time | Last update timestamp                                | Auto     |

### 2. Guest Photos Table

**Table Name**: `guest_photos`

| Field Name       | Type             | Description           | Required |
| ---------------- | ---------------- | --------------------- | -------- |
| `id`             | Auto Number      | Primary key           | Yes      |
| `photo`          | Attachment       | Photo file            | Yes      |
| `uploader_name`  | Single Line Text | Who uploaded          | No       |
| `uploader_email` | Email            | Uploader contact      | No       |
| `caption`        | Long Text        | Photo description     | No       |
| `admin_approved` | Checkbox         | Admin approval status | Yes      |
| `admin_uploaded` | Checkbox         | Uploaded by admin     | Yes      |
| `created_at`     | Created Time     | Upload timestamp      | Auto     |

### 3. Song Requests Table

**Table Name**: `song_requests`

| Field Name        | Type             | Description                 | Required |
| ----------------- | ---------------- | --------------------------- | -------- |
| `id`              | Auto Number      | Primary key                 | Yes      |
| `song_title`      | Single Line Text | Song name                   | Yes      |
| `artist`          | Single Line Text | Artist name                 | No       |
| `requester_name`  | Single Line Text | Who requested               | No       |
| `requester_email` | Email            | Requester contact           | No       |
| `notes`           | Long Text        | Additional notes            | No       |
| `status`          | Single Select    | Pending, Approved, Rejected | Yes      |
| `created_at`      | Created Time     | Request timestamp           | Auto     |

### 4. Contact Messages Table

**Table Name**: `contact_messages`

| Field Name    | Type             | Description       | Required |
| ------------- | ---------------- | ----------------- | -------- |
| `id`          | Auto Number      | Primary key       | Yes      |
| `name`        | Single Line Text | Sender name       | Yes      |
| `email`       | Email            | Sender email      | Yes      |
| `subject`     | Single Line Text | Message subject   | No       |
| `message`     | Long Text        | Message content   | Yes      |
| `resolved`    | Checkbox         | Response status   | Yes      |
| `admin_notes` | Long Text        | Internal notes    | No       |
| `created_at`  | Created Time     | Message timestamp | Auto     |

## Setup Instructions

### Step 1: Create Airtable Account & Base

1. **Sign up** at [airtable.com](https://airtable.com)
2. **Create a new base** called "Wedding Website"
3. **Create the four tables** as outlined above
4. **Configure field types** exactly as specified in the schema

### Step 2: Generate API Credentials

1. Go to [airtable.com/create/tokens](https://airtable.com/create/tokens)
2. Click **"Create new token"**
3. **Name**: "Wedding Website API"
4. **Scopes**: Select all needed permissions:
   - `data.records:read`
   - `data.records:write`
   - `schema.bases:read`
5. **Access**: Select your wedding base
6. **Generate token** and copy it securely

### Step 3: Get Base and Table IDs

1. Go to [airtable.com/api](https://airtable.com/api)
2. Select your **"Wedding Website"** base
3. Copy the **Base ID** (starts with `app`)
4. Note down **Table IDs** for each table (or use table names)

### Step 4: Environment Configuration

Create/update your `.env.local` file:

```env
# Airtable Configuration
AIRTABLE_API_KEY=your_personal_access_token_here
AIRTABLE_BASE_ID=appXXXXXXXXXXXXXX
AIRTABLE_RSVP_TABLE=rsvp_responses
AIRTABLE_PHOTOS_TABLE=guest_photos
AIRTABLE_SONGS_TABLE=song_requests
AIRTABLE_CONTACT_TABLE=contact_messages

# Optional: Webhook URLs for real-time updates
AIRTABLE_WEBHOOK_SECRET=your_webhook_secret
```

### Step 5: Install Dependencies

```bash
npm install airtable
```

## API Integration Examples

### Basic Setup

```typescript
// lib/airtable.ts
import Airtable from "airtable";

const base = new Airtable({ apiKey: process.env.AIRTABLE_API_KEY }).base(
  process.env.AIRTABLE_BASE_ID!
);

export const rsvpTable = base(process.env.AIRTABLE_RSVP_TABLE!);
export const photosTable = base(process.env.AIRTABLE_PHOTOS_TABLE!);
export const songsTable = base(process.env.AIRTABLE_SONGS_TABLE!);
export const contactTable = base(process.env.AIRTABLE_CONTACT_TABLE!);
```

### RSVP Submission

```typescript
// api/rsvp/submit.ts
import { rsvpTable } from "../../lib/airtable";

export async function POST(request: Request) {
  try {
    const data = await request.json();

    const record = await rsvpTable.create({
      full_name: data.fullName,
      email: data.email,
      phone: data.phone,
      attending: data.attending,
      guest_count: parseInt(data.guestCount),
      plus_one_name: data.plusOneName,
      events: data.events,
      dietary_notes: data.dietaryNotes,
      song_request: data.songRequest,
      message: data.message,
      photo_consent: data.photoConsent,
    });

    return Response.json({ success: true, id: record.id });
  } catch (error) {
    return Response.json({ error: "Failed to submit RSVP" }, { status: 500 });
  }
}
```

### Photo Upload

```typescript
// api/photos/upload.ts
import { photosTable } from "../../lib/airtable";

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get("photo") as File;
    const uploaderName = formData.get("uploader_name") as string;

    // Convert file to base64 or upload to cloud storage first
    const record = await photosTable.create({
      photo: [
        {
          url: "https://your-storage-url.com/photo.jpg",
          filename: file.name,
        },
      ],
      uploader_name: uploaderName,
      admin_approved: false,
      admin_uploaded: false,
    });

    return Response.json({ success: true, id: record.id });
  } catch (error) {
    return Response.json({ error: "Failed to upload photo" }, { status: 500 });
  }
}
```

### Fetching Data

```typescript
// api/admin/responses.ts
import { rsvpTable } from "../../lib/airtable";

export async function GET() {
  try {
    const records = await rsvpTable
      .select({
        sort: [{ field: "created_at", direction: "desc" }],
      })
      .all();

    const responses = records.map((record) => ({
      id: record.id,
      ...record.fields,
    }));

    return Response.json(responses);
  } catch (error) {
    return Response.json(
      { error: "Failed to fetch responses" },
      { status: 500 }
    );
  }
}
```

## Data Migration Process

### Step 1: Export from Current System

1. **Export existing RSVP data** to CSV format
2. **Backup all photo uploads** to local directory
3. **Document any custom logic** or data transformations

### Step 2: Import to Airtable

1. **Use Airtable's CSV import** for bulk data migration
2. **Map columns** to match the new schema
3. **Upload photos** via API or Airtable interface
4. **Verify data integrity** after import

### Step 3: Update Application Code

1. **Replace existing API calls** with Airtable integration
2. **Update form submission handlers** to use new schema
3. **Test all CRUD operations** thoroughly
4. **Update admin dashboard** to read from Airtable

### Step 4: Testing & Validation

1. **Test form submissions** end-to-end
2. **Verify email notifications** still work
3. **Test photo upload functionality**
4. **Validate admin dashboard** displays correctly
5. **Performance test** with expected load

## Admin Dashboard Integration

### View Responses

```typescript
// components/admin/RSVPList.tsx
import { useState, useEffect } from "react";

export default function RSVPList() {
  const [responses, setResponses] = useState([]);

  useEffect(() => {
    fetch("/api/admin/responses")
      .then((res) => res.json())
      .then(setResponses);
  }, []);

  return (
    <div>
      <h2>RSVP Responses</h2>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Email</th>
            <th>Attending</th>
            <th>Guest Count</th>
            <th>Date</th>
          </tr>
        </thead>
        <tbody>
          {responses.map((response) => (
            <tr key={response.id}>
              <td>{response.full_name}</td>
              <td>{response.email}</td>
              <td>{response.attending}</td>
              <td>{response.guest_count}</td>
              <td>{new Date(response.created_at).toLocaleDateString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
```

## Security Considerations

1. **API Key Protection**: Never expose API keys in client-side code
2. **Rate Limiting**: Implement rate limiting for form submissions
3. **Input Validation**: Validate all inputs server-side
4. **File Upload Security**: Scan uploaded files for malware
5. **CORS Configuration**: Restrict API access to your domain

## Performance Optimization

1. **Caching**: Implement Redis caching for frequently accessed data
2. **Pagination**: Use Airtable's pagination for large datasets
3. **Batch Operations**: Group multiple operations when possible
4. **CDN**: Use CDN for photo delivery
5. **Compression**: Compress API responses

## Monitoring & Maintenance

1. **Error Logging**: Implement comprehensive error logging
2. **Uptime Monitoring**: Monitor API availability
3. **Backup Strategy**: Regular automated backups
4. **Performance Metrics**: Track API response times
5. **Usage Analytics**: Monitor API usage patterns

## Rollback Plan

1. **Keep old system running** during migration period
2. **Maintain data sync** between systems temporarily
3. **Document rollback procedures** if issues arise
4. **Test rollback process** in staging environment

## Cost Considerations

- **Airtable Pro**: $20/month for advanced features
- **API Calls**: Monitor usage to avoid overages
- **Storage**: Consider photo storage costs
- **Bandwidth**: Factor in image delivery costs

## Support & Resources

- **Airtable API Documentation**: [airtable.com/api](https://airtable.com/api)
- **JavaScript SDK**: [github.com/Airtable/airtable.js](https://github.com/Airtable/airtable.js)
- **Community Support**: [community.airtable.com](https://community.airtable.com)
- **Status Page**: [status.airtable.com](https://status.airtable.com)

---

## Migration Checklist

- [ ] Create Airtable account and base
- [ ] Set up all tables with correct schemas
- [ ] Generate API credentials
- [ ] Configure environment variables
- [ ] Install Airtable SDK
- [ ] Implement API integration
- [ ] Test all CRUD operations
- [ ] Migrate existing data
- [ ] Update admin dashboard
- [ ] Test end-to-end functionality
- [ ] Deploy to production
- [ ] Monitor for issues
- [ ] Document any custom configurations

This migration will provide a more robust, scalable, and maintainable database solution for the wedding website.


