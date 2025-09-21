# Nason Wedding Website

An award-worthy, editorial-style single-page wedding website built with Next.js 15, TypeScript, and Tailwind CSS. Inspired by Awwwards-winning designs with sophisticated typography, smooth scroll navigation, and a magazine-quality aesthetic.

## 🌟 Features

### Phase 1 (Current - Editorial Single Page)
- ✅ **Award-Worthy Editorial Design** - Inspired by Awwwards-winning sites
- ✅ **Premium Typography** - Playfair Display (headings) + Crimson Text (body)
- ✅ **Single-Page Experience** - Smooth scroll navigation between sections
- ✅ **Sophisticated Sections**:
  - **Hero** - Magazine-style typography with "Two Names, One Weekend" tagline
  - **Story** - Editorial narrative with pull quotes and elegant layouts
  - **Details** - Comprehensive event information in refined grid layouts
  - **Photos** - Gallery grid with hover effects and upload functionality
  - **RSVP** - Dark-themed contact form with backdrop effects
- ✅ **Fixed Navigation** - Floating pill navigation with active states
- ✅ **Editorial Interactions** - Sophisticated hover effects and transitions

### Phase 2 (Planned - Backend Integration)
- 🔄 **Database Integration** - Supabase for RSVP responses and photo storage
- 🔄 **Email Notifications** - Resend integration for confirmations
- 🔄 **Admin Dashboard** - View and manage responses
- 🔄 **Real Photo Uploads** - Cloud storage integration

## 🚀 Quick Start

### Prerequisites
- Node.js 18+ 
- npm or yarn

### Installation

1. **Clone and navigate to the project**
   ```bash
   cd wedding
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   - Navigate to `http://localhost:3000` (or the port shown in terminal)
   - The site will automatically reload when you make changes

## 🛠️ Tech Stack

### Frontend
- **Next.js 15** - React framework with App Router
- **React 19** - Latest React features
- **TypeScript** - Type safety and better developer experience
- **Tailwind CSS 3.4** - Utility-first CSS framework
- **Modern CSS** - Custom properties and responsive design

### Design System
- **Colors**: Warm cream, deep wine, sage green, dusty rose, midnight blue
- **Typography**: Editorial-style hierarchy with system fonts
- **Spacing**: 8px grid system with golden ratio proportions
- **Animation**: Subtle fade-in effects and smooth transitions

### Future Backend (Phase 2)
- **Supabase** - PostgreSQL database and authentication
- **Resend** - Email service for notifications
- **Vercel** - Hosting and deployment

## 📁 Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── story/page.tsx     # Our Story page
│   ├── details/page.tsx   # Event Details page
│   ├── rsvp/page.tsx      # RSVP form page
│   ├── photos/page.tsx    # Photo gallery page
│   ├── contact/page.tsx   # Contact page
│   └── layout.tsx         # Root layout with header/footer
├── components/            # Reusable components
│   ├── Header.tsx         # Navigation header
│   └── Footer.tsx         # Site footer
├── styles/               # Global styles
│   └── globals.css       # Tailwind imports and custom styles
└── lib/                  # Utility functions (future)
```

## 🎨 Design Features

### Editorial Aesthetic
- **Magazine-style layouts** with generous whitespace
- **Hierarchical typography** using editorial headline styles
- **Subtle animations** with fade-in effects
- **Responsive grid systems** that adapt beautifully to all screen sizes

### User Experience
- **Mobile-first design** ensuring perfect mobile experience
- **Accessible navigation** with keyboard support
- **Fast loading** with optimized images and modern web standards
- **Intuitive forms** with clear validation and feedback

## 📱 Pages Overview

### Home (`/`)
- Editorial hero section with tagline "Two names, one weekend, your company requested"
- Quick event information
- Call-to-action buttons for RSVP and details

### Our Story (`/story`)
- Narrative chapters: How We Met, Falling in Love, The Proposal, What's Next
- Beautiful typography with pull quotes and emphasis text
- Engaging story flow with responsive design

### Event Details (`/details`)
- Comprehensive event schedule (Friday welcome drinks → Saturday wedding → Sunday brunch)
- Venue information with directions
- Dress code guidelines and what to expect
- Accommodation recommendations with group rates
- Transportation details

### RSVP (`/rsvp`)
- Multi-step form with conditional fields
- Event selection (welcome drinks, ceremony, reception, brunch)
- Dietary restrictions and song requests
- Guest information and plus-one handling
- Photo consent checkbox

### Photo Gallery (`/photos`)
- Responsive photo grid with category filtering
- Lightbox view for enlarged photos
- Photo upload functionality (simulated)
- Download all photos feature

### Contact (`/contact`)
- Contact form with subject categorization
- FAQ section with common questions
- Wedding party contact information
- Direct contact details for urgent matters

## 🚀 Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm run start

# Run linting
npm run lint

# Type checking
npm run type-check
```

## 🎯 Customization

### Colors
Edit the color scheme in `tailwind.config.js`:
```javascript
colors: {
  cream: '#fdf8f4',
  wine: {
    DEFAULT: '#722f37',
    hover: '#5a252a',
  },
  sage: '#9ca986',
  'dusty-rose': '#d4a5a5',
  midnight: '#1a1a2e',
}
```

### Typography
Custom editorial styles are defined in `src/styles/globals.css`:
```css
.editorial-headline {
  @apply text-5xl md:text-6xl font-light tracking-tight leading-tight;
}

.editorial-body {
  @apply text-lg leading-relaxed font-normal;
}
```

### Content
All content is directly in the page components for easy customization:
- Update wedding details in `/details/page.tsx`
- Modify the story in `/story/page.tsx`
- Customize forms in `/rsvp/page.tsx` and `/contact/page.tsx`

## 🔮 Future Enhancements (Phase 2)

### Backend Integration
- **Supabase Setup**: Database schema for RSVP responses, photos, and messages
- **API Routes**: Next.js API routes for form submissions
- **Email Service**: Automated confirmations and notifications
- **Admin Dashboard**: Protected routes for viewing and managing data

### Advanced Features
- **Photo Management**: Real uploads with cloud storage
- **Guest Authentication**: Token-based access control
- **Analytics**: Track engagement and response rates
- **Social Sharing**: Easy sharing of photos and moments

## 📝 License

This is a personal wedding website project. Feel free to use as inspiration for your own celebration!

---

**Built with ♥ for a special day**