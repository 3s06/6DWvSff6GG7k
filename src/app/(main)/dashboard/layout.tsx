import { NavbarDashboard } from "@/components/NavbarDashboardUsuário";
import { SidebarDashboard } from "@/components/SidebarDashboardUsuário";
import { Metadata } from "next";
import React from "react"
import { ThemeProvider } from "@/hooks/ThemeProvider";

export const metadata: Metadata = {
    title: "Dashboard",
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
              <NavbarDashboard />
              {children}
            </div>
          </ThemeProvider>
        </div>
    );
};