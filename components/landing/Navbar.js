"use client";

import Link from "next/link";
import { useState } from "react";
import Button from "@/components/ui/Button";
import Icon from "@/components/ui/Icon";
import Logo from "@/components/ui/Logo";
import { navLinks } from "@/lib/content";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 px-4 pt-4">
      <nav
        aria-label="Primary"
        className="mx-auto flex h-14 max-w-6xl items-center justify-between rounded-full bg-ink pl-5 pr-2 text-bone"
      >
        <Link href="#top" aria-label="Meridian home">
          <Logo inverted />
        </Link>

        <ul className="hidden gap-8 text-sm font-medium md:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <Link href={href} className="text-bone/70 transition-colors hover:text-lime">
                {label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="hidden items-center gap-1 md:flex">
          <Link href="/dashboard" className="rounded-full px-4 py-2 text-sm font-medium transition-colors hover:text-lime">
            Admin demo
          </Link>
          <Button href="#pricing" variant="accent" size="sm">
            Start free trial
          </Button>
        </div>

        <button
          type="button"
          className="grid h-10 w-10 place-items-center rounded-full md:hidden"
          aria-label={open ? "Close menu" : "Open menu"}
          aria-expanded={open}
          onClick={() => setOpen(!open)}
        >
          <Icon name={open ? "close" : "menu"} />
        </button>
      </nav>

      {open && (
        <ul className="mx-auto mt-2 max-w-6xl rounded-3xl bg-ink px-5 py-2 text-bone md:hidden">
          {[...navLinks, { label: "Admin demo", href: "/dashboard" }].map(({ label, href }) => (
            <li key={href}>
              <Link href={href} onClick={() => setOpen(false)} className="block py-3 text-lg font-semibold">
                {label}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </header>
  );
}
