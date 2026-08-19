const fs = require('fs');
const path = require('path');

const scaffolds = [
  {
    slug: 'eventbrite-alternative-sri-lanka',
    title: 'Why Sri Lankan Event Organizers Are Looking for an Eventbrite Alternative',
    metaTitle: 'Eventbrite Alternative for Sri Lanka | Local Ticketing Options',
    metaDescription: 'Eventbrite works globally but has key limitations for Sri Lanka organizers. Here is what to look for in a local alternative.',
    cluster: 1,
    category: 'Platform & Product',
    publishDate: '2026-07-15T08:00:00Z',
    readTimeMinutes: 7,
    heroImage: '/blog/article-03-hero.png',
    tags: ['Eventbrite alternative', 'Sri Lanka'],
    excerpt: 'Eventbrite is a well-known platform but it was not built with Sri Lanka in mind. Payment processing is restricted, fees stack up, and support is overseas.',
    primaryKeywords: ['Eventbrite alternative Sri Lanka'],
    secondaryKeywords: [],
    sections: [
      {
        type: 'intro',
        content: 'Eventbrite is one of the most recognized names in event ticketing. If you have tried to set it up for a Sri Lankan event, though, you have probably hit the wall: payment processing is not fully supported, features are restricted, and fees become difficult to calculate when your event currency is LKR and your gateway situation is limited. This is not a criticism of Eventbrite — it is an excellent platform for markets it was designed for. But Sri Lanka is not one of those markets. This article explains exactly what the limitations are, what a local alternative needs to offer, and how the options compare honestly.'
      },
      {
        type: 'h2',
        heading: 'What Eventbrite Actually Offers Sri Lankan Organizers',
        content: 'Eventbrite is available in Sri Lanka in the sense that you can create an account and publish an event. The friction begins at checkout. Eventbrite Payment Processing — the platform\'s primary, fully integrated payment system — is not available in Sri Lanka. The only supported online payment option is connecting a PayPal account, which becomes your merchant of record for ticket sales. This has downstream consequences: advanced features like reserved seating and registration transfers are unavailable when using PayPal. Eventbrite invoices you separately for its service fees rather than deducting them automatically. And attendees are redirected to PayPal at checkout, which creates a less seamless experience than a native checkout flow.'
      },
      {
        type: 'comparison_table',
        heading: 'Eventbrite vs Skroll: Feature by Feature',
        content: 'A direct comparison on the factors that matter most for Sri Lanka-based events.',
        tableData: {
          headers: ['Feature', 'Eventbrite', 'Skroll'],
          rows: [
            ['LKR Native Pricing', '⚠️ Possible but complex', '✅ Full LKR support'],
            ['PayHere Integration', '❌ Not supported', '✅ Native integration'],
            ['SMS Ticket Delivery', '❌ Email only', '✅ Email + SMS both'],
            ['Local Support', '❌ Overseas helpdesk', '✅ Sri Lanka-based team']
          ]
        }
      },
      {
        type: 'conclusion',
        content: 'Eventbrite is a great platform for the markets it was designed to serve. Sri Lanka is not one of those markets — at least not yet. If you are running events in Sri Lanka for Sri Lankan attendees, you need a platform built around local payment infrastructure, SMS delivery, and support that understands your context. Skroll was built precisely for this.'
      }
    ],
    internalLinks: [
      { href: '/blog/best-event-ticketing-platform-sri-lanka', label: 'Best Event Ticketing Platforms in Sri Lanka' }
    ],
    relatedSlugs: ['best-event-ticketing-platform-sri-lanka']
  },
  {
    slug: 'qr-code-tickets-events-sri-lanka',
    title: 'QR Code Tickets for Events: How They Work and Why Every Organizer Needs Them',
    metaTitle: 'QR Code Tickets for Events Sri Lanka | How It Works',
    metaDescription: 'How QR code ticket delivery works, why it eliminates check-in queues, and how to set it up for your next Sri Lankan event.',
    cluster: 1,
    category: 'Platform & Product',
    publishDate: '2026-07-22T08:00:00Z',
    readTimeMinutes: 7,
    heroImage: '/blog/article-04-hero.png',
    tags: ['QR code tickets', 'event check-in'],
    excerpt: 'The check-in queue at a large Colombo event can stretch 50 meters into the car park. Staff are running down a printed list. Buyers are waiting. QR code ticketing eliminates every part of that problem.',
    primaryKeywords: ['QR code tickets events Sri Lanka'],
    secondaryKeywords: [],
    sections: [
      {
        type: 'intro',
        content: 'Picture a popular Colombo event on a Friday night. Four hundred people arrive over 45 minutes. The gate staff have a printed list of names, a highlighter, and a lot of patience. Someone\'s name is listed under a different spelling. Someone else left their confirmation email open but the WiFi is weak and the attachment will not load. The queue grows. People are frustrated before the event even starts. This is the version of event management that QR code ticketing replaces.'
      },
      {
        type: 'h2',
        heading: 'How QR Code Ticketing Works End-to-End',
        content: 'The process has four stages, and each one is automatic once your system is set up correctly. Stage one: purchase. A buyer visits your ticket page, selects their ticket type, and completes payment through your connected payment gateway. Stage two: generation. The moment payment is confirmed, the system generates a unique QR code linked exclusively to that purchase. Stage three: delivery. The PDF ticket is sent automatically via email and SMS. Stage four: scanning. On event day, your gate staff use a smartphone or scanner running your check-in app.'
      },
      {
        type: 'h2',
        heading: 'How QR Code Security Prevents Duplicate Entry',
        content: 'The most common concern from first-time QR organizers: "What if someone screenshots my ticket and sends it to a friend?" The answer is simple — each QR code is unique per purchase and can only be scanned once. When a QR code is validated at the gate, the system marks it as used in real time. If the same QR code is presented a second time, the scanner shows a red alert: already scanned.'
      },
      {
        type: 'conclusion',
        content: 'QR code ticketing is not a "nice to have" for modern events in Sri Lanka. It is the baseline for professional event operations. It eliminates name-list chaos, speeds up gate entry, prevents duplicate entry, and gives your team live attendance data throughout the event.'
      }
    ],
    internalLinks: [
      { href: '/blog/how-to-sell-tickets-online-sri-lanka', label: 'How to Sell Tickets Online in Sri Lanka' }
    ],
    relatedSlugs: ['how-to-sell-tickets-online-sri-lanka']
  },
  {
    slug: 'how-to-plan-an-event-sri-lanka',
    title: 'The Complete Guide to Planning an Event in Sri Lanka (2026 Edition)',
    metaTitle: 'How to Plan an Event in Sri Lanka — Complete 2026 Guide',
    metaDescription: 'Everything Sri Lankan event organizers need to know — venue selection, budgeting, ticketing, promotion, and day-of operations in one guide.',
    cluster: 3,
    category: 'How-To Education',
    publishDate: '2026-08-05T08:00:00Z',
    readTimeMinutes: 10,
    heroImage: '/blog/article-11-hero.png',
    tags: ['event planning', 'Sri Lanka'],
    excerpt: 'Planning an event in Sri Lanka involves more moving parts than most organizers expect — venues, permits, ticketing, promotion, payment gateways, gate operations, and post-event analytics.',
    primaryKeywords: ['how to plan an event in Sri Lanka'],
    secondaryKeywords: [],
    sections: [
      {
        type: 'intro',
        content: 'Planning an event in Sri Lanka is not as simple as booking a venue and selling tickets. The best events are built on decisions made weeks or months before the first attendee walks through the door. This guide covers the full journey — from defining your concept and budget, through venue selection and ticketing setup, to promotion, day-of operations, and the post-event review that makes your next event better.'
      },
      {
        type: 'h2',
        heading: 'Phase 1: Pre-Event Planning — Concept, Budget, and Venue',
        content: 'Every event starts with a clear answer to three questions: What is the event? Who is it for? What does success look like? Without clear answers, every downstream decision becomes harder. Once you have your concept, build a realistic budget. In Sri Lanka, typical event cost categories include venue hire, AV and technical production, catering (if applicable), entertainment or speakers, marketing and advertising, ticketing platform fees, print and collateral, security and staffing, and contingency (minimum 10% of total budget). Work backwards from your revenue target.'
      },
      {
        type: 'callout',
        content: 'For public events in Colombo, you may need permits from the Colombo Municipal Council (CMC) and/or a police permit depending on scale. Start this process at least 4 weeks before your event date.'
      },
      {
        type: 'h2',
        heading: 'Phase 2: Ticketing Setup',
        content: 'Ticketing should be set up and live as early as possible — ideally 4–8 weeks before the event for medium and large events. Choose a ticketing platform that works with Sri Lanka\'s payment infrastructure. Your platform needs native PayHere integration, LKR pricing, SMS ticket delivery, and real-time sales tracking.'
      },
      {
        type: 'conclusion',
        content: 'The most successful events in Sri Lanka are not necessarily the ones with the biggest budgets — they are the ones with the tightest operations. By planning early, choosing local platforms, and managing your gate efficiently, you can deliver an exceptional experience for your attendees.'
      }
    ],
    internalLinks: [
      { href: '/blog/qr-code-tickets-events-sri-lanka', label: 'QR Code Tickets for Events' }
    ],
    relatedSlugs: ['qr-code-tickets-events-sri-lanka', 'how-to-sell-tickets-online-sri-lanka']
  }
];

// Add the other 15 scaffold articles
const scaffoldSlugs = [
  'payment-gateway-events-sri-lanka',
  'concert-ticketing-sri-lanka',
  'corporate-event-ticketing-sri-lanka',
  'university-school-event-ticketing-sri-lanka',
  'charity-fundraiser-event-ticketing-sri-lanka',
  'sports-event-ticketing-sri-lanka',
  'workshop-training-event-ticketing-sri-lanka',
  'reduce-event-no-shows-sri-lanka',
  'why-attendees-arent-receiving-tickets',
  'event-check-in-guide-sri-lanka',
  'sell-out-event-sri-lanka',
  'pricing-strategy-event-tickets',
  'early-bird-tickets-strategy',
  'facebook-ads-events-sri-lanka',
  'event-sponsorship-sri-lanka'
];

let baseDate = new Date('2026-08-15T08:00:00Z');

scaffoldSlugs.forEach((slug, i) => {
  scaffolds.push({
    slug,
    title: `Scaffold Article for ${slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')}`,
    metaTitle: `Scaffold Title | Skroll`,
    metaDescription: `This is a scaffold article for ${slug}.`,
    cluster: (i % 5) + 1,
    category: 'Industry Guide',
    publishDate: new Date(baseDate.getTime() + (i * 7 * 24 * 60 * 60 * 1000)).toISOString(),
    readTimeMinutes: 5,
    heroImage: '/blog/article-default-hero.png',
    tags: ['scaffold', 'events', 'Sri Lanka'],
    excerpt: 'This is a scaffold excerpt that will be replaced later with the full content.',
    primaryKeywords: [slug.replace(/-/g, ' ')],
    secondaryKeywords: [],
    sections: [
      {
        type: 'intro',
        content: 'This is a scaffold article. It contains the structure needed for the blog but not the full text.'
      },
      {
        type: 'h2',
        heading: 'First Section Heading',
        content: 'Content for the first section.'
      },
      {
        type: 'conclusion',
        content: 'Conclusion of the scaffold article.'
      }
    ],
    internalLinks: [
      { href: '/blog/best-event-ticketing-platform-sri-lanka', label: 'Best Event Ticketing Platforms in Sri Lanka' }
    ],
    relatedSlugs: ['best-event-ticketing-platform-sri-lanka']
  });
});

const outDir = path.join(__dirname, '..', 'data', 'posts');
if (!fs.existsSync(outDir)) {
  fs.mkdirSync(outDir, { recursive: true });
}

scaffolds.forEach(post => {
  const filePath = path.join(outDir, `${post.slug}.json`);
  fs.writeFileSync(filePath, JSON.stringify(post, null, 2));
  console.log(`Created ${filePath}`);
});
