import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { ACCOUNTS, riskConfig } from "@/lib/accounts";

export default function Landing() {
  const lead = ACCOUNTS[0]; // Ironbridge — critical
  const cfg = riskConfig(lead.risk);
  const topEvidence = lead.evidence[0];

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      <section className="flex-1">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 pt-24 pb-20 md:pt-32">
          <div className="grid grid-cols-1 gap-14 md:grid-cols-[1.25fr_1fr] md:items-center md:gap-16">
            <div>
              <div className="label" style={{ color: "var(--accent-2)" }}>
                Morning briefings for CS teams
              </div>
              <h1 className="display mt-5 text-[64px] leading-[0.94] tracking-[-0.014em] md:text-[96px]">
                Three accounts,{" "}
                <span className="display-italic" style={{ color: "var(--accent)" }}>
                  before coffee.
                </span>
              </h1>
              <p className="mt-6 max-w-[44ch] text-[16px] leading-[1.65] text-ink-2">
                Atrium hands each CSM the three accounts to call today — with the evidence and the call-by time.
              </p>
              <div className="mt-8">
                <Link
                  href="/app"
                  className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
                >
                  Open today&apos;s brief
                  <span aria-hidden>→</span>
                </Link>
              </div>
            </div>

            {/* Single account row — lifted from the at-risk grid */}
            <div className="border border-line bg-card rounded-[4px] p-5">
              <div className="flex items-baseline gap-2">
                <span
                  aria-hidden
                  className="h-[8px] w-[8px] rounded-full"
                  style={{ background: cfg.ink }}
                />
                <span
                  className="mono text-[9.5px] font-semibold tracking-[0.16em]"
                  style={{ color: cfg.ink }}
                >
                  {cfg.label}
                </span>
                <span className="mono text-[10px] text-ink-3 ml-auto tabular-nums">
                  risk {lead.riskScore} · {lead.arr}
                </span>
              </div>
              <div className="display mt-2 text-[22px] leading-tight text-ink">
                {lead.company}.
              </div>
              <p className="mt-1.5 text-[12.5px] italic leading-[1.55] text-ink-2">
                {topEvidence.label} — {topEvidence.detail}
                {topEvidence.delta && (
                  <>
                    {" "}
                    <span className="mono not-italic" style={{ color: "var(--alarm)" }}>
                      {topEvidence.delta}
                    </span>
                  </>
                )}
              </p>
              <div
                className="mt-4 inline-flex items-baseline gap-2 px-3 py-1.5 rounded-[3px]"
                style={{ background: "var(--accent-soft)", color: "var(--accent-2)" }}
              >
                <span className="mono text-[10px] tracking-[0.14em]">
                  CALL BY {lead.nextAction.by.toUpperCase()}
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className="border-y border-line">
          <div className="mx-auto max-w-[1080px] px-6 md:px-10 py-10 grid grid-cols-1 md:grid-cols-3 gap-6">
            <Step n="01" verb="Ingest" detail="Usage, support, CRM" />
            <Step n="02" verb="Score" detail="Evidence, not vibes" />
            <Step n="03" verb="Brief" detail="Three today, with reasons" />
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

function Step({ n, verb, detail }: { n: string; verb: string; detail: string }) {
  return (
    <div>
      <div className="mono text-[10.5px] text-ink-3 tracking-[0.16em]">{n}</div>
      <div className="display mt-1 text-[26px] leading-none text-ink">{verb}.</div>
      <div className="mt-1 text-[13px] text-ink-2 italic">{detail}</div>
    </div>
  );
}
