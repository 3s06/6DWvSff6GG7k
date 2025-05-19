import { NavbarDashboard } from "@/components/NavbarDashboardUsuário";
import { SidebarDashboard } from "@/components/SidebarDashboardUsuário";
import { Metadata } from "next";
import React from "react"
import { ThemeProvider } from "@/hooks/ThemeProvider";
import { MobileBar } from "@/components/Dashboard/Others/NavbarMobile";

export const metadata: Metadata = {
  title: "Dashboard | ValoraPay",
  description: "Gerencie seus pagamentos, transações e saldo em tempo real com o painel da ValoraPay.",
  keywords: ["ValoraPay", "Dashboard de Pagamentos", "Gerenciar Transações", "Carteira Digital", "Financeiro"],
  authors: [{ name: "ValoraPay" }],
  openGraph: {
    title: "Dashboard | ValoraPay",
    description: "Visualize e controle suas movimentações financeiras com segurança.",
    url: "https://valorapay.com/dashboard",
    siteName: "ValoraPay",
    locale: "pt_BR",
    type: "website",
  }
};

export default function RootLayoutDashboard({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <div className="flex w-full min-h-screen">
  <ThemeProvider
    attribute="class"
    defaultTheme="system"
    enableSystem
    disableTransitionOnChange
  >
    <SidebarDashboard />
    <div className="flex-1">
      {children}
    </div>
  </ThemeProvider>
</div>
    );
};