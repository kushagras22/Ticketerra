# Ticketerra — Real-Time Event Ticketing Platform

Ticketerra is a scalable, real-time ticketing solution built with Next.js 14, Convex, Clerk and Stripe Connect. It combines an intelligent queuing mechanism, live updates and secure payment handling to deliver a seamless experience for both attendees and organizers.

## Key Capabilities

### For Attendees

- Real-time visibility into ticket availability  
- Dynamic queue with live position indicators  
- Time-sensitive ticket reservations  
- Fully responsive experience on mobile devices  
- Secure checkout powered by Stripe  
- Digital tickets featuring scannable QR codes  
- Automatic refund issuance upon cancellation  

### For Organizers

- Direct settlements via Stripe Connect  
- Live sales dashboard and reporting  
- Automated queue administration  
- Insights and analytics for each event  
- Recycled ticket allocation  
- Configurable ticket caps  
- One-click event cancellation with bulk refunds  
- Batch refund processing  

### Core Technology

- Real-time data synchronization with Convex  
- User authentication via Clerk  
- Payment orchestration through Stripe Connect  
- Hybrid rendering with Next.js (SSR & CSR)  
- Tailwind CSS and shadcn/ui for modern styling  
- Rate limiting on queue and purchase endpoints  
- Built-in fraud detection and prevention  
- Toast notifications for immediate feedback  
- Accessible, polished components courtesy of shadcn/ui  

## Installation & Setup

### Prerequisites

- Node.js 18 or later  
- npm or yarn  
- Active accounts on Stripe, Clerk and Convex  

### Environment Variables

Create a file named `.env.local` at the project root:

```bash
NEXT_PUBLIC_CONVEX_URL=your_convex_url
NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret
STRIPE_SECRET_KEY=your_stripe_secret
STRIPE_WEBHOOK_SECRET=your_webhook_secret
NEXT_PUBLIC_APP_URL=http://localhost:3000
```

### Local Installation

```bash
# Clone repository
git clone https://github.com/sonnysangha/ticket-marketplace-saas-nextjs15-convex-clerk-stripe-connect

# Install dependencies
npm install

# Launch development server
npm run dev

# In a second terminal, start Convex backend
npx convex dev
```

Keep the Convex process running so database schemas and functions stay in sync.

### Clerk Configuration

1. Create a new application in Clerk.
2. Set up sign-in and sign-up providers.
3. Add authorized redirect URLs.
4. Populate environment variables in `.env.local`.

### Convex Configuration

1. Sign up at Convex and create a project.
2. Install the Convex CLI:

```bash
npm install convex
```

3. Initialize within your codebase:

```bash
npx convex init
```

4. Update `NEXT_PUBLIC_CONVEX_URL` with your deployment URL.
5. Run the development backend:

```bash
npx convex dev
```

### Stripe & Webhook Setup

1. Enable Stripe Connect in your dashboard.
2. Define webhook endpoints for payment and refund events.
3. Install the Stripe CLI:

```bash
# macOS
brew install stripe/stripe-cli/stripe

# Windows (scoop)
scoop install stripe

# Debian/Ubuntu
curl -s https://packages.stripe.dev/api/security/keypair/stripe-cli-gpg/public \
  | gpg --dearmor \
  | sudo tee /usr/share/keyrings/stripe.gpg
echo "deb [signed-by=/usr/share/keyrings/stripe.gpg] \
  https://packages.stripe.dev/stripe-cli-debian-local stable main" \
  | sudo tee -a /etc/apt/sources.list.d/stripe.list
sudo apt update
sudo apt install stripe
```

4. Authenticate the CLI:

```bash
stripe login
```

5. Forward webhooks during local development:

```bash
stripe listen --forward-to localhost:3000/api/webhooks/stripe
```

6. Copy the webhook secret and update `STRIPE_WEBHOOK_SECRET` in `.env.local`.
7. Ensure your `/api/webhooks/stripe` route correctly handles incoming events.

### UI Component Library

1. Initialize shadcn/ui:

```bash
npx shadcn-ui@latest init
```

2. Add components you need:

```bash
npx shadcn-ui@latest add toast button card dialog
```

3. Integrate the toaster in your root layout:

```bash
npx shadcn-ui@latest add toaster
```

## Project Architecture

### Database Models

- Events
- Tickets
- Waiting Lists
- Users

### Primary Modules

- Queue management and rate control
- Offer expiration scheduler
- Secure payment flows
- Real-time synchronization

## How to Use

### Creating an Event

1. Register or log in as an organizer.
2. Complete Stripe Connect onboarding.
3. Provide event details and set ticket limits.
4. Publish the event to make it available to attendees.

### Buying Tickets

1. Browse active events on the homepage.
2. Enter the queue for your chosen event.
3. Receive an offer with a countdown.
4. Finalize payment before the timer expires.
5. Access your digital ticket and QR code instantly.

Built with care by the Ticketerra team.
