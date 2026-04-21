"use client";

/**
 * HeroBriefing — animated diagram for Atrium's landing.
 *
 * Rule 2: a morning-briefing card authoring itself on a 14s loop.
 * First the date materializes; then three account rows flip in one at
 * a time; then evidence chips drop below each row; then a bronze
 * "CALL BY 11 AM" pin stamps on the first row.
 */
export function HeroBriefing() {
  return (
    <div className="relative w-full">
      <div className="relative mx-auto max-w-[920px] bg-card border border-line rounded-[6px] overflow-hidden">
        <div className="flex items-baseline justify-between border-b border-line px-6 py-3 bg-paper-2/40">
          <span className="display text-[17px] text-ink">Atrium</span>
          <span className="mono text-[10.5px] text-ink-3 tracking-[0.14em]">
            DAILY BRIEFING
          </span>
        </div>

        <div className="px-8 py-8 md:px-12 md:py-10">
          <div className="stage-date">
            <div className="label">Tuesday, April 21 · 2026</div>
            <h3 className="display mt-1 text-[32px] leading-[1.08] text-ink md:text-[40px]">
              Three today.{" "}
              <span className="display-italic" style={{ color: "var(--accent)" }}>
                Ironbridge first.
              </span>
            </h3>
          </div>

          <ol className="mt-8 flex flex-col gap-3">
            <AccountRow
              delay="2.2s"
              evidenceDelay="3.4s"
              name="Ironbridge Capital"
              arr="$148K"
              risk="CRITICAL"
              riskColor="var(--alarm)"
              pinDelay="5.6s"
              hasPin
              evidence={["Usage −62% · 3w", "New CIO · no handover", "Renewal in 18 days"]}
            />
            <AccountRow
              delay="4.0s"
              evidenceDelay="5.2s"
              name="Northline Logistics"
              arr="$62K"
              risk="AT RISK"
              riskColor="var(--accent)"
              evidence={["NPS 8 → 4", "Rollouts adopt 12%", "2 migration tickets"]}
            />
            <AccountRow
              delay="5.8s"
              evidenceDelay="7.0s"
              name="Sable Capital"
              arr="$94K"
              risk="AT RISK"
              riskColor="var(--accent)"
              evidence={["Champion changed role", "SOC 2 pressure ×2", "Usage stable"]}
            />
          </ol>

          <div className="stage-seal mt-8 flex items-center justify-end">
            <div
              className="inline-flex items-baseline gap-2 mono text-[10.5px] tracking-[0.16em] px-3 py-1.5"
              style={{
                color: "var(--calm)",
                borderLeft: "2px solid var(--calm)",
                background: "var(--calm-soft)",
              }}
            >
              <span>READY</span>
              <span className="text-ink-3">· briefed · 6:42 AM local</span>
            </div>
          </div>
        </div>
      </div>

      <style>{`
        .stage-date {
          opacity: 0;
          animation: date-life 14s linear infinite both;
        }
        @keyframes date-life {
          0%, 3%    { opacity: 0; transform: translateY(4px); }
          9%        { opacity: 1; transform: translateY(0);   }
          88%       { opacity: 1; transform: translateY(0);   }
          94%,100%  { opacity: 0; }
        }

        .row-card {
          opacity: 0;
          transform: translateY(8px);
          animation: row-life 14s linear infinite both;
        }
        @keyframes row-life {
          0%, 10%   { opacity: 0; transform: translateY(8px); }
          18%       { opacity: 1; transform: translateY(0);   }
          88%       { opacity: 1; transform: translateY(0);   }
          94%,100%  { opacity: 0; }
        }

        .row-chips {
          opacity: 0;
          animation: chips-life 14s linear infinite both;
        }
        @keyframes chips-life {
          0%, 20%   { opacity: 0; }
          28%       { opacity: 1; }
          88%       { opacity: 1; }
          94%,100%  { opacity: 0; }
        }

        .call-pin {
          opacity: 0;
          transform: rotate(-4deg) scale(0.85);
          animation: pin-life 14s linear infinite both;
        }
        @keyframes pin-life {
          0%, 36%   { opacity: 0; transform: rotate(-4deg) scale(0.85); }
          42%       { opacity: 1; transform: rotate(-4deg) scale(1.08); }
          46%       { opacity: 1; transform: rotate(-4deg) scale(1);    }
          88%       { opacity: 1; transform: rotate(-4deg) scale(1);    }
          94%,100%  { opacity: 0; }
        }

        .stage-seal {
          opacity: 0;
          animation: seal-life 14s linear infinite both;
        }
        @keyframes seal-life {
          0%, 60%   { opacity: 0; }
          66%       { opacity: 1; }
          88%       { opacity: 1; }
          94%,100%  { opacity: 0; }
        }
      `}</style>
    </div>
  );
}

function AccountRow({
  delay,
  evidenceDelay,
  name,
  arr,
  risk,
  riskColor,
  evidence,
  hasPin,
  pinDelay,
}: {
  delay: string;
  evidenceDelay: string;
  name: string;
  arr: string;
  risk: string;
  riskColor: string;
  evidence: string[];
  hasPin?: boolean;
  pinDelay?: string;
}) {
  return (
    <li
      className="row-card relative border border-line bg-card rounded-[4px] px-4 py-3"
      style={{ animationDelay: delay }}
    >
      <div className="flex items-baseline justify-between">
        <div className="flex items-baseline gap-3">
          <span className="display text-[20px] text-ink leading-none">{name}</span>
          <span className="mono text-[11px] text-ink-3 tabular-nums">{arr}</span>
        </div>
        <span
          className="mono text-[9.5px] font-semibold tracking-[0.18em]"
          style={{ color: riskColor }}
        >
          {risk}
        </span>
      </div>
      <ul
        className="row-chips mt-2 flex flex-wrap gap-2"
        style={{ animationDelay: evidenceDelay }}
      >
        {evidence.map((e) => (
          <li
            key={e}
            className="mono text-[10.5px] text-ink-2 px-2 py-0.5 rounded-[3px]"
            style={{ background: "var(--paper-2)" }}
          >
            {e}
          </li>
        ))}
      </ul>
      {hasPin && (
        <span
          className="call-pin absolute -top-3 -right-2 inline-flex items-center gap-1 mono text-[9.5px] tracking-[0.16em] px-2 py-1"
          style={{
            color: "var(--paper)",
            background: "var(--accent)",
            animationDelay: pinDelay,
          }}
        >
          CALL BY 11 AM
        </span>
      )}
    </li>
  );
}
