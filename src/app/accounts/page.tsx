import Link from "next/link";
import { ACCOUNTS, riskConfig } from "@/lib/accounts";

export default function AccountsIndex() {
  const sorted = [...ACCOUNTS].sort((a, b) => b.riskScore - a.riskScore);
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-10 pb-24 md:px-8">
      <div className="flex items-baseline justify-between border-b border-ink pb-3">
        <span className="label">Accounts · shelf</span>
        <span className="mono text-[10.5px] text-ink-3 tabular-nums">{ACCOUNTS.length} accounts</span>
      </div>
      <h1 className="display mt-10 text-[52px] leading-[1.02] tracking-[-0.014em] text-ink md:text-[68px]">
        All <span className="display-italic">accounts.</span>
      </h1>
      <p className="mt-4 max-w-[58ch] text-[15px] leading-[1.7] text-ink-2">
        Sorted by risk. Click any account to read its evidence panel.
      </p>
      <ol className="mt-10 divide-y divide-line border-y border-line">
        {sorted.map((a, i) => {
          const cfg = riskConfig(a.risk);
          return (
            <li key={a.id}>
              <Link
                href={`/accounts/${a.slug}/`}
                className="group grid grid-cols-[44px_1fr_auto] gap-5 py-5 items-baseline hover:bg-paper-2/40 transition-colors px-2"
              >
                <span className="mono text-[11px] tabular-nums text-ink-3">0{i + 1}</span>
                <div>
                  <div className="flex items-baseline gap-3">
                    <span className="display text-[22px] leading-tight text-ink">{a.company}.</span>
                    <span className="mono text-[10.5px] font-semibold tracking-[0.16em]" style={{ color: cfg.ink }}>{cfg.label}</span>
                    <span className="mono text-[11px] text-ink-3">· risk {a.riskScore}</span>
                  </div>
                  <div className="mt-0.5 text-[12.5px] text-ink-3">
                    <span className="mono tabular-nums">{a.arr}</span> · {a.plan} · renewal in {a.renewalWindow}
                  </div>
                </div>
                <span className="mono text-[11px] text-ink-3 group-hover:text-ink">open →</span>
              </Link>
            </li>
          );
        })}
      </ol>
    </div>
  );
}
