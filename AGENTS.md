# Project: CRAM — Creasthetic Resin And More

## What this product does

CRAM is a production-ready web application for a handmade resin-art brand.

The website should feel like a contemporary handmade studio with a luxury editorial e-commerce experience.

CRAM is not a normal fixed-price online shop.

Most products and custom creations use a quotation-before-payment flow:

Explore → Customize / Request → Submit Request → CRAM Reviews → Quote Sent → Customer Accepts → Payment → Handcraft → Track → Deliver.

The website must feel warm, artistic, tactile, personal, sophisticated, premium, calm, contemporary, and quietly luxurious.

Tagline:

"Just created for you!"

---

## Core Brand Rules

CRAM must NOT look like:

- a generic e-commerce template
- a SaaS dashboard
- a basic Tailwind starter
- a flashy luxury website
- a marketplace
- a childish colourful craft store

The experience should feel closer to:

- a luxury art/design studio
- an editorial catalogue
- a boutique handmade brand
- a contemporary Indian craft studio

Luxury should come from:

- typography
- photography
- whitespace
- composition
- proportions
- spacing
- subtle borders
- editorial layouts
- restrained interaction
- beautiful details

Do not rely on:

- excessive gold
- large gradients
- glassmorphism
- huge shadows
- excessive rounded cards
- flashy animation
- neon colours
- generic premium effects

---

## Brand Colors

Primary environment:

- Warm Ivory: #FBF6EE
- Paper: #F7F1E6
- White: #FFFFFF
- Ink: #161513
- Stone: #5B564C

Brand identity:

- Deep Turquoise: #0E6E68
- Dark Teal: #0B3F3C

Premium accent:

- Gold: #D9A23B

Controlled artistic accents:

- Hot Pink: #E63888
- Pastel Pink: #F7D9E4
- Sky Blue: #3FA9E0

The overall interface must remain calm.

Turquoise and dark teal establish the CRAM identity.

Gold should only be used for small premium details.

Pink and blue should appear occasionally as artistic accents.

---

## Typography Direction

Large editorial statements should use an elegant serif style similar to:

- Playfair Display
- Fraunces
- Cormorant Garamond

Body text should use a clean modern sans-serif similar to:

- Plus Jakarta Sans
- Inter

Use:

- strong typographic hierarchy
- small uppercase labels
- generous letter spacing where appropriate
- large serif statements
- short supporting text
- restrained actions

Do not make everything bold or oversized.

---

## Stack — Do Not Change Without Approval

- Framework: Next.js
- Language: TypeScript
- Routing: App Router
- Styling: Tailwind CSS
- Database: PostgreSQL via Supabase
- Authentication: Supabase Auth
- File Storage: Supabase Storage
- Payments: Razorpay
- Hosting: Vercel
- Version Control: Git + GitHub
- Error Tracking: Sentry later
- Search / SEO: Google Search Console + structured SEO

Architecture style:

- modular monolith
- do not introduce microservices unless explicitly approved

---

## Main User Roles

### Visitor

Can:

- browse homepage
- browse collections
- browse products
- read brand story
- explore custom creations
- view product information

### Customer

Can:

- create account
- login
- manage profile
- browse products
- submit quotation requests
- customize products
- upload inspiration/reference images
- receive quotes
- accept quotes
- make payments
- view orders
- track orders
- save wishlist items
- manage addresses

### Admin / CRAM Owner

Can:

- securely login
- manage products
- manage collections
- manage product images
- manage product pricing
- manage product availability
- manage quotation requests
- send quotations
- manage customers
- manage orders
- update order status
- manage selected website content
- manage media
- manage settings

---

## Core Customer Flow

### Standard CRAM flow

Explore

↓

Choose product / creation

↓

Customize or describe idea

↓

Upload inspiration if needed

↓

Submit request

↓

CRAM reviews request

↓

CRAM sends quotation

↓

Customer accepts quotation

↓

Customer pays

↓

CRAM begins crafting

↓

Order tracking

↓

Shipping

↓

Delivery

---

## Quotation-First Rule

Almost every CRAM product should use quotation-before-payment.

Do NOT default to:

Add to Cart → Checkout → Pay

Instead prefer actions such as:

- Customize This Piece
- Request a Quote
- Start Your Creation
- Share Your Idea

Products may display:

"Starting at ₹..."

but that should not imply the final price is fixed.

The quotation is the final confirmed price.

Direct fixed-price checkout may be added later only for selected ready-made products.

---

## Main Public Routes

- /
- /shop
- /collections
- /collections/[slug]
- /products/[slug]
- /custom
- /custom/request
- /our-story
- /contact
- /login
- /signup
- /forgot-password
- /account
- /account/requests
- /account/quotes
- /account/orders
- /account/wishlist
- /account/addresses

---

## Admin Routes

- /admin
- /admin/products
- /admin/products/new
- /admin/collections
- /admin/requests
- /admin/quotes
- /admin/orders
- /admin/customers
- /admin/media
- /admin/content
- /admin/settings

---

## Request Statuses

Use a controlled status system similar to:

- submitted
- under_review
- quote_sent
- quote_accepted
- payment_pending
- paid
- crafting
- finishing
- quality_check
- ready
- shipped
- delivered
- declined
- cancelled

Do not invent additional statuses casually.

---

## Product Information

Products may include:

- name
- slug
- collection
- category
- short description
- full description
- starting price
- images
- materials
- dimensions
- care instructions
- customizable
- available
- featured
- stock
- personalization options
- created_at
- updated_at

Money must be stored as integer paise.

Never use floating-point values for money.

---

## Custom Request Information

Custom requests may include:

- customer
- product / creation type
- description
- preferred colours
- occasion
- budget
- required date
- reference images
- special instructions
- status
- admin notes
- quotation
- quotation expiry
- payment status
- order status

---

## Homepage Direction

The homepage should feel like an editorial story, not a stack of generic sections.

Suggested flow:

1. Header
2. Hero
3. CRAM story statement
4. Collections
5. Featured creations
6. Custom creations
7. Brand values
8. Studio / Instagram section
9. Footer

Opening copy direction:

Small label:

HANDMADE RESIN ARTISTRY

Large statement:

Bespoke Resin Art,
Crafted For Your Soul.

Supporting line:

Just created for you!

Primary actions:

- Explore Creations
- Create Something Custom

---

## Product Card Rules

Product cards should feel like objects in an art catalogue.

Priority:

1. Product image
2. Small category label
3. Product name
4. Short description
5. "Starting at"
6. Price
7. Refined action

Avoid:

- large badges
- excessive buttons
- heavy borders
- marketplace-style cards
- crowded metadata

---

## Custom Creation UI Rules

The custom request form should feel like a studio commission form.

Prefer:

"Share your inspiration"

instead of:

"Upload File"

Prefer:

"Tell us what you imagine"

instead of:

"Description"

The form should feel creative and welcoming while remaining accessible and clear.

---

## Responsive Rules

The website must be designed mobile-first.

Target widths include:

- 320px
- 375px
- 390px
- 430px
- tablet
- desktop

Requirements:

- no horizontal overflow
- no cramped cards
- no giant buttons
- no broken desktop layouts stacked awkwardly
- comfortable touch targets
- readable typography
- optimized image sizes
- full-screen mobile navigation

---

## Motion Rules

Use restrained motion only.

Allowed examples:

- subtle image zoom
- opacity transitions
- small translations
- button interactions
- navigation transitions

Typical timing:

150–300ms

Respect reduced-motion preferences.

Never distract from products.

---

## Engineering Rules

- Never commit secrets.
- Secrets belong in environment variables.
- Keep `.env.example` documented.
- Never expose private keys to the browser.
- Use TypeScript strict mode.
- Run lint and typecheck before marking work complete.
- Prefer small, reviewable changes.
- Do not add dependencies without a clear reason.
- Avoid duplicated UI logic.
- Keep business logic outside UI components where possible.
- Validate user input on the server.
- Authentication and authorization must be enforced server-side.
- File uploads must be validated.
- Payment verification must happen server-side.
- Payment webhooks must be verified and idempotent.
- Never trust payment success only from the browser.
- Use proper loading, empty, error and success states.
- Build accessible interfaces.
- Use semantic HTML.
- Support keyboard navigation.
- Use meaningful alt text.
- Optimize images.
- Do not hard-code environment-specific URLs.
- Keep staging and production configuration separate.

---

## Database Rules

Every important table should have:

- id
- created_at
- updated_at

Use:

- foreign keys
- indexes
- NOT NULL constraints
- UNIQUE constraints where required
- CHECK constraints where useful

Use soft deletion where recovery is useful.

Do not manually change production database structure.

Schema changes must be managed through migrations.

---

## SEO Rules

Public pages must be search-engine friendly.

Use:

- descriptive page titles
- meta descriptions
- canonical URLs
- semantic headings
- sitemap.xml
- robots.txt
- Open Graph metadata
- structured data where appropriate
- descriptive product URLs
- meaningful image alt text

Good:

/products/floral-resin-tray

Avoid:

/product?id=123

The website should be suitable for Google Search Console indexing.

---

## Performance Rules

Prioritize:

- optimized images
- responsive image sizes
- lazy loading where appropriate
- minimal client-side JavaScript
- server components where appropriate
- fast page loading
- caching only where safe
- avoiding unnecessary dependencies

---

## Git Rules

Main branch:

main

Repository:

cram-web-app

Rules:

- main should remain deployable
- use descriptive commits
- avoid vague commits such as "fix" or "final"
- never commit `.env`
- review changes before pushing

---

## Working Process

For every major feature:

1. Plan first.
2. Review the plan.
3. Implement in small steps.
4. Run lint.
5. Run TypeScript checks.
6. Run relevant tests.
7. Review files changed.
8. Commit.
9. Push.
10. Verify the actual UI.

Do not claim something is complete if:

- there are errors
- tests fail
- lint fails
- TypeScript fails
- functionality is mocked without being clearly identified

---

## Current Build Stage

We are currently building the actual production CRAM application.

This is NOT:

- a prototype
- a Figma mockup
- a disposable demo
- a college project

Every feature should be written with the expectation that it may become part of the final production application.

The first goal is:

Build the real CRAM visual foundation and homepage, deploy it to staging, and allow the client to review the actual website before continuing deeper backend functionality.