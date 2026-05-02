"use client";

import { motion } from "framer-motion";
import { Activity, FileSignature, HeartPulse, LifeBuoy, Users } from "lucide-react";
import { useState } from "react";
import { type Account, riskConfig } from "@/lib/accounts";

const ICONS: Record<string, React.ComponentType<{ className?: string; strokeWidth?: number; style?: React.CSSProperties }>> = {
  activity: Activity,
  "life-buoy": LifeBuoy,
  "file-signature": FileSignature,
  "heart-pulse": HeartPulse,
  users: Users,
};

/**
 * AtRiskGrid — inline product component (rule 2). Renders a grid of
 * accounts sorted by risk score; clicking one expands an evidence
 * panel. Same component the /app dashboard uses.
 */
export function AtRiskGrid({ accounts }: { accounts: Account[] }) {
  const sorted = [...accounts].sort((a, b) => b.riskScore - a.riskScore);
  const [activeId, setActiveId] = useState<string>(sorted[0].id);
  const active = sorted.find((a) => a.id === activeId) ?? sorted[0];
  const cfg = riskConfig(active.risk);

  return (
    <div className="border border-line bg-card rounded-[6px] overflow-hidden">
      <div className="flex items-baseline justify-between border-b border-line px-5 py-3">
        <span className="label">At-risk accounts · {sorted.length}</span>
        <span className="mono text-[10.5px] text-ink-3">sorted by risk score</span>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-[320px_1fr]">
        <ol className="border-b md:border-b-0 md:border-r border-line divide-y divide-line">
          {sorted.map((a) => {
            const c = riskConfig(a.risk);
            const isActive = a.id === activeId;
            return (
              <li key={a.id}>
                <button
                  onClick={() => setActiveId(a.id)}
                  className={[
                    "w-full text-left px-4 py-3 transition-colors flex items-start gap-3",
                    isActive ? "bg-paper-2/60" : "hover:bg-paper-2/30",
                  ].join(" ")}
                >
                  <span
                    aria-hidden
                    className="mt-1 h-[8px] w-[8px] rounded-full shrink-0"
                    style={{ background: c.ink }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="display text-[17px] leading-tight text-ink truncate">
                        {a.company}
                      </span>
                      <span
                        className="mono text-[9.5px] tracking-[0.14em] shrink-0"
                        style={{ color: c.ink }}
                      >
                        {c.label}
                      </span>
                    </div>
                    <div className="mt-0.5 flex items-baseline gap-2 text-[11px] text-ink-3">
                      <span className="mono tabular-nums">{a.arr}</span>
                      <span aria-hidden className="text-ink-4">·</span>
                      <span>{a.plan}</span>
                      <span aria-hidden className="text-ink-4">·</span>
                      <span className="mono tabular-nums">
                        risk {a.riskScore}
                      </span>
                    </div>
                  </div>
                </button>
              </li>
            );
          })}
        </ol>

        <motion.div
          key={active.id}
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22 }}
          className="p-5 md:p-6"
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <span
                className="label !text-[9.5px]"
                style={{ color: cfg.ink }}
              >
                {cfg.label} · RISK {active.riskScore}
              </span>
              <h3 className="display mt-1.5 text-[26px] leading-tight text-ink md:text-[30px]">
                {active.company}.
              </h3>
              <p className="mt-2 text-[13.5px] leading-[1.7] text-ink-2 italic max-w-[60ch]">
                {active.summary}
              </p>
            </div>
            <div className="flex items-center gap-2 shrink-0">
              <img
                src={active.csm.avatar}
                alt={active.csm.name}
                className="h-8 w-8 rounded-full border border-line object-cover filter grayscale-[0.1]"
                loading="lazy"
              />
              <div className="text-[11px] text-ink-3">
                <div>CSM</div>
                <div className="mono text-[11px] text-ink uppercase tracking-[0.08em]">
                  {active.csm.name.split(" ")[0]}
                </div>
              </div>
            </div>
          </div>

          <hr className="rule my-5" />

          <div className="label">Evidence</div>
          <ol className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-2">
            {active.evidence.map((e, i) => {
              const Icon = ICONS[`${e.kind === "usage" ? "activity" : e.kind === "support" ? "life-buoy" : e.kind === "contract" ? "file-signature" : e.kind === "sentiment" ? "heart-pulse" : "users"}`];
              return (
                <li
                  key={i}
                  className="flex items-start gap-3 border border-line bg-paper-2/30 rounded-[4px] px-3 py-2.5"
                >
                  <Icon
                    className="h-3.5 w-3.5 mt-1"
                    strokeWidth={1.75}
                    style={{ color: "var(--accent)" }}
                  />
                  <div className="min-w-0 flex-1">
                    <div className="flex items-baseline justify-between gap-2">
                      <span className="text-[12.5px] text-ink leading-tight">
                        {e.label}
                      </span>
                      {e.delta && (
                        <span
                          className="mono text-[10.5px] tabular-nums shrink-0"
                          style={{ color: "var(--alarm)" }}
                        >
                          {e.delta}
                        </span>
                      )}
                    </div>
                    <div className="mt-0.5 text-[11.5px] text-ink-3 leading-[1.5]">
                      {e.detail}
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>

          <div
            className="mt-5 border-l-2 px-3 py-2 rounded-sm"
            style={{ borderColor: "var(--accent)", background: "var(--accent-soft)" }}
          >
            <div className="mono text-[10px] tracking-[0.14em]" style={{ color: "var(--accent-2)" }}>
              NEXT ACTION · {active.nextAction.by.toUpperCase()}
            </div>
            <div className="text-[13px] text-ink mt-1">{active.nextAction.action}</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
