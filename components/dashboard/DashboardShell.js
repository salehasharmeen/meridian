"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import Sol from "@/components/art/Sol";
import Avatar from "@/components/ui/Avatar";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import { adminProfile } from "@/lib/mock-data";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { href: "/dashboard", label: "Overview", icon: "home" },
  { href: "/dashboard/users", label: "Users", icon: "users" },
  { href: "/dashboard/settings", label: "Profile & settings", icon: "settings" },
];

export default function DashboardShell({ children }) {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const title = NAV_ITEMS.find((item) => item.href === pathname)?.label;

  return (
    <div className="min-h-screen bg-mint lg:flex lg:gap-3 lg:p-3">
      <aside
        className={cn(
          "fixed inset-y-0 left-0 z-50 flex w-72 flex-col bg-ink p-6 text-bone transition-transform lg:sticky lg:top-3 lg:h-[calc(100vh-1.5rem)] lg:w-64 lg:shrink-0 lg:translate-x-0 lg:rounded-[2rem]",
          menuOpen ? "translate-x-0" : "-translate-x-full",
        )}
      >
        <div className="mb-10 flex items-center justify-between">
          <Logo inverted />
          <button type="button" className="lg:hidden" aria-label="Close menu" onClick={() => setMenuOpen(false)}>
            <Icon name="close" />
          </button>
        </div>

        <nav aria-label="Dashboard" className="flex-1 space-y-1.5">
          {NAV_ITEMS.map(({ href, label, icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setMenuOpen(false)}
              aria-current={pathname === href ? "page" : undefined}
              className={cn(
                "flex items-center gap-3 rounded-full px-4 py-3 text-sm font-semibold transition-colors",
                pathname === href ? "bg-lime text-ink" : "text-bone/70 hover:bg-bone/10 hover:text-bone",
              )}
            >
              <Icon name={icon} className="h-4 w-4" />
              {label}
            </Link>
          ))}
        </nav>

        <div className="rounded-3xl bg-bone/10 p-4 text-center">
          <Sol className="mx-auto w-20" />
          <Link href="/" className="mt-2 inline-block text-sm font-semibold transition-colors hover:text-lime">
            Back to website
          </Link>
        </div>
      </aside>

      {menuOpen && <div className="fixed inset-0 z-40 bg-ink/50 lg:hidden" onClick={() => setMenuOpen(false)} />}

      <div className="min-w-0 flex-1">
        <header className="flex h-16 items-center gap-3 px-5 lg:px-4">
          <button type="button" className="-ml-2 grid h-10 w-10 place-items-center lg:hidden" aria-label="Open menu" onClick={() => setMenuOpen(true)}>
            <Icon name="menu" />
          </button>
          <h1 className="text-3xl font-extrabold">{title}</h1>
          <div className="ml-auto flex items-center gap-3">
            <span className="hidden text-sm font-semibold sm:block">{adminProfile.name}</span>
            <Avatar name={adminProfile.name} />
          </div>
        </header>

        <main className="max-w-6xl px-5 pb-8 lg:px-4">{children}</main>
      </div>
    </div>
  );
}
