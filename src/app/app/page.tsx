import Link from "next/link";
import { AtRiskGrid } from "@/components/at-risk-grid";
import { ACCOUNTS, TODAYS_BRIEFING, getAccount, riskConfig } from "@/lib/accounts";

export default function TodaysBriefing() {
  const briefed = TODAYS_BRIEFING.callIds
    .map((id) => ACCOUNTS.find((a) => a.id === id))
    .filter(Boolean) as NonNullable<ReturnType<typeof getAccount>>[];

  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-24 md:px-8">
      <div className="flex items-baseline justify-between border-b border-ink pb-3">
        <span className="label">Daily briefing</span>
        <span className="mono text-[10.5px] text-ink-3 tabular-nums">{todayLong()} · 6:42 AM</span>
      </div>

      <section className="mt-10">
        <div className="label mb-2">Today</div>
        <h1 className="display text-[52px] leading-[0.96] tracking-[-0.014em] text-ink md:text-[84px]">
          Three today.{" "}
          <span className="display-italic" style={{ color: "var(--accent)" }}>
            Ironbridge first.
          </span>
        </h1>
        <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.75] text-ink-2">
          Three accounts need you today. Call in this order; the evidence and the next action are below each.
        </p>
      </section>

      <ol className="mt-10 flex flex-col gap-4">
        {briefed.map((acc, i) => {
          const cfg = riskConfig(acc.risk);
          return (
            <li key={acc.id}>
              <Link
                href={`/accounts/${acc.slug}/`}
                className="group block border border-line bg-card rounded-[6px] px-6 py-6 hover:border-line-2 transition-colors"
              >
                <div className="grid grid-cols-[52px_1fr_auto] gap-5 items-start">
                  <span className="mono text-[12px] tabular-nums text-ink-3 pt-1">0{i + 1}</span>
                  <div>
                    <div className="flex flex-wrap items-baseline gap-3">
                      <span className="display text-[30px] leading-tight text-ink">{acc.company}.</span>
                      <span
                        className="mono text-[10.5px] font-semibold tracking-[0.16em]"
                        style={{ color: cfg.ink }}
                      >
                        {cfg.label}
                      </span>
                      <span className="mono text-[11px] tabular-nums text-ink-3">{acc.arr}</span>
                      <span aria-hidden className="text-ink-4">·</span>
                      <span className="mono text-[11px] text-ink-3">renewal in {acc.renewalWindow}</span>
                    </div>
                    <p className="mt-2 display-italic text-[17px] leading-[1.5] text-ink-2 max-w-[68ch]">
                      {acc.summary}
                    </p>
                    <div
                      className="mt-3 inline-flex items-baseline gap-2 px-3 py-1.5 rounded-[3px]"
                      style={{ background: "var(--accent-soft)", color: "var(--accent-2)" }}
                    >
                      <span className="mono text-[10px] tracking-[0.14em]">
                        CALL BY {acc.nextAction.by.toUpperCase()}
                      </span>
                      <span className="text-[12px]">— {acc.nextAction.action}</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <img
                      src={acc.csm.avatar}
                      alt={acc.csm.name}
                      className="h-8 w-8 rounded-full border border-line object-cover filter grayscale-[0.1]"
                      loading="lazy"
                    />
                    <span className="mono text-[10.5px] uppercase tracking-[0.08em] text-ink">
                      {acc.csm.name.split(" ")[0]}
                    </span>
                  </div>
                </div>
              </Link>
            </li>
          );
        })}
      </ol>

      <section className="mt-14">
        <div className="flex items-baseline justify-between mb-4">
          <div className="label">Also worth a glance</div>
          <Link href="/accounts" className="text-[12px] text-ink-3 hover:text-ink transition-colors">All accounts →</Link>
        </div>
        <AtRiskGrid accounts={ACCOUNTS} />
      </section>
    </div>
  );
}

function todayLong() {
  return new Date().toLocaleDateString("en-US", {
    weekday: "long",
    month: "long",
    day: "numeric",
    year: "numeric",
  }).toUpperCase();
}
