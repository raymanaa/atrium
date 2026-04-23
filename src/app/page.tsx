import Link from "next/link";
import { MarketingFooter } from "@/components/marketing-footer";
import { MarketingNav } from "@/components/marketing-nav";
import { ACCOUNTS, riskConfig } from "@/lib/accounts";

export default function Landing() {
  const lead = ACCOUNTS[0];
  const cfg = riskConfig(lead.risk);
  const topEvidence = lead.evidence[0];
  const row = ACCOUNTS.slice(0, 4);

  return (
    <div className="min-h-screen bg-paper text-ink flex flex-col">
      <MarketingNav />

      {/* ── HERO ─────────────────────────────────────────────────────────── */}
      <section>
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

            <div className="border border-line bg-card rounded-[4px] p-5">
              <div className="flex items-baseline gap-2">
                <span aria-hidden className="h-[8px] w-[8px] rounded-full" style={{ background: cfg.ink }} />
                <span className="mono text-[9.5px] font-semibold tracking-[0.16em]" style={{ color: cfg.ink }}>
                  {cfg.label}
                </span>
                <span className="mono text-[10px] text-ink-3 ml-auto tabular-nums">
                  risk {lead.riskScore} · {lead.arr}
                </span>
              </div>
              <div className="display mt-2 text-[22px] leading-tight text-ink">{lead.company}.</div>
              <p className="mt-1.5 text-[12.5px] italic leading-[1.55] text-ink-2">
                {topEvidence.label} — {topEvidence.detail}
                {topEvidence.delta && (
                  <> <span className="mono not-italic" style={{ color: "var(--alarm)" }}>{topEvidence.delta}</span></>
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
      </section>

      {/* ── NUMBERS ──────────────────────────────────────────────────────── */}
      <section className="border-y border-line">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 py-8 grid grid-cols-2 md:grid-cols-4 gap-8">
          <Stat n="06:42" label="Brief delivered, local time" />
          <Stat n="3" label="Accounts surfaced each morning" />
          <Stat n="every" label="Claim backed by a source, not a score" />
          <Stat n="< 8%" label="Repeat-flag rate, week over week" />
        </div>
      </section>

      {/* ── PROBLEM ──────────────────────────────────────────────────────── */}
      <Section label="The dashboard nobody opens">
        <p className="display-italic text-[30px] leading-[1.25] text-ink max-w-[34ch] md:text-[42px]">
          Health scores are easy to build and hard to act on.
        </p>
        <p className="mt-6 max-w-[60ch] text-[15px] leading-[1.7] text-ink-2">
          A CSM with eighty accounts does not need another color-coded grid. They need a sentence per account about why today is the day to call. Atrium prints evidence, not scores — the specific usage drop, the specific champion who changed role, the specific ticket nobody closed.
        </p>
      </Section>

      {/* ── WORKFLOW ─────────────────────────────────────────────────────── */}
      <Section label="How a brief is built">
        <ol className="grid grid-cols-1 md:grid-cols-2 gap-x-10 gap-y-8">
          <Move n="01" verb="Ingest" detail="Product usage, support tickets, CRM fields, contract metadata. No new data layer to maintain." />
          <Move n="02" verb="Score" detail="Not a blended number — a set of signals with deltas. Each signal links to its source." />
          <Move n="03" verb="Rank" detail="Severity × renewal proximity × evidence freshness. The three that come out on top are today's brief." />
          <Move n="04" verb="Narrate" detail="One paragraph per account. Plain English. The name of the champion and what they stopped doing." />
          <Move n="05" verb="Deliver" detail="In your inbox at 6:42 AM local. Shown first on login. Readable on the phone before standup." />
        </ol>
      </Section>

      {/* ── SIGNATURE MOVES ──────────────────────────────────────────────── */}
      <Section label="Three things only Atrium does">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Feature
            title="Evidence, not scores."
            body="Every claim in the brief is pinned to a specific signal. No blended health score to defend in a QBR."
          />
          <Feature
            title="Three, always three."
            body="Not a ranked list of 40 accounts. Three. The constraint is the product."
          />
          <Feature
            title="Call-by, not call-sometime."
            body="Every account comes with a window. By 11. By 2. This week. The window is derived from renewal proximity, not guessed."
          />
        </div>
      </Section>

      {/* ── WHO IT'S FOR ─────────────────────────────────────────────────── */}
      <Section label="Made for">
        <ul className="grid grid-cols-1 md:grid-cols-3 gap-6 text-[14px] leading-[1.65] text-ink-2">
          <Persona title="The senior CSM">
            80–120 accounts. Can&apos;t open 10 dashboards. Atrium makes the first pass for them.
          </Persona>
          <Persona title="The CS lead">
            Wants a team-wide narrative on Monday. Every CSM reads from the same briefing cadence.
          </Persona>
          <Persona title="The RevOps partner">
            Owns the data. Wants the evidence chain auditable. Atrium&apos;s briefs are reproducible from the signal store.
          </Persona>
        </ul>
      </Section>

      {/* ── RECENT ───────────────────────────────────────────────────────── */}
      <Section label="This week's shelf" right={<Link href="/accounts" className="mono text-[11px] text-ink-3 hover:text-ink transition-colors">all accounts →</Link>}>
        <ul className="border-y border-line divide-y divide-line">
          {row.map((a) => {
            const c = riskConfig(a.risk);
            return (
              <li key={a.id}>
                <Link href={`/accounts/${a.slug}/`} className="group grid grid-cols-[auto_1fr_auto] gap-5 py-4 items-baseline hover:bg-paper-2/40 transition-colors px-1">
                  <span className="mono text-[10.5px] font-semibold tracking-[0.16em]" style={{ color: c.ink }}>
                    {c.label}
                  </span>
                  <div>
                    <div className="display text-[18px] text-ink leading-tight">{a.company}.</div>
                    <div className="text-[11.5px] text-ink-3 mt-0.5 italic line-clamp-1">{a.summary}</div>
                  </div>
                  <span className="mono text-[10.5px] text-ink-3 group-hover:text-ink">open →</span>
                </Link>
              </li>
            );
          })}
        </ul>
      </Section>

      {/* ── VOICE ────────────────────────────────────────────────────────── */}
      <section className="mx-auto max-w-[1080px] px-6 md:px-10 py-16">
        <blockquote className="border-l-2 pl-6 max-w-[60ch]" style={{ borderColor: "var(--accent)" }}>
          <p className="display-italic text-[28px] leading-[1.3] text-ink md:text-[34px]">
            &ldquo;I used to open three dashboards before coffee. Now I open one briefing and I know who to call first.&rdquo;
          </p>
          <footer className="mt-4 smallcaps mono text-[11px] text-ink-3 tracking-[0.14em]">
            — Maya A. · senior CSM · &lt;pilot · not a customer&gt;
          </footer>
        </blockquote>
      </section>

      {/* ── FAQ ──────────────────────────────────────────────────────────── */}
      <Section label="Questions">
        <dl className="divide-y divide-line border-y border-line">
          <Faq q="Why three accounts, not ten?">
            Because the day only has eleven calls in it. Three is the number the CSM can act on before lunch. Ten is another dashboard.
          </Faq>
          <Faq q="Where does the evidence come from?">
            Your product&apos;s usage logs, your support tool, your CRM. Atrium does not infer — it cites. If a signal isn&apos;t there, the claim isn&apos;t either.
          </Faq>
          <Faq q="Can I override the three?">
            Yes. Any CSM can promote an account into today&apos;s brief manually. The brief notes when this happened and why.
          </Faq>
          <Faq q="Does it replace our health-score model?">
            No. It reads it. If you already have a model, Atrium uses its output as one signal among many.
          </Faq>
          <Faq q="What happens on weekends?">
            No briefing is sent. Signal collection continues; Monday&apos;s brief includes the weekend&apos;s deltas.
          </Faq>
        </dl>
      </Section>

      {/* ── SECOND CTA ───────────────────────────────────────────────────── */}
      <section className="border-t-2 border-ink">
        <div className="mx-auto max-w-[1080px] px-6 md:px-10 py-20 text-center">
          <div className="label">Tomorrow, 06:42</div>
          <h2 className="display mt-3 text-[40px] leading-[1.05] tracking-[-0.014em] text-ink md:text-[54px]">
            Three accounts.{" "}
            <span className="display-italic" style={{ color: "var(--accent)" }}>
              Before coffee.
            </span>
          </h2>
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
      </section>

      <MarketingFooter />
    </div>
  );
}

function Section({ label, right, children }: { label: string; right?: React.ReactNode; children: React.ReactNode }) {
  return (
    <section>
      <div className="mx-auto max-w-[1080px] px-6 md:px-10 py-16">
        <div className="flex items-baseline justify-between border-b border-line pb-3 mb-8">
          <span className="label">{label}</span>
          {right}
        </div>
        {children}
      </div>
    </section>
  );
}

function Stat({ n, label }: { n: string; label: string }) {
  return (
    <div>
      <div className="display text-[28px] leading-none tabular-nums text-ink md:text-[32px]">{n}</div>
      <div className="mt-2 text-[11.5px] leading-[1.45] text-ink-3 max-w-[28ch]">{label}</div>
    </div>
  );
}

function Move({ n, verb, detail }: { n: string; verb: string; detail: string }) {
  return (
    <li className="grid grid-cols-[auto_1fr] gap-4 items-baseline">
      <span className="mono text-[11px] text-ink-3 tabular-nums tracking-[0.16em]">{n}</span>
      <div>
        <div className="display text-[22px] leading-none text-ink">{verb}.</div>
        <div className="mt-1 text-[13.5px] leading-[1.6] text-ink-2 max-w-[40ch]">{detail}</div>
      </div>
    </li>
  );
}

function Feature({ title, body }: { title: string; body: string }) {
  return (
    <div>
      <h3 className="display text-[20px] leading-[1.2] text-ink">{title}</h3>
      <p className="mt-2 text-[13.5px] leading-[1.65] text-ink-2 max-w-[36ch]">{body}</p>
    </div>
  );
}

function Persona({ title, children }: { title: string; children: React.ReactNode }) {
  return (
    <li className="border-t-2 border-ink pt-3">
      <div className="display text-[18px] leading-tight text-ink">{title}</div>
      <p className="mt-2 max-w-[36ch]">{children}</p>
    </li>
  );
}

function Faq({ q, children }: { q: string; children: React.ReactNode }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[300px_1fr] gap-4 md:gap-10 py-5">
      <dt className="display text-[17px] text-ink leading-tight">{q}</dt>
      <dd className="text-[14px] leading-[1.7] text-ink-2 max-w-[62ch]">{children}</dd>
    </div>
  );
}
