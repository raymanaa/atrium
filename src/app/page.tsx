import Link from "next/link";
import { AtRiskGrid } from "@/components/at-risk-grid";
import { HeroBriefing } from "@/components/hero-briefing";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { ACCOUNTS } from "@/lib/accounts";

export default function Landing() {
  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      <section className="mx-auto w-full max-w-[1200px] px-6 pt-14 md:px-8 md:pt-20">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[1.1fr_1fr] md:items-end md:gap-16">
          <div>
            <div className="label mb-4">MORNING BRIEFINGS · BETA</div>
            <h1 className="display text-[60px] leading-[0.98] tracking-[-0.016em] text-ink md:text-[100px]">
              Three accounts.
              <br />
              <span className="display-italic">One morning.</span>
              <br />
              <span className="display">One briefing.</span>
            </h1>
            <p className="mt-6 max-w-[56ch] text-[16px] leading-[1.75] text-ink-2">
              Every morning, Atrium hands each CSM a briefing of the three
              accounts that need them today — with the evidence, the next
              action, and the window to call. No dashboard to scroll. No
              health score to interpret. Just: who, why, by when.
            </p>
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <Link
                href="/app"
                className="inline-flex items-center gap-2 bg-ink text-paper px-5 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
              >
                Open today&apos;s briefing
                <span aria-hidden>→</span>
              </Link>
              <Link
                href="/accounts/ironbridge"
                className="inline-flex items-center gap-2 border border-line bg-card px-5 py-3 text-[14px] text-ink-2 rounded-[3px] hover:border-line-2 hover:text-ink transition-colors"
              >
                Read a sample account
              </Link>
            </div>
            <div className="mt-10 flex flex-wrap items-baseline gap-x-10 gap-y-3 text-[11.5px] text-ink-3">
              <Stat value="3" unit="per morning" label="Most-actionable accounts" />
              <Stat value="6:42" unit="AM local" label="Delivered before your standup" />
              <Stat value="every" unit="claim cited" label="Evidence, not a score" />
            </div>
          </div>
          <figure className="relative">
            <div className="relative border border-line bg-card rounded-[5px] px-5 py-5 max-w-[440px] ml-auto">
              <div className="flex items-baseline justify-between">
                <span className="label" style={{ color: "var(--calm)" }}>
                  DELIVERED
                </span>
                <span className="mono text-[10.5px] text-ink-3">APR 21 · 6:42 AM</span>
              </div>
              <div className="rule my-3" />
              <p className="display-italic text-[22px] leading-[1.3] text-ink">
                &ldquo;I used to open three dashboards before coffee. Now I open one briefing and I know who to call first.&rdquo;
              </p>
              <div className="rule my-3" />
              <div className="flex items-baseline justify-between text-[11px] text-ink-3">
                <span className="mono uppercase tracking-[0.1em] text-ink">M. ALVES</span>
                <span>Sr. CSM · Velocity Labs</span>
              </div>
            </div>
          </figure>
        </div>

        <div className="mt-20">
          <HeroBriefing />
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 md:px-8 pt-24 pb-4">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1fr_1.6fr] md:gap-16">
          <div>
            <div className="label">The method</div>
            <h2 className="display mt-3 text-[38px] leading-[1.05] tracking-[-0.014em] text-ink md:text-[54px]">
              Evidence, not <span className="display-italic">scores.</span>
            </h2>
          </div>
          <div className="text-[15.5px] leading-[1.8] text-ink-2 max-w-[62ch]">
            Health scores are easy to build and hard to act on. Atrium
            surfaces evidence instead: the specific usage drop, the
            specific support ticket, the specific champion who changed
            roles. Every claim in the briefing is pinned to a source.
            Every call-by time is derived from the renewal window and the
            severity of the evidence. You do not need to trust the score;
            you need to read the three lines under the account name.
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 md:px-8 pt-14 pb-10">
        <div className="mb-5 flex items-baseline justify-between">
          <div className="label">Specimen · At-risk grid</div>
          <div className="label !tracking-[0.14em]">
            RENDERED FROM <span className="mono text-ink-2">/app</span> · NOT A SCREENSHOT
          </div>
        </div>
        <AtRiskGrid accounts={ACCOUNTS} />
        <p className="mt-5 text-[12.5px] leading-[1.65] text-ink-3 max-w-[62ch]">
          Same grid the app uses. Click any account on the left to open
          its evidence panel; evidence chips surface usage, support,
          sentiment, and contract signals with deltas.
        </p>
      </section>

      <section className="mx-auto max-w-[1200px] px-6 md:px-8 pt-24 pb-4">
        <div className="mx-auto max-w-[740px] text-center">
          <div className="label">Tomorrow · 6:42 AM</div>
          <h2 className="display mt-4 text-[44px] leading-[1.05] tracking-[-0.014em] text-ink md:text-[64px]">
            Three accounts.{" "}
            <span className="display-italic">Before coffee.</span>
          </h2>
          <p className="mt-5 text-[16px] leading-[1.7] text-ink-2">
            Open the briefing. Make the first call. Close your inbox.
          </p>
          <div className="mt-8 inline-flex items-center gap-3">
            <Link
              href="/app"
              className="inline-flex items-center gap-2 bg-ink text-paper px-6 py-3 text-[14px] rounded-[3px] hover:bg-ink-2 transition-colors"
            >
              Open today&apos;s briefing
              <span aria-hidden>→</span>
            </Link>
          </div>
        </div>
      </section>

      <MarketingFooter />
    </div>
  );
}

function Stat({ value, unit, label }: { value: string; unit: string; label: string }) {
  return (
    <div className="min-w-0">
      <div className="display text-[36px] leading-none tabular-nums text-ink">
        {value}
        <span className="mono text-[11px] text-ink-3 ml-1 font-normal">{unit}</span>
      </div>
      <div className="mt-1 text-[11.5px] text-ink-3 max-w-[24ch] italic">{label}</div>
    </div>
  );
}
