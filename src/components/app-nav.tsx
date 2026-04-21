"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export function AppNav() {
  const pathname = usePathname() ?? "";
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/90 backdrop-blur-[6px]">
      <div className="mx-auto flex max-w-[1280px] items-center justify-between px-6 py-3 md:px-8">
        <div className="flex items-baseline gap-8">
          <Link href="/" className="flex items-baseline gap-2">
            <span className="display text-[22px] text-ink leading-none">Atrium</span>
            <span className="label !text-[9.5px]">BRIEFING</span>
          </Link>
          <nav className="hidden items-baseline gap-6 text-[13.5px] md:flex">
            <Tab href="/app" active={pathname === "/app" || pathname === "/app/"}>Today</Tab>
            <Tab href="/accounts" active={pathname.startsWith("/accounts")}>Accounts</Tab>
          </nav>
        </div>
      </div>
    </header>
  );
}

function Tab({ href, active, children }: { href: string; active: boolean; children: React.ReactNode }) {
  return (
    <Link
      href={href}
      className={[
        "relative pb-[3px] transition-colors",
        active ? "text-ink" : "text-ink-3 hover:text-ink",
      ].join(" ")}
    >
      {children}
      {active && (
        <span
          aria-hidden
          className="absolute -bottom-[9px] left-0 right-0 h-[2px]"
          style={{ background: "var(--accent)" }}
        />
      )}
    </Link>
  );
}
