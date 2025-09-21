# Nason Wedding – Modern Editorial Experience

## Executive Summary

A custom-built wedding website leveraging proven web technologies to create an editorial-style digital experience that replaces traditional invitations. Built with a phased MVP approach, the initial launch focuses on essential functionality—beautiful design, reliable RSVP collection, and photo sharing—while maintaining the editorial aesthetic.

## MVP Core Features (Phase 1)

### Essential RSVP System
- **Simple React Hook Form** for reliable form submission and validation
- **Single-page RSVP flow** with intuitive user experience
- **Multi-event support** for welcome drinks, ceremony, reception
- **Dietary preferences** with custom notes field
- **Plus-one management** with guest naming
- **Open RSVP access** (no complex token system in MVP)
- **Email confirmations** via Resend service
- **Admin dashboard** for viewing and exporting responses

### Simple Photo Gallery
- **Direct photo upload** via web form (mobile-optimized)
- **Basic gallery display** with responsive grid layout
- **Admin photo management** for adding professional photos
- **Download functionality** for guests to save photos

### Song Request System
- **Simple song suggestion form** for guest music requests
- **Admin dashboard** to view and manage song suggestions
- **Export functionality** to share with DJ/band

### Contact & Support
- **Contact form** for guest inquiries and support
- **Admin notification system** for timely responses

## Future Enhancement Features (Phase 2+)

### Advanced Features (Post-Wedding)
- **Token-based access control** with tiered invitation management
- **Spotify API integration** with real-time playlist updates and voting
- **QR-powered photo sharing** with venue-placed QR codes
- **AI-powered face detection** for automatic guest tagging
- **Intelligent Notion sync** with real-time bidirectional updates
- **GSAP animations** with scroll-triggered interactions
- **Advanced admin analytics** with detailed guest insights

## User Experience Design

### Visual Design System

**Design Philosophy:** "Digital Magazine Meets Personal Story"

**Typography Scale:**
- Headlines: 3.5–5rem with PP Editorial New
- Body: 1.125rem optimized for readability with Lyon Text
- Accent: Modern script for personal touches (Cotford, Bickham)

**Semantic Color System (Tailwind v4.0 @theme):**
- Primary surface: Warm cream with paper texture overlay
- Primary accent: Deep wine with hover state variations
- Secondary accents: Sage green, dusty rose
- Dark mode: Midnight blue base with adjusted contrasts

**Spacing System:** 8px grid with Golden Ratio proportions

**Animation Tokens:**
- Micro-interactions: 200ms ease-out
- Page transitions: 400ms cubic-bezier
- Scroll reveals: 600ms with 100ms stagger

### Mobile-First Responsive Design

**Breakpoints & Optimization:**
- **320px+:** Single column, thumb-zone navigation
- **768px+:** Two-column layouts, side navigation
- **1024px+:** Full editorial spreads, enhanced animations
- **1440px+:** Magazine-style layouts, refined grid systems

**Performance Targets:**
- First Contentful Paint: <800ms
- Largest Contentful Paint: <1.8s
- Time to Interactive: <2.5s
- Total Blocking Time: <200ms
- Cumulative Layout Shift: <0.05
- 85+ Lighthouse Performance Score

### Accessibility Standards (WCAG 2.1 AA)
- **Color contrast:** 4.5:1 minimum, 7:1 for essential text
- **Keyboard navigation:** Full site traversal without mouse
- **Screen reader optimization:** Semantic HTML5 with ARIA labels
- **Focus indicators:** Visible outlines with 3px minimum
- **Motion preferences:** Reduced animation mode support
- **Form accessibility:** Clear labels, error announcements

## Technical Architecture

### Frontend Stack
- **Framework:** Next.js 15 with App Router and Turbopack
- **React:** React 19 with modern patterns
- **Styling:** Tailwind CSS v4.0 with @theme directive
- **TypeScript:** Latest with strict mode configuration
- **Typography:** PP Editorial New (headings), Lyon Text (body)
- **Animation:** CSS transitions with optional Framer Motion
- **Forms:** React Hook Form with React 19 compatibility
- **Validation:** Zod validation with React Hook Form integration
- **Images:** Next/Image with automatic optimization (AVIF/WebP)
- **Icons:** Phosphor Icons (tree-shakeable)
- **Admin UI:** Shadcn/ui components

### Backend & Infrastructure
- **Database:** Supabase (PostgreSQL) with Row Level Security
- **API:** Next.js API Routes
- **Authentication:** Supabase Auth (admin-only for dashboard)
- **File Storage:** Supabase Storage for photo uploads
- **Email Service:** Resend with HTML templates
- **Hosting:** Vercel
- **Analytics:** Plausible (privacy-focused, lightweight)

### Third-Party Integrations
- **Google Maps Embed:** Venue directions (no API key needed)
- **Manual Data Management:** CSV export/import

## Data Models

### `rsvp_responses` Schema
```sql
id              uuid PRIMARY KEY
full_name       text NOT NULL
email           text
phone           text
attending       boolean NOT NULL
guest_count     integer DEFAULT 1
events          jsonb (ceremony, reception, welcome_drinks)
dietary_notes   text
plus_one_name   text
photo_consent   boolean DEFAULT true
created_at      timestamp
updated_at      timestamp
```

### `guest_photos` Schema
```sql
id              uuid PRIMARY KEY
file_url        text NOT NULL
uploader_name   text
caption         text
admin_uploaded  boolean DEFAULT false
created_at      timestamp
```

### `song_requests` Schema
```sql
id              uuid PRIMARY KEY
song_title      text NOT NULL
artist          text
requester_name  text
notes           text
created_at      timestamp
```

### `contact_messages` Schema
```sql
id              uuid PRIMARY KEY
name            text NOT NULL
email           text NOT NULL
message         text NOT NULL
resolved        boolean DEFAULT false
created_at      timestamp
```

## Environment Configuration

### Required Environment Variables
```env
SUPABASE_URL=xxx
SUPABASE_ANON_KEY=xxx
SUPABASE_SERVICE_ROLE_KEY=xxx
RESEND_API_KEY=xxx
ADMIN_EMAIL=couple@email.com
ADMIN_PASSWORD=simple_password_for_mvp
PLAUSIBLE_DOMAIN=wedding.domain.com
```

## Admin Dashboard

### Admin Features (`/admin`)
Basic protected route with password authentication:

- View all RSVP responses in a simple table
- Export responses to CSV for external management
- View photo gallery and upload professional photos
- View song requests and export for DJ
- View and respond to contact form messages

### API Endpoints
```typescript
// Public endpoints
GET  /api/wedding-info
POST /api/rsvp/submit
POST /api/song-request
POST /api/contact
POST /api/photo/upload

// Admin endpoints (password protected)
GET  /api/admin/responses
GET  /api/admin/photos
POST /api/admin/photo/upload
GET  /api/admin/songs
GET  /api/admin/messages
```

## Development Phases

### Phase 1: Foundation & Core Features
- Project setup with Next.js 15 + TypeScript + Tailwind CSS v4.0
- Design system implementation with typography and color tokens
- Static pages (home, story, venue information)
- Complete RSVP system with email confirmations
- Basic admin dashboard

### Phase 2: Enhanced Features
- Photo gallery with upload functionality
- Song request system
- Contact form and admin messaging
- Performance optimization
- Mobile responsiveness refinement

### Phase 3: Polish & Launch
- Cross-browser testing
- Security review and rate limiting
- SEO optimization and social media previews
- Production deployment and monitoring setup

## Content Strategy

### AI-Assisted Content Creation
- Wedding story and timeline content generated with AI assistance
- Venue descriptions and directions
- FAQ section for common guest questions
- Email templates for confirmations and notifications

### Content Guidelines for AI
- Tone: Warm, personal, elegant
- Style: Editorial magazine aesthetic
- Length: Concise but engaging
- Focus: Guest experience and practical information

## MVP Benefits & Trade-offs

### MVP Advantages
- **Reliable Launch:** Focus on core functionality ensures stability
- **Modern Stack:** Latest technologies for optimal performance
- **Maintainable:** Straightforward codebase
- **Guest-Focused:** Essential features that guests actually need

### MVP Trade-offs (Future Enhancements)
- **Manual Guest Management:** CSV export/import vs real-time sync
- **Open RSVP Access:** Simple form vs token-based access control
- **Basic Photo Gallery:** Direct uploads vs QR codes and AI tagging
- **Song Request Form:** Simple suggestions vs Spotify integration
- **CSS Animations:** Basic transitions vs advanced GSAP animations

## Guest Experience

### Core User Journeys
1. **RSVP Flow:** Landing page → RSVP form → Confirmation
2. **Photo Sharing:** Gallery view → Upload photos → Share with others
3. **Song Requests:** Browse music section → Submit song request
4. **Information Access:** Venue details → Directions → Contact

### Mobile Optimization
- Touch-friendly interface design
- Optimized photo upload for mobile cameras
- Fast loading on cellular connections
- Thumb-zone navigation placement

This PRD provides a clear roadmap for building a beautiful, functional wedding website that prioritizes guest experience while leveraging modern web technologies for optimal performance and maintainability.
