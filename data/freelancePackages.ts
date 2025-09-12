// =====================
// 1) Card data (EN)
// =====================
export const freelancePackages = [
  {
    category: "Corporate Website",
    category_slug: "kurumsal",
    description:
      "Fast, SEO-friendly corporate websites that reflect your brand. Choose static or dynamic infrastructure based on your needs.",
    packages: [
      {
        id: "corporate-pro",
        tier: "Pro (Fully Dynamic)",
        name: "Pro",
        price: 550,
        price_unit: "TL/page",
        base_pages_included: 5,
        extra_page_price: 300,
        subtitle:
          "Headless CMS + fully dynamic structures with advanced SEO and performance targets.",
        features: [
          "Admin Panel (Next.js Custom/Strapi/Keystone)",
          "Headless CMS integration",
          "Dynamic blog/news/event modules",
          "Form management (contact/quote) + email notifications",
          "Advanced SEO (schema, OG, breadcrumb, sitemap, robots)",
          "Lighthouse performance ≥ 90",
          "Multi-language (2 languages included)",
          "GA4 + Search Console + Hotjar setup",
          "Role-based authorization",
          "Caching + CDN configuration",
        ],
        revisions_included: 7,
        extra_revision_price: 250,
        delivery: {
          default_days: 10,
          options: [
            { label: "10 days", days: 10, surcharge: 0 },
            { label: "5 days (Rush Delivery)", days: 5, surcharge: 1500 },
          ],
        },
        support: { months: 3, sla: "72h response / 7-day bug guarantee" },
        training_minutes: 60,
        cta: "Start Project",
      },
      {
        id: "corporate-standard",
        tier: "Standard (Semi-Dynamic)",
        name: "Standard",
        price: 500,
        price_unit: "TL/page",
        base_pages_included: 4,
        extra_page_price: 300,
        subtitle:
          "Lightweight dynamic solutions for frequently updated areas + essential SEO.",
        features: [
          "Simple content management (JSON/Markdown/Light CMS)",
          "Dynamic blog/announcements",
          "Forms (contact/quote)",
          "Essential SEO (meta, title, sitemap, robots)",
          "Lighthouse performance ≥ 85",
          "GA4 + Search Console",
          "Basic role management",
        ],
        revisions_included: 5,
        extra_revision_price: 200,
        delivery: {
          default_days: 7,
          options: [
            { label: "7 days", days: 7, surcharge: 0 },
            { label: "3 days (Rush Delivery)", days: 3, surcharge: 1200 },
          ],
        },
        support: { months: 2, sla: "96h response" },
        training_minutes: 45,
        cta: "Get a Quote",
      },
      {
        id: "corporate-basic",
        tier: "Basic (Static)",
        name: "Basic",
        price: 400,
        price_unit: "TL/page",
        base_pages_included: 3,
        extra_page_price: 250,
        subtitle:
          "Lightweight, reliable static corporate site for quick go-live.",
        features: [
          "1 main + 2 subpages (example structure)",
          "Responsive design",
          "Essential SEO (meta, title)",
          "Fast loading optimization",
          "Basic contact form (3rd-party/No-code)",
          "Lighthouse performance ≥ 80",
        ],
        revisions_included: 3,
        extra_revision_price: 200,
        delivery: {
          default_days: 4,
          options: [
            { label: "4 days", days: 4, surcharge: 0 },
            { label: "2 days (Rush Delivery)", days: 2, surcharge: 800 },
          ],
        },
        support: { months: 1, sla: "Response within 5 business days" },
        training_minutes: 30,
        cta: "Select",
      },
    ],
    addons: [
      { name: "Extra Language", price: 1200, unit: "TL/language" },
      { name: "Blog Content Entry", price: 150, unit: "TL/post" },
      { name: "Advanced Animations", price: 800, unit: "TL/package" },
      { name: "Corporate Email Setup", price: 600, unit: "TL/bundle" },
    ],
  },

  {
    category: "UI/UX Design",
    category_slug: "uiux",
    description:
      "End-to-end UI/UX from wireframes to high-fidelity prototypes, flows, components, and design system.",
    packages: [
      {
        id: "uiux-pro",
        tier: "Pro (Legend)",
        name: "Pro",
        price: 650,
        price_unit: "TL/page",
        base_pages_included: 10,
        extra_page_price: 300,
        subtitle:
          "Design System + micro-interactions + test-driven prototypes.",
        features: [
          "Comprehensive user flows",
          "High-fidelity screens",
          "Interactive prototype (Figma)",
          "Design System + UI Kit",
          "Component variants & tokens",
          "Usability checklist",
          "Handoff (Figma Inspect + notation)",
        ],
        revisions_included: 7,
        extra_revision_price: 250,
        delivery: {
          default_days: 10,
          options: [
            { label: "10 days", days: 10, surcharge: 0 },
            { label: "5 days (Sprint Boost)", days: 5, surcharge: 1500 },
          ],
        },
        support: { months: 2, sla: "72h response" },
        training_minutes: 45,
        cta: "Start Design",
      },
      {
        id: "uiux-standard",
        tier: "Standard",
        name: "Standard",
        price: 500,
        price_unit: "TL/page",
        base_pages_included: 5,
        extra_page_price: 250,
        subtitle: "Wireframe → hi-fi flow with a basic component library.",
        features: [
          "Wireframes + user flows",
          "Hi-fi screens",
          "Basic interactive prototype",
          "Mini UI Kit (colors/typography/icons)",
          "Handoff notes",
        ],
        revisions_included: 5,
        extra_revision_price: 200,
        delivery: {
          default_days: 7,
          options: [
            { label: "7 days", days: 7, surcharge: 0 },
            { label: "3 days (Boost)", days: 3, surcharge: 1200 },
          ],
        },
        support: { months: 1, sla: "96h response" },
        training_minutes: 30,
        cta: "Get a Quote",
      },
      {
        id: "uiux-basic",
        tier: "Basic",
        name: "Basic",
        price: 400,
        price_unit: "TL/page",
        base_pages_included: 3,
        extra_page_price: 200,
        subtitle: "Quick start: simple wireframe + one hi-fi screen.",
        features: [
          "Simple wireframe",
          "Color palette + typography suggestions",
          "1 sample hi-fi screen",
          "Quick revision (1 round)",
        ],
        revisions_included: 3,
        extra_revision_price: 150,
        delivery: {
          default_days: 4,
          options: [
            { label: "4 days", days: 4, surcharge: 0 },
            { label: "2 days (Boost)", days: 2, surcharge: 800 },
          ],
        },
        support: { months: 1, sla: "Response within 5 business days" },
        training_minutes: 20,
        cta: "Select",
      },
    ],
    addons: [
      {
        name: "User Testing (5 participants)",
        price: 1800,
        unit: "TL/package",
      },
      { name: "Extra Flow Map", price: 500, unit: "TL/flow" },
      { name: "Custom Icon Set", price: 900, unit: "TL/package" },
    ],
  },

  {
    category: "E-commerce Development",
    category_slug: "eticaret",
    description:
      "Production-ready e-commerce stack with products, cart, payments, stock/shipping, and campaigns.",
    packages: [
      {
        id: "ecom-pro",
        tier: "Pro (Advanced)",
        name: "Pro",
        price: 900,
        price_unit: "TL/page",
        base_pages_included: 8,
        extra_page_price: 350,
        subtitle:
          "Full-featured: campaigns, multi-language, stock/shipping, and user accounts.",
        features: [
          "Product listing + detail",
          "Cart & payment (iyzico/Stripe)",
          "Campaign/coupon module",
          "Stock + shipping management",
          "User profile + order tracking",
          "Multi-language (2 languages included)",
          "GA4 + E-commerce tracking",
          "Lighthouse performance ≥ 85",
        ],
        revisions_included: 5,
        extra_revision_price: 250,
        delivery: {
          default_days: 10,
          options: [
            { label: "10 days", days: 10, surcharge: 0 },
            { label: "5 days (Rush Delivery)", days: 5, surcharge: 1800 },
          ],
        },
        support: { months: 3, sla: "72h response" },
        training_minutes: 60,
        cta: "Launch Project",
      },
      {
        id: "ecom-standard",
        tier: "Standard",
        name: "Standard",
        price: 800,
        price_unit: "TL/page",
        base_pages_included: 6,
        extra_page_price: 300,
        subtitle: "Core e-commerce flows + basic promotions.",
        features: [
          "Product listing + detail",
          "Cart & payment (iyzico/Stripe)",
          "Basic campaign/discount",
          "Basic stock/shipping management",
          "User profile",
          "GA4 setup",
        ],
        revisions_included: 4,
        extra_revision_price: 200,
        delivery: {
          default_days: 7,
          options: [
            { label: "7 days", days: 7, surcharge: 0 },
            { label: "3 days (Rush)", days: 3, surcharge: 1500 },
          ],
        },
        support: { months: 2, sla: "96h response" },
        training_minutes: 45,
        cta: "Get a Quote",
      },
      {
        id: "ecom-basic",
        tier: "Basic (Starter)",
        name: "Basic",
        price: 650,
        price_unit: "TL/page",
        base_pages_included: 4,
        extra_page_price: 250,
        subtitle: "Minimum go-live set: products, cart, payment.",
        features: [
          "Product listing + detail",
          "Cart & payment (iyzico/Stripe)",
          "Basic admin panel",
          "Responsive coding",
        ],
        revisions_included: 3,
        extra_revision_price: 150,
        delivery: {
          default_days: 4,
          options: [
            { label: "4 days", days: 4, surcharge: 0 },
            { label: "2 days (Boost)", days: 2, surcharge: 900 },
          ],
        },
        support: { months: 1, sla: "Response within 5 business days" },
        training_minutes: 30,
        cta: "Select",
      },
    ],
    addons: [
      { name: "Marketplace Integration", price: 2500, unit: "TL/channel" },
      { name: "Shipping Carrier Integration", price: 1200, unit: "TL/carrier" },
      { name: "Campaign Templates", price: 900, unit: "TL/package" },
    ],
  },
];

// =====================
// 2) Comparison table data (EN)
// =====================
// Schema:
// freelanceTable[category_slug] = {
//   title, columns: [{id, label, priceLabel}],
//   rows: [
//     { key, label, tooltip?, valueType, values: { [columnId]: <value> } }
//   ]
// }
// valueType: "price" | "text" | "boolean" | "number" | "badge" | "choice" | "list"

export const freelanceTable = {
  kurumsal: {
    title: "Corporate Website Packages",
    columns: [
      { id: "corporate-pro", label: "Pro", priceLabel: "550 TL/page" },
      {
        id: "corporate-standard",
        label: "Standard",
        priceLabel: "500 TL/page",
      },
      { id: "corporate-basic", label: "Basic", priceLabel: "400 TL/page" },
    ],
    rows: [
      {
        key: "desc",
        label: "Description",
        valueType: "text",
        values: {
          "corporate-pro": "Fully dynamic with headless CMS and advanced SEO.",
          "corporate-standard": "Semi-dynamic sections with essential SEO.",
          "corporate-basic": "Lightweight, fast, static corporate site.",
        },
      },
      {
        key: "source_files",
        label: "Source Files (Figma/Code)",
        tooltip: "Delivery of design and/or code sources at project end.",
        valueType: "boolean",
        values: {
          "corporate-pro": true,
          "corporate-standard": true,
          "corporate-basic": true,
        },
      },
      {
        key: "responsive",
        label: "Responsive Design",
        valueType: "boolean",
        values: {
          "corporate-pro": true,
          "corporate-standard": true,
          "corporate-basic": true,
        },
      },
      {
        key: "interactive_proto",
        label: "Interactive Mockup/Prototype",
        valueType: "boolean",
        values: {
          "corporate-pro": true,
          "corporate-standard": true,
          "corporate-basic": false,
        },
      },
      {
        key: "pages_included",
        label: "Included Pages",
        tooltip: "Initial number of pages delivered within the package.",
        valueType: "number",
        values: {
          "corporate-pro": 5,
          "corporate-standard": 4,
          "corporate-basic": 3,
        },
      },
      {
        key: "extra_page_price",
        label: "Extra Page Fee",
        valueType: "price",
        values: {
          "corporate-pro": "300 TL/page",
          "corporate-standard": "300 TL/page",
          "corporate-basic": "250 TL/page",
        },
      },
      {
        key: "revisions",
        label: "Revisions",
        tooltip: "Change rounds within the agreed scope.",
        valueType: "number",
        values: {
          "corporate-pro": 7,
          "corporate-standard": 5,
          "corporate-basic": 3,
        },
      },
      {
        key: "extra_revision_price",
        label: "Extra Revision",
        valueType: "price",
        values: {
          "corporate-pro": "250 TL/round",
          "corporate-standard": "200 TL/round",
          "corporate-basic": "200 TL/round",
        },
      },
      {
        key: "delivery",
        label: "Delivery Time",
        valueType: "choice",
        values: {
          "corporate-pro": {
            default: "10 days",
            options: ["10 days", "5 days (+1500 TL)"],
          },
          "corporate-standard": {
            default: "7 days",
            options: ["7 days", "3 days (+1200 TL)"],
          },
          "corporate-basic": {
            default: "4 days",
            options: ["4 days", "2 days (+800 TL)"],
          },
        },
      },
      {
        key: "seo_level",
        label: "SEO Level",
        valueType: "badge",
        values: {
          "corporate-pro": "Advanced",
          "corporate-standard": "Intermediate",
          "corporate-basic": "Basic",
        },
      },
      {
        key: "lighthouse",
        label: "Performance Target (LH)",
        tooltip: "Lighthouse Performance target (Desktop/Mobile).",
        valueType: "text",
        values: {
          "corporate-pro": "≥ 90",
          "corporate-standard": "≥ 85",
          "corporate-basic": "≥ 80",
        },
      },
      {
        key: "cms",
        label: "CMS/Content Management",
        valueType: "text",
        values: {
          "corporate-pro": "Headless (Strapi/Keystone) or Custom Admin",
          "corporate-standard": "Light CMS / Markdown",
          "corporate-basic": "—",
        },
      },
      {
        key: "forms",
        label: "Forms",
        valueType: "text",
        values: {
          "corporate-pro": "Contact + Quote + Custom fields",
          "corporate-standard": "Contact + Quote",
          "corporate-basic": "Basic contact",
        },
      },
      {
        key: "analytics",
        label: "Analytics",
        valueType: "list",
        values: {
          "corporate-pro": ["GA4", "Search Console", "Hotjar"],
          "corporate-standard": ["GA4", "Search Console"],
          "corporate-basic": ["GA4"],
        },
      },
      {
        key: "i18n",
        label: "Multi-language",
        valueType: "text",
        values: {
          "corporate-pro": "2 languages included (extra language +1200 TL)",
          "corporate-standard": "Optional",
          "corporate-basic": "—",
        },
      },
      {
        key: "security",
        label: "Security/SSL",
        valueType: "text",
        values: {
          "corporate-pro": "SSL + basic security headers (CSP/CORS)",
          "corporate-standard": "SSL",
          "corporate-basic": "SSL",
        },
      },
      {
        key: "support",
        label: "Support & Maintenance",
        valueType: "text",
        values: {
          "corporate-pro": "3 months support (SLA 72h)",
          "corporate-standard": "2 months support (SLA 96h)",
          "corporate-basic": "1 month basic support",
        },
      },
      {
        key: "training",
        label: "Training",
        valueType: "text",
        values: {
          "corporate-pro": "60 min admin training",
          "corporate-standard": "45 min admin training",
          "corporate-basic": "30 min usage walkthrough",
        },
      },
      {
        key: "addons",
        label: "Add-ons",
        valueType: "list",
        values: {
          "corporate-pro": [
            "Extra Language (+1200 TL)",
            "Advanced Animation (+800 TL)",
          ],
          "corporate-standard": ["Extra Language (+1200 TL)"],
          "corporate-basic": ["Corporate Email Setup (+600 TL)"],
        },
      },
      {
        key: "cta",
        label: "",
        valueType: "text",
        values: {
          "corporate-pro": "Start Project",
          "corporate-standard": "Get a Quote",
          "corporate-basic": "Select",
        },
      },
    ],
  },

  uiux: {
    title: "UI/UX Design Packages",
    columns: [
      { id: "uiux-pro", label: "Pro", priceLabel: "650 TL/page" },
      { id: "uiux-standard", label: "Standard", priceLabel: "500 TL/page" },
      { id: "uiux-basic", label: "Basic", priceLabel: "400 TL/page" },
    ],
    rows: [
      {
        key: "desc",
        label: "Description",
        valueType: "text",
        values: {
          "uiux-pro": "Design System and test-oriented hi-fi prototypes.",
          "uiux-standard": "Wireframe → hi-fi with a basic component set.",
          "uiux-basic": "Quick start: simple wireframe + one hi-fi screen.",
        },
      },
      {
        key: "mockup",
        label: "Interactive Prototype",
        valueType: "boolean",
        values: {
          "uiux-pro": true,
          "uiux-standard": true,
          "uiux-basic": false,
        },
      },
      {
        key: "design_system",
        label: "Design System / UI Kit",
        valueType: "boolean",
        values: {
          "uiux-pro": true,
          "uiux-standard": true,
          "uiux-basic": false,
        },
      },
      {
        key: "flows",
        label: "User Flows",
        valueType: "badge",
        values: {
          "uiux-pro": "Comprehensive",
          "uiux-standard": "Intermediate",
          "uiux-basic": "Basic",
        },
      },
      {
        key: "pages_included",
        label: "Included Screens",
        valueType: "number",
        values: { "uiux-pro": 10, "uiux-standard": 5, "uiux-basic": 3 },
      },
      {
        key: "extra_page_price",
        label: "Extra Screen Fee",
        valueType: "price",
        values: {
          "uiux-pro": "300 TL/screen",
          "uiux-standard": "250 TL/screen",
          "uiux-basic": "200 TL/screen",
        },
      },
      {
        key: "revisions",
        label: "Revisions",
        valueType: "number",
        values: { "uiux-pro": 7, "uiux-standard": 5, "uiux-basic": 3 },
      },
      {
        key: "delivery",
        label: "Delivery Time",
        valueType: "choice",
        values: {
          "uiux-pro": {
            default: "10 days",
            options: ["10 days", "5 days (+1500 TL)"],
          },
          "uiux-standard": {
            default: "7 days",
            options: ["7 days", "3 days (+1200 TL)"],
          },
          "uiux-basic": {
            default: "4 days",
            options: ["4 days", "2 days (+800 TL)"],
          },
        },
      },
      {
        key: "handoff",
        label: "Handoff",
        valueType: "text",
        values: {
          "uiux-pro": "Figma Inspect + component notation",
          "uiux-standard": "Figma Inspect",
          "uiux-basic": "Basic export",
        },
      },
      {
        key: "accessibility",
        label: "Accessibility",
        valueType: "badge",
        values: {
          "uiux-pro": "WCAG 2.1 AA checklist",
          "uiux-standard": "Basic rules",
          "uiux-basic": "—",
        },
      },
      {
        key: "testing",
        label: "User Testing",
        valueType: "text",
        values: {
          "uiux-pro": "Optional add-on: 5 users",
          "uiux-standard": "Optional",
          "uiux-basic": "—",
        },
      },
      {
        key: "cta",
        label: "",
        valueType: "text",
        values: {
          "uiux-pro": "Start Design",
          "uiux-standard": "Get a Quote",
          "uiux-basic": "Select",
        },
      },
    ],
  },

  eticaret: {
    title: "E-commerce Development Packages",
    columns: [
      { id: "ecom-pro", label: "Pro", priceLabel: "900 TL/page" },
      { id: "ecom-standard", label: "Standard", priceLabel: "800 TL/page" },
      { id: "ecom-basic", label: "Basic", priceLabel: "650 TL/page" },
    ],
    rows: [
      {
        key: "desc",
        label: "Description",
        valueType: "text",
        values: {
          "ecom-pro":
            "Campaigns, stock/shipping, multi-language, and advanced analytics.",
          "ecom-standard": "Core e-commerce flows + basic campaigns.",
          "ecom-basic": "Minimum go-live set.",
        },
      },
      {
        key: "cart_payment",
        label: "Cart + Payment",
        valueType: "boolean",
        values: { "ecom-pro": true, "ecom-standard": true, "ecom-basic": true },
      },
      {
        key: "campaigns",
        label: "Campaign/Coupon",
        valueType: "badge",
        values: {
          "ecom-pro": "Advanced",
          "ecom-standard": "Basic",
          "ecom-basic": "—",
        },
      },
      {
        key: "inventory_shipping",
        label: "Stock + Shipping",
        valueType: "badge",
        values: {
          "ecom-pro": "Advanced",
          "ecom-standard": "Basic",
          "ecom-basic": "Basic",
        },
      },
      {
        key: "user_area",
        label: "User Area",
        valueType: "text",
        values: {
          "ecom-pro": "Profile, order tracking, returns",
          "ecom-standard": "Profile, order tracking",
          "ecom-basic": "Profile",
        },
      },
      {
        key: "i18n",
        label: "Multi-language",
        valueType: "text",
        values: {
          "ecom-pro": "2 languages included (extra language +1200 TL)",
          "ecom-standard": "Optional",
          "ecom-basic": "—",
        },
      },
      {
        key: "analytics",
        label: "E-commerce Analytics",
        valueType: "list",
        values: {
          "ecom-pro": ["GA4", "E-commerce events", "Search Console"],
          "ecom-standard": ["GA4", "Search Console"],
          "ecom-basic": ["GA4"],
        },
      },
      {
        key: "pages_included",
        label: "Included Pages",
        valueType: "number",
        values: { "ecom-pro": 8, "ecom-standard": 6, "ecom-basic": 4 },
      },
      {
        key: "extra_page_price",
        label: "Extra Page Fee",
        valueType: "price",
        values: {
          "ecom-pro": "350 TL/page",
          "ecom-standard": "300 TL/page",
          "ecom-basic": "250 TL/page",
        },
      },
      {
        key: "revisions",
        label: "Revisions",
        valueType: "number",
        values: { "ecom-pro": 5, "ecom-standard": 4, "ecom-basic": 3 },
      },
      {
        key: "delivery",
        label: "Delivery Time",
        valueType: "choice",
        values: {
          "ecom-pro": {
            default: "10 days",
            options: ["10 days", "5 days (+1800 TL)"],
          },
          "ecom-standard": {
            default: "7 days",
            options: ["7 days", "3 days (+1500 TL)"],
          },
          "ecom-basic": {
            default: "4 days",
            options: ["4 days", "2 days (+900 TL)"],
          },
        },
      },
      {
        key: "performance",
        label: "Performance Target (LH)",
        valueType: "text",
        values: {
          "ecom-pro": "≥ 85",
          "ecom-standard": "≥ 80",
          "ecom-basic": "≥ 75",
        },
      },
      {
        key: "support",
        label: "Support & Maintenance",
        valueType: "text",
        values: {
          "ecom-pro": "3 months support (SLA 72h)",
          "ecom-standard": "2 months support (SLA 96h)",
          "ecom-basic": "1 month basic support",
        },
      },
      {
        key: "addons",
        label: "Add-ons",
        valueType: "list",
        values: {
          "ecom-pro": [
            "Marketplace (+2500 TL/channel)",
            "Shipping Integration (+1200 TL)",
          ],
          "ecom-standard": ["Shipping Integration (+1200 TL)"],
          "ecom-basic": ["Campaign Templates (+900 TL)"],
        },
      },
      {
        key: "cta",
        label: "",
        valueType: "text",
        values: {
          "ecom-pro": "Launch Project",
          "ecom-standard": "Get a Quote",
          "ecom-basic": "Select",
        },
      },
    ],
  },
};
