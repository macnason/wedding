# Wedding Website Development Tasks

## Quick Start Strategy
Focus on local development with minimal external dependencies for rapid iteration and testing.

## Stage 1: Foundation (Local Development Ready)
- [ ] **Project Setup** - Next.js 15 + TypeScript + Tailwind CSS v4.0
- [ ] **Design System** - Google Fonts (editorial alternatives), color tokens, spacing system
- [ ] **Layout Structure** - Responsive header, footer, navigation components
- [ ] **Editorial Voice Setup** - Typography hierarchy, content patterns

## Stage 2: Static Pages (All Pages as Static)
- [ ] **Home Page** - Hero section with editorial voice ("two names, one weekend, your company requested")
- [ ] **Story Page** - "Our Story" with editorial narrative style
- [ ] **Details Page** - Venue, schedule, accommodations with minimalist approach
- [ ] **RSVP Page** - Static form structure (functional later)
- [ ] **Photos Page** - Gallery layout structure
- [ ] **Contact Page** - Simple contact information layout

## Stage 3: Enhanced Local Features
- [ ] **Photo Gallery** - Display grid with local image management
- [ ] **Song Request Form** - Simple form with local storage
- [ ] **Contact Form** - Basic form structure
- [ ] **Content Pages** - Story, venue details, FAQ sections

## Stage 4: Data Management
- [ ] **Local Data Utils** - File-based CRUD operations for development
- [ ] **JSON Data Structure** - Mimic final database schema
- [ ] **Form Submission Handling** - Save to local JSON files
- [ ] **Data Viewing** - Simple admin page to view submissions

## Stage 5: Production Preparation
- [ ] **Backend Integration** - Replace local storage with Supabase
- [ ] **Email Service** - Integrate Resend for confirmations
- [ ] **File Upload** - Replace local uploads with cloud storage
- [ ] **Environment Config** - Set up production environment variables

## Stage 6: Polish & Deploy
- [ ] **Performance Optimization** - Image optimization, bundle analysis
- [ ] **Testing** - Cross-browser and device testing
- [ ] **Deployment** - Vercel deployment setup
- [ ] **Domain & SSL** - Custom domain configuration

---

## Local Development Benefits
- ✅ No external services needed initially
- ✅ Fast iteration and testing
- ✅ No API keys or database setup required
- ✅ Version control friendly
- ✅ Easy to demo progress

## Questions for Refinement
1. Which stage should we prioritize first?
2. Do you have specific fonts or should we use web alternatives?
3. Preference for desktop-first or mobile-first development?
4. Any existing content/images to work with?