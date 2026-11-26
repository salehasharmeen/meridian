import Link from "next/link";
import Logo from "@/components/ui/Logo";
import { footerLinks } from "@/lib/content";

export default function Footer() {
  return (
    <footer className="overflow-hidden rounded-t-[3rem] bg-ink text-bone">
      <div className="mx-auto grid max-w-6xl gap-10 px-5 pt-16 sm:grid-cols-2 lg:grid-cols-[2fr_1fr_1fr]">
        <div>
          <Logo inverted />
          <p className="mt-4 max-w-xs text-bone/60">Revenue analytics for subscription teams.</p>
        </div>

        {footerLinks.map(({ heading, links }) => (
          <nav key={heading} aria-label={heading}>
            <h3 className="mb-3 font-bold">{heading}</h3>
            <ul className="space-y-2 text-bone/60">
              {links.map(({ label, href }) => (
                <li key={href}>
                  <Link href={href} className="transition-colors hover:text-lime">
                    {label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        ))}
      </div>

      <p aria-hidden="true" className="mt-12 select-none text-center font-display text-[22vw] font-extrabold leading-[0.8] text-lime sm:text-[17vw]">
        Meridian
      </p>
      <p className="bg-lime py-4 text-center text-sm font-medium text-ink">© 2026 Meridian. All rights reserved.</p>
    </footer>
  );
}
