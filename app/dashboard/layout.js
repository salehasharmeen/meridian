import DashboardShell from "@/components/dashboard/DashboardShell";

export const metadata = {
  title: { default: "Admin", template: "%s | Meridian Admin" },
  robots: { index: false },
};

export default function DashboardLayout({ children }) {
  return <DashboardShell>{children}</DashboardShell>;
}
