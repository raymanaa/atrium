import { ArrowLeft } from "lucide-react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { AtRiskGrid } from "@/components/at-risk-grid";
import { ACCOUNTS, getAccount, riskConfig } from "@/lib/accounts";

export function generateStaticParams() {
  return ACCOUNTS.map((a) => ({ accountId: a.slug }));
}

export const dynamicParams = false;

export default async function AccountPage({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  const { accountId } = await params;
  const a = getAccount(accountId);
  if (!a) notFound();
  return (
    <div className="mx-auto max-w-[1200px] px-6 pt-6 pb-24 md:px-8">
      <div className="flex items-center justify-between border-b border-line pb-3">
        <Link href="/accounts" className="inline-flex items-center gap-1.5 text-[12px] text-ink-3 hover:text-ink transition-colors">
          <ArrowLeft className="h-3.5 w-3.5" strokeWidth={1.75} />
          <span className="label !text-[10px]">All accounts</span>
        </Link>
      </div>

      <header className="pt-10 pb-6">
        <span
          className="label !text-[9.5px]"
          style={{ color: riskConfig(a.risk).ink }}
        >
          {riskConfig(a.risk).label} · RISK {a.riskScore}
        </span>
        <h1 className="display mt-3 text-[48px] leading-[0.98] tracking-[-0.014em] text-ink md:text-[68px]">
          {a.company}.
        </h1>
        <p className="display-italic mt-2 text-[19px] text-ink-2">
          {a.plan} · {a.arr} · renewal in {a.renewalWindow}
        </p>
      </header>

      <AtRiskGrid accounts={[a]} />
    </div>
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ accountId: string }>;
}) {
  const { accountId } = await params;
  const a = getAccount(accountId);
  if (!a) return { title: "Account · Atrium" };
  return { title: `${a.company} · Atrium`, description: a.summary };
}
