import type { Metadata } from "next";
import { AppNav } from "@/components/app-nav";

export const metadata: Metadata = { title: "Atrium — Accounts" };

export default function AccountsLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <AppNav />
      {children}
    </>
  );
}
