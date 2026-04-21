export type Risk = "critical" | "at-risk" | "watch" | "healthy";

export type EvidenceKind = "usage" | "support" | "contract" | "sentiment" | "exec-change";

export type Evidence = {
  kind: EvidenceKind;
  label: string;
  detail: string;
  delta?: string;
};

export type Account = {
  id: string;
  slug: string;
  company: string;
  arr: string;
  plan: string;
  csm: {
    name: string;
    avatar: string;
  };
  risk: Risk;
  riskScore: number; // 0-100 (higher = riskier)
  renewalWindow: string;
  summary: string;
  evidence: Evidence[];
  nextAction: { by: string; action: string };
};

export const ACCOUNTS: Account[] = [
  {
    id: "a-ironbridge",
    slug: "ironbridge",
    company: "Ironbridge Capital",
    arr: "$148K",
    plan: "Enterprise",
    csm: { name: "Maya Alves", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    risk: "critical",
    riskScore: 87,
    renewalWindow: "18 days",
    summary: "Usage dropped 62% since the Q1 CIO change; three support tickets on SSO errors this week; renewal 18 days out.",
    evidence: [
      { kind: "usage", label: "Weekly actives down", detail: "62% drop over 3 weeks", delta: "-62%" },
      { kind: "exec-change", label: "New CIO onboarded", detail: "Jordan Ellis started Q1; no handover notes" },
      { kind: "support", label: "3 SSO errors this week", detail: "All from admin accounts; ticket #4112" },
      { kind: "contract", label: "Renewal 18 days out", detail: "No executive sponsor on Atrium side since CIO change" },
    ],
    nextAction: { by: "Today, 11 AM", action: "Call new CIO — exec-sponsor pairing session" },
  },
  {
    id: "a-northline",
    slug: "northline",
    company: "Northline Logistics",
    arr: "$62K",
    plan: "Team",
    csm: { name: "Daniel Rodriguez", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    risk: "at-risk",
    riskScore: 64,
    renewalWindow: "42 days",
    summary: "NPS dropped from 8 to 4 after the March incident; feature adoption of Rollouts at 12% vs. cohort median 45%.",
    evidence: [
      { kind: "sentiment", label: "NPS 8 → 4", detail: "Post-March incident survey; admin respondent" },
      { kind: "usage", label: "Rollouts adoption 12%", detail: "Cohort median 45%; they're on the old flag workflow" },
      { kind: "support", label: "2 tickets on migration", detail: "Stuck on the flag → rollout migration" },
    ],
    nextAction: { by: "Today, 2 PM", action: "Schedule hands-on rollout training" },
  },
  {
    id: "a-sable",
    slug: "sable",
    company: "Sable Capital",
    arr: "$94K",
    plan: "Enterprise",
    csm: { name: "Priya Patel", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    risk: "at-risk",
    riskScore: 58,
    renewalWindow: "62 days",
    summary: "Champion changed roles internally; usage stable but new point of contact hasn't been onboarded; audit log export asked for twice.",
    evidence: [
      { kind: "exec-change", label: "Champion role change", detail: "Matt → new role; Carla now primary" },
      { kind: "usage", label: "Usage stable", detail: "No regression, but concentrated on Carla's team only" },
      { kind: "support", label: "Audit log export × 2", detail: "Carla asked twice; SOC 2 pressure per her messages" },
    ],
    nextAction: { by: "This week", action: "Onboarding session with Carla; pre-brief the audit-export launch" },
  },
  {
    id: "a-keelhaven",
    slug: "keelhaven",
    company: "Keelhaven",
    arr: "$34K",
    plan: "Team",
    csm: { name: "Maya Alves", avatar: "https://randomuser.me/api/portraits/women/44.jpg" },
    risk: "watch",
    riskScore: 41,
    renewalWindow: "91 days",
    summary: "Engagement healthy; new pricing tier came out last month, asked about upsell; low urgency.",
    evidence: [
      { kind: "usage", label: "WAU up 8% MoM", detail: "Consistent growth across team" },
      { kind: "sentiment", label: "Asked about upsell", detail: "Pricing Q in last review; positive signal" },
    ],
    nextAction: { by: "Next month", action: "Upsell conversation tied to mid-year planning" },
  },
  {
    id: "a-wayfind",
    slug: "wayfind",
    company: "Wayfind Labs",
    arr: "$22K",
    plan: "Starter",
    csm: { name: "Daniel Rodriguez", avatar: "https://randomuser.me/api/portraits/men/32.jpg" },
    risk: "watch",
    riskScore: 38,
    renewalWindow: "54 days",
    summary: "Small team, usage concentrated on one user. Single-user risk flagged automatically.",
    evidence: [
      { kind: "usage", label: "1 user = 92% of activity", detail: "Single-user dependency; bus-factor risk" },
    ],
    nextAction: { by: "2 weeks", action: "Nudge Wayfind to onboard a second user" },
  },
  {
    id: "a-anthem",
    slug: "anthem",
    company: "Anthem Ventures",
    arr: "$220K",
    plan: "Enterprise",
    csm: { name: "Priya Patel", avatar: "https://randomuser.me/api/portraits/women/68.jpg" },
    risk: "healthy",
    riskScore: 15,
    renewalWindow: "180 days",
    summary: "Expansion flag — added 40 seats last quarter; NPS 9.4; renewal trailing by 6 months, well-anchored champion.",
    evidence: [
      { kind: "usage", label: "40 seats added Q1", detail: "Expansion signal; bonus accrual good" },
      { kind: "sentiment", label: "NPS 9.4", detail: "Best in portfolio" },
    ],
    nextAction: { by: "Next quarter", action: "QBR + expansion motion for Q3" },
  },
];

export const TODAYS_BRIEFING = {
  date: "2026-04-21",
  callIds: ["a-ironbridge", "a-northline", "a-sable"],
  headline: "Three today. Ironbridge first.",
};

export function getAccount(slug: string) {
  return ACCOUNTS.find((a) => a.slug === slug);
}

export function riskConfig(r: Risk) {
  return {
    critical: { label: "CRITICAL", ink: "var(--alarm)", soft: "var(--alarm-soft)" },
    "at-risk": { label: "AT RISK", ink: "var(--accent)", soft: "var(--accent-soft)" },
    watch:    { label: "WATCH", ink: "var(--ink-2)", soft: "var(--paper-2)" },
    healthy:  { label: "HEALTHY", ink: "var(--calm)", soft: "var(--calm-soft)" },
  }[r];
}

export function evidenceIcon(k: EvidenceKind): string {
  return {
    usage: "activity",
    support: "life-buoy",
    contract: "file-signature",
    sentiment: "heart-pulse",
    "exec-change": "users",
  }[k];
}
