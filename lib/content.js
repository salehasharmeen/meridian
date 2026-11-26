export const navLinks = [
  { label: "Features", href: "#features" },
  { label: "How it works", href: "#how-it-works" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export const previewStats = [
  { label: "Subscribers", value: "2,847" },
  { label: "Churn", value: "2.4%" },
  { label: "ARPU", value: "$18.40" },
];

export const features = [
  { icon: "zap", title: "Failed payment recovery", text: "Retry schedules and emails run on their own whenever a card declines.", tone: "sun" },
  { icon: "users", title: "Cohort retention", text: "Compare how each signup month holds on after 30, 60 and 90 days.", tone: "mint" },
  { icon: "shield", title: "Role-based access", text: "Give finance full access and give support read-only views.", tone: "coral" },
  { icon: "chart", title: "Live MRR and churn", text: "Numbers update as each payment lands, not at month-end close.", tone: "lime", wide: true },
  { icon: "layers", title: "Plan-level breakdown", text: "See which pricing tier actually grows and which one leaks.", tone: "ink", wide: true },
];

export const steps = [
  { title: "Connect Stripe", text: "Authorize read-only access. Setup takes about three minutes." },
  { title: "Import history", text: "Meridian backfills up to 5 years of invoices and subscriptions." },
  { title: "Read the dashboard", text: "Share a live link with investors, or schedule a weekly email." },
];

export const YEARLY_DISCOUNT = 0.2;

export const plans = [
  {
    name: "Starter",
    price: 19,
    description: "For solo founders under $10k MRR",
    features: ["1 Stripe account", "MRR and churn", "Email reports"],
  },
  {
    name: "Growth",
    price: 49,
    description: "For teams that report to investors",
    features: ["3 Stripe accounts", "Cohort retention", "Failed payment recovery", "Team roles"],
    featured: true,
  },
  {
    name: "Scale",
    price: 99,
    description: "For finance teams with several products",
    features: ["Unlimited accounts", "Multi-currency", "API access", "Priority support"],
  },
];

export const testimonials = [
  { quote: "We found a pricing tier losing us $3k a month within the first hour.", name: "Amna Tariq", role: "CFO, Northwind" },
  { quote: "Our board pack went from two days of spreadsheets to one shared link.", name: "Daniel Cho", role: "Founder, Fieldly" },
  { quote: "Failed payment recovery alone paid for the plan in week one.", name: "Sara Malik", role: "Head of Ops, Lumen" },
];

export const faqs = [
  { question: "Does Meridian change anything in Stripe?", answer: "No. It connects with read-only permissions and can't create charges or edit customers." },
  { question: "How long does import take?", answer: "Most accounts finish in under ten minutes, even with years of history." },
  { question: "Can I change plans later?", answer: "Yes. Upgrades apply immediately and downgrades apply at the next billing date." },
  { question: "Is there a free trial?", answer: "Every plan includes 14 days free, with no credit card needed." },
];

export const footerLinks = [
  {
    heading: "Product",
    links: [
      { label: "Features", href: "#features" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
  },
  {
    heading: "Demo",
    links: [
      { label: "Overview", href: "/dashboard" },
      { label: "Users", href: "/dashboard/users" },
      { label: "Settings", href: "/dashboard/settings" },
    ],
  },
];
