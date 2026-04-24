/**
 * Atrium landing — serene almost-blank centered
 * (grammar inspired by Things 3 / Cultured Code).
 */
import Link from "next/link";
import { ACCOUNTS, riskConfig } from "@/lib/accounts";

export default function Landing() {
  const lead = ACCOUNTS[0];
  const cfg = riskConfig(lead.risk);
  const evidence = lead.evidence[0];

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <style>{`
        .atrium-dot {
          width: 5px; height: 5px; border-radius: 99px;
          background: var(--accent);
          display: inline-block;
        }
      `}</style>

      <header className="py-6">
        <div className="mx-auto flex max-w-[900px] items-center justify-between px-8 text-[12.5px] text-ink-2">
          <Link href="/" className="display text-[22px] text-ink leading-none">Atrium</Link>
          <nav className="hidden md:flex items-center gap-8">
            <Link href="/app" className="hover:text-ink transition-colors">Today</Link>
            <Link href="/accounts" className="hover:text-ink transition-colors">Accounts</Link>
          </nav>
          <Link
            href="/app"
            className="rounded-full bg-ink text-paper px-4 py-1.5 text-[12px] hover:bg-ink-2 transition-colors"
          >
            Open brief
          </Link>
        </div>
      </header>

      <section className="flex-1 flex items-center justify-center py-20 md:py-32">
        <div className="text-center max-w-[760px] px-6">
          <div className="smallcaps text-[11px] tracking-[0.28em] text-ink-3">
            Morning briefings for CS
          </div>

          <h1 className="display-italic mt-8 text-[56px] leading-[1.05] tracking-[-0.012em] text-ink md:text-[108px]">
            Quiet
            <span className="display"> mornings.</span>
          </h1>

          <p className="mx-auto mt-8 max-w-[38ch] text-[16.5px] leading-[1.65] text-ink-2">
            Every morning at 6:42, a briefing of the three accounts that
            need you today — with the evidence, and the call-by time.
          </p>

          <div className="mt-10 flex items-center justify-center gap-2">
            <Link
              href="/app"
              className="rounded-full bg-ink text-paper px-6 py-3 text-[13.5px] font-medium hover:bg-ink-2 transition-colors shadow-[0_8px_24px_-10px_rgba(29,58,46,0.4)]"
            >
              Open today&apos;s brief
            </Link>
          </div>

          <div className="mt-6 flex items-baseline justify-center gap-2 text-[11.5px] text-ink-3">
            <span className="atrium-dot" />
            <span>Delivered 6:42 AM local · read in three minutes</span>
          </div>

          <div className="mt-20 mx-auto max-w-[400px]">
            <div
              className="rounded-2xl bg-card border border-line p-5 text-left"
              style={{
                boxShadow:
                  "0 40px 80px -30px rgba(29,58,46,0.28), 0 10px 30px -15px rgba(29,58,46,0.18)",
              }}
            >
              <div className="flex items-baseline gap-2">
                <span className="h-[7px] w-[7px] rounded-full" style={{ background: cfg.ink }} />
                <span
                  className="mono text-[9.5px] font-semibold tracking-[0.18em]"
                  style={{ color: cfg.ink }}
                >
                  {cfg.label}
                </span>
                <span className="mono text-[10px] text-ink-3 ml-auto tabular-nums">
                  risk {lead.riskScore}
                </span>
              </div>
              <div className="display mt-2.5 text-[22px] leading-tight text-ink">
                {lead.company}.
              </div>
              <p className="mt-1.5 text-[12.5px] italic leading-[1.55] text-ink-2">
                {evidence.label} — {evidence.detail}
                {evidence.delta && (
                  <> <span className="mono not-italic" style={{ color: "var(--alarm)" }}>{evidence.delta}</span></>
                )}
              </p>
              <div
                className="mt-4 inline-flex items-baseline gap-2 px-3 py-1.5 rounded-full"
                style={{ background: "var(--accent-soft)", color: "var(--accent-2)" }}
              >
                <span className="mono text-[10px] tracking-[0.14em]">
                  CALL BY {lead.nextAction.by.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="py-10">
        <div className="mx-auto flex max-w-[900px] items-baseline justify-between px-8 text-[11.5px] text-ink-3">
          <span>© 2026 Atrium</span>
          <span className="mono">atrium.raymnz.com</span>
          <a
            href="https://github.com/raymanaa/atrium"
            className="mono hover:text-ink transition-colors"
          >
            github ↗
          </a>
        </div>
      </footer>
    </div>
  );
}
