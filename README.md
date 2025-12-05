# Sabi Agent - AI Content Creation & Social Media Manager

A full-stack SaaS application for African SMEs to automate content creation and social media management.

## Features

- **AI Content Generation** - Automatic product-specific content creation
- **Multi-Platform Posting** - Post to Instagram, WhatsApp, Facebook, Twitter
- **Schedule Management** - Calendar-based content scheduling
- **Credit System** - Flexible pay-as-you-go pricing model
- **Ad-Supported Credits** - Earn free credits by watching advertisements
- **Dashboard Analytics** - Real-time engagement and performance metrics

## Tech Stack

- **Frontend**: Next.js 14, React 18, Tailwind CSS, shadcn/ui
- **Backend**: Next.js API Routes, NextAuth.js
- **Database**: MongoDB with Mongoose
- **Charts**: Recharts
- **Styling**: Tailwind CSS v4

## Getting Started

### Prerequisites

- Node.js 18+
- MongoDB instance
- Google OAuth credentials (for Google Sign-In)

### Installation

1. Clone the repository and install dependencies:
\`\`\`bash
npm install
\`\`\`

2. Set up environment variables by copying `.env.example` to `.env.local`:
\`\`\`bash
cp .env.example .env.local
\`\`\`

3. Update `.env.local` with your credentials:
   - MongoDB connection string
   - NextAuth secret
   - Google OAuth credentials

4. Run the development server:
\`\`\`bash
npm run dev
\`\`\`

5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Project Structure

\`\`\`
├── app/
│   ├── page.tsx                 # Landing page
│   ├── auth/                    # Authentication pages (signin, signup)
│   ├── dashboard/               # Protected dashboard routes
│   │   ├── page.tsx            # Overview
│   │   ├── generator/          # Content generator
│   │   ├── schedule/           # Schedule management
│   │   ├── credits/            # Credit wallet
│   │   └── connections/        # Social media connections
│   ├── api/                    # API routes
│   │   ├── auth/              # Authentication endpoints
│   │   ├── generate-content/  # Content generation
│   │   ├── products/          # Product management
│   │   ├── schedule/          # Schedule management
│   │   ├── credits/           # Credit system
│   │   └── social/            # Social media integration
│   └── globals.css             # Global styles
├── components/
│   ├── ui/                     # shadcn UI components
│   ├── layout/                 # Layout components
│   ├── landing/                # Landing page sections
│   └── dashboard/              # Dashboard components
├── models/                      # MongoDB schemas
├── lib/                        # Utility functions
└── middleware.ts               # Next.js middleware
\`\`\`

## API Endpoints

### Authentication
- `POST /api/auth/register` - User registration
- `POST /api/auth/[...nextauth]` - NextAuth endpoints

### Content
- `POST /api/generate-content` - Generate AI content
- `GET /api/products` - Get user products
- `POST /api/products` - Create product

### Scheduling
- `GET /api/schedule` - Get scheduled posts
- `POST /api/schedule` - Schedule a post

### Credits
- `GET /api/credits` - Get wallet balance
- `POST /api/credits` - Update credits

### Social Media
- `POST /api/social/connect` - Connect social account
- `DELETE /api/social/connect` - Disconnect social account

## Database Models

### User
- name, email, password
- credits, totalCredits
- googleId, emailVerified
- whatsappConnected, instagramConnected
- timestamps

### Product
- userId (ref)
- name, type, description, price
- imageUrl
- timestamps

### GeneratedContent
- userId (ref), productId (ref)
- caption, hashtags
- imageUrl, platform
- status (draft/scheduled/posted)
- scheduledFor, postedAt
- creditsUsed
- timestamps

### CreditWallet
- userId (ref, unique)
- balance, totalEarned, totalSpent
- lastCreditPurchase
- timestamps

### Schedule
- userId (ref), contentId (ref)
- scheduledTime, platform
- status (pending/published/failed)
- timestamps

## Environment Variables

\`\`\`
MONGODB_URI              # MongoDB connection string
NEXTAUTH_URL            # Auth callback URL
NEXTAUTH_SECRET         # JWT secret
GOOGLE_CLIENT_ID        # Google OAuth ID
GOOGLE_CLIENT_SECRET    # Google OAuth secret
EMAIL_SERVER_HOST       # Email service host
EMAIL_SERVER_PORT       # Email service port
EMAIL_SERVER_USER       # Email service user
EMAIL_SERVER_PASSWORD   # Email service password
EMAIL_FROM              # From email address
\`\`\`

## Features in Detail

### Landing Page
- Hero section with CTA buttons
- How it works (3-step process)
- Features showcase
- Business model explanation
- Traction statistics
- Testimonials from SME owners

### Dashboard
- Overview with key metrics and charts
- Content generator with AI integration
- Schedule calendar with post management
- Credit wallet with purchase and ad options
- Social media connection management

### Authentication
- Email/password signup and signin
- Google OAuth integration
- Email verification
- Protected routes with middleware

## Deployment

The application is deployment-ready and can be deployed to:
- Vercel (recommended for Next.js)
- AWS, Google Cloud, or any Node.js hosting
- Docker containers

### Vercel Deployment

\`\`\`bash
npm i -g vercel
vercel
\`\`\`

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

MIT License - see LICENSE file for details

## Support

For issues and questions:
- GitHub Issues: [Create an issue](https://github.com/your-repo/issues)
- Email: support@sabiagent.com

## Roadmap

- [ ] Real AI integration with OpenAI/Claude
- [ ] Advanced analytics dashboard
- [ ] Mobile app
- [ ] WhatsApp chatbot for content requests
- [ ] Integration with payment gateways
- [ ] Multi-language support
- [ ] Team collaboration features
- [ ] Content performance A/B testing
