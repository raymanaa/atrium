import Link from "next/link";
import { AtRiskGrid } from "@/components/at-risk-grid";
import { HeroBriefing } from "@/components/hero-briefing";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { ACCOUNTS, riskConfig } from "@/lib/accounts";

/**
 * Atrium landing — morning-edition newspaper front page.
 *
 * No split hero, no testimonial card, no pillars. The whole landing
 * reads as a newspaper front page: masthead with date/weather-strip,
 * a center-anchored lead story, a side column of "also this morning"
 * dispatches, an animated briefing card nested inline with a caption,
 * and the inline product presented as "PAGE 02 · SURVEILLANCE".
 */
export default function Landing() {
  const critical = ACCOUNTS.filter((a) => a.risk === "critical");
  const atRisk = ACCOUNTS.filter((a) => a.risk === "at-risk");
  const watch = ACCOUNTS.filter((a) => a.risk === "watch");

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      {/* ───── MASTHEAD ───── */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-10 pb-4">
          <div className="text-center border-b border-ink pb-3">
            <div className="label mb-2" style={{ color: "var(--accent-2)" }}>
              The Atrium — Morning Edition
            </div>
            <h1 className="display text-[72px] leading-[0.9] tracking-[-0.014em] text-ink md:text-[128px]">
              <span className="display-italic" style={{ color: "var(--accent)" }}>
                Tuesday,
              </span>{" "}
              April 21
            </h1>
            <div className="mt-3 display-italic text-[18px] text-ink-2 md:text-[22px]">
              Delivered before standup · printed at 6:42 AM local
            </div>
          </div>

          {/* Weather-strip (roster + counts) */}
          <div className="flex flex-wrap items-baseline justify-between gap-4 text-[11px] smallcaps tracking-[0.16em] border-b border-ink py-2">
            <span>Roster · 14 CSMs</span>
            <span>
              Critical{" "}
              <span className="mono text-[13px] tabular-nums" style={{ color: "var(--alarm)" }}>
                {critical.length}
              </span>
            </span>
            <span>
              At risk{" "}
              <span className="mono text-[13px] tabular-nums" style={{ color: "var(--accent)" }}>
                {atRisk.length}
              </span>
            </span>
            <span>
              Watch{" "}
              <span className="mono text-[13px] tabular-nums text-ink-2">{watch.length}</span>
            </span>
            <span>Healthy · 28 accounts</span>
            <span className="hidden md:inline">First call · 11:00 AM</span>
          </div>
        </div>
      </section>

      {/* ───── LEAD STORY + SIDEBAR (newspaper grid) ───── */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-8 pb-4">
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-10 md:gap-14">
            {/* Lead story */}
            <article className="min-w-0">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="smallcaps text-[11px] tracking-[0.2em] text-ink-3">
                  Lead story
                </span>
                <span
                  className="mono text-[10px] tracking-[0.14em]"
                  style={{ color: "var(--alarm)" }}
                >
                  CRITICAL · P0
                </span>
              </div>
              <h2 className="display text-[40px] leading-[1.02] tracking-[-0.012em] text-ink md:text-[58px]">
                Three accounts today.{" "}
                <span className="display-italic" style={{ color: "var(--accent)" }}>
                  Ironbridge first.
                </span>
              </h2>
              <div className="mt-3 text-[11.5px] text-ink-3 smallcaps tracking-[0.14em]">
                By Maya Alves, On-call CSM · Filed 06:42 AM, Berkeley
              </div>

              <div className="mt-5 text-[15.5px] leading-[1.8] text-ink space-y-4">
                <p className="text-justify" style={{ hyphens: "auto" }}>
                  <span className="smallcaps tracking-[0.16em] text-ink-3 mr-2">BERKELEY —</span>
                  Three enterprise accounts woke up this morning requiring the
                  kind of attention that does not live on a dashboard.{" "}
                  <strong className="text-ink">Ironbridge Capital</strong>,
                  whose usage has fallen sixty-two percent over the last three
                  weeks, sits eighteen days from a renewal with a new chief
                  information officer whose onboarding was not, as yet, formally
                  handed over. The Atrium editors recommend the first call
                  today, by eleven AM local, be to that chief information
                  officer.
                </p>
                <p className="text-justify" style={{ hyphens: "auto" }}>
                  <strong className="text-ink">Northline Logistics</strong>,{" "}
                  forty-two days from renewal, has seen its net-promoter score
                  halve following the March incident. Two support tickets
                  filed this week suggest the team is stuck on the
                  rollout-migration workflow. A hands-on training session,
                  scheduled for this afternoon, is recommended.{" "}
                  <strong className="text-ink">Sable Capital</strong>,
                  quieter but equally material, has a new champion who has not
                  yet been formally onboarded, and has asked twice this month
                  about audit log export.
                </p>
                <p className="text-justify" style={{ hyphens: "auto" }}>
                  The pattern across all three is not a collapse in{" "}
                  <em>usage</em>; it is a collapse in{" "}
                  <em>narrative</em> — a champion who changed role, a leader
                  who never got the warm handover, a team that drifted to the
                  wrong workflow. Software cannot repair that. Software can,
                  however, tell you to go fix it today. For the full briefing,
                  inclusive of evidence chips and the suggested order of
                  operations, turn to{" "}
                  <Link
                    href="/app"
                    className="underline"
                    style={{ color: "var(--accent)", textDecorationColor: "var(--accent)" }}
                  >
                    page 2 · today&apos;s briefing →
                  </Link>
                  .
                </p>
              </div>

              <div
                className="mt-6 border-l-2 px-4 py-3"
                style={{ borderColor: "var(--accent)", background: "var(--accent-soft)" }}
              >
                <div
                  className="smallcaps text-[10.5px] tracking-[0.18em]"
                  style={{ color: "var(--accent-2)" }}
                >
                  An editor&apos;s note
                </div>
                <p className="mt-1 display-italic text-[17px] leading-[1.5] text-ink max-w-[54ch]">
                  Health scores are easy to build and hard to act on. This
                  paper prints evidence instead.
                </p>
              </div>
            </article>

            {/* Sidebar: also this morning */}
            <aside className="min-w-0">
              <div className="border-l border-ink pl-6">
                <div className="label mb-4">Also this morning</div>
                <ol className="divide-y divide-line">
                  {[...atRisk, ...watch].slice(0, 5).map((a) => {
                    const cfg = riskConfig(a.risk);
                    return (
                      <li key={a.id} className="py-3">
                        <Link href={`/accounts/${a.slug}/`} className="group block">
                          <div className="flex items-baseline gap-2">
                            <span
                              className="mono text-[9.5px] font-semibold tracking-[0.16em]"
                              style={{ color: cfg.ink }}
                            >
                              {cfg.label}
                            </span>
                            <span className="mono text-[10px] text-ink-3 ml-auto">
                              risk {a.riskScore}
                            </span>
                          </div>
                          <div className="display text-[18px] leading-tight text-ink mt-0.5 group-hover:text-[color:var(--accent)] transition-colors">
                            {a.company}.
                          </div>
                          <p className="text-[12px] leading-[1.55] text-ink-2 mt-0.5 line-clamp-2">
                            {a.summary}
                          </p>
                        </Link>
                      </li>
                    );
                  })}
                </ol>

                <hr className="rule-thick my-6" />

                <div className="label mb-2">Weather, in numbers</div>
                <ul className="text-[12.5px] text-ink-2 space-y-1.5">
                  <li className="flex items-baseline justify-between gap-2">
                    <span>Top-three call window</span>
                    <span className="mono">by 2:00 PM</span>
                  </li>
                  <li className="flex items-baseline justify-between gap-2">
                    <span>Average briefing length</span>
                    <span className="mono">3 accounts</span>
                  </li>
                  <li className="flex items-baseline justify-between gap-2">
                    <span>Pre-coffee delivery</span>
                    <span className="mono">06:42 local</span>
                  </li>
                  <li className="flex items-baseline justify-between gap-2">
                    <span>Repeat-flag rate</span>
                    <span className="mono">&lt; 8%</span>
                  </li>
                </ul>
              </div>
            </aside>
          </div>
        </div>
      </section>

      {/* ───── FIGURE · the animated briefing nested as a plate ───── */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-12 pb-6">
          <div className="flex items-baseline justify-between border-y border-ink py-2 mb-4">
            <span className="smallcaps text-[11px] tracking-[0.2em]">Plate I — the morning card</span>
            <span className="mono text-[10.5px] text-ink-3">recorded this morning · 14s loop</span>
          </div>
          <HeroBriefing />
          <p className="mt-3 text-center text-[11.5px] italic text-ink-2 leading-[1.6] max-w-[60ch] mx-auto">
            <span className="smallcaps not-italic text-ink">Plate I.</span>{" "}
            The briefing delivered at 6:42 AM to each CSM on the roster.
            Evidence chips drop below each row; the CALL-BY pin stamps on
            the most urgent of the three.
          </p>
        </div>
      </section>

      {/* ───── PAGE 2 · SURVEILLANCE (inline AtRiskGrid) ───── */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-8 pb-10">
          <div className="flex items-baseline justify-between border-y border-ink py-2 mb-4">
            <span className="smallcaps text-[11px] tracking-[0.2em]">Page 02 — extended surveillance</span>
            <span className="mono text-[10.5px] text-ink-3">all six accounts, evidence on click</span>
          </div>
          <AtRiskGrid accounts={ACCOUNTS} />
          <p className="mt-3 text-center text-[11.5px] italic text-ink-2 leading-[1.6] max-w-[60ch] mx-auto">
            Click an account at left to read its evidence. The three-today
            recommendation is the top of the stack.
          </p>
        </div>
      </section>

      {/* ───── IMPRINT (closing) ───── */}
      <section>
        <div className="mx-auto max-w-[1200px] px-6 md:px-10 pt-6 pb-10">
          <div className="border-t-2 border-ink pt-6 text-center">
            <div className="smallcaps text-[11px] tracking-[0.24em] text-ink-3">
              The Atrium Morning Edition
            </div>
            <div className="display-italic mt-2 text-[20px] text-ink">
              Set in Instrument Serif &amp; Karla · served before coffee ·
              portfolio project #10 · Rayen Manaa
            </div>
            <div className="mt-4 inline-flex items-center gap-2 mono text-[11px] text-ink-3 tracking-[0.18em] smallcaps">
              <span>Tomorrow&apos;s edition</span>
              <Link
                href="/app"
                className="underline underline-offset-4"
                style={{ color: "var(--accent)" }}
              >
                open today&apos;s briefing →
              </Link>
            </div>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}
