export const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

/** Monthly recurring revenue in thousands of dollars. */
export const revenue = [18, 21, 19, 26, 29, 27, 34, 38, 36, 43, 47, 52];

export const stats = [
  { label: "Monthly revenue", value: "$52,400", delta: "+11.3%", icon: "dollar", tone: "lime" },
  { label: "Active users", value: "2,847", delta: "+8.1%", icon: "users", tone: "ink" },
  { label: "New signups", value: "384", delta: "+3.2%", icon: "userplus", tone: "sun" },
  { label: "Churn rate", value: "2.4%", delta: "-0.6%", icon: "trendDown", tone: "coral" },
];

export const seedUsers = [
  { id: "u-1", name: "Amna Tariq", email: "amna@northwind.io", role: "Admin", status: "Active", joined: "2026-01-12" },
  { id: "u-2", name: "Hamza Raza", email: "hamza@brightly.co", role: "Editor", status: "Active", joined: "2026-02-03" },
  { id: "u-3", name: "Sara Malik", email: "sara@lumen.app", role: "Viewer", status: "Invited", joined: "2026-03-18" },
  { id: "u-4", name: "Daniel Cho", email: "daniel@fieldly.com", role: "Editor", status: "Suspended", joined: "2026-03-29" },
  { id: "u-5", name: "Ayesha Khan", email: "ayesha@pixelry.dev", role: "Viewer", status: "Active", joined: "2026-05-07" },
  { id: "u-6", name: "Lucas Meyer", email: "lucas@orbit.de", role: "Admin", status: "Active", joined: "2026-06-21" },
  { id: "u-7", name: "Noor Fatima", email: "noor@kiln.pk", role: "Viewer", status: "Invited", joined: "2026-08-02" },
  { id: "u-8", name: "Omar Siddiqui", email: "omar@tidewise.co", role: "Editor", status: "Active", joined: "2026-09-14" },
];

export const adminProfile = {
  name: "Admin User",
  email: "admin@meridian.app",
  company: "Meridian",
  timezone: "Asia/Karachi",
};

export const timezones = ["Asia/Karachi", "Europe/London", "America/New_York", "America/Los_Angeles"];
