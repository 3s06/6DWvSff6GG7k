import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";

const InterFont = Inter_Tight({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Valora - Seu negócio, seu fluxo. Com Valora.",
  description: "Simplifique seus pagamentos online com a Valora. API fácil, suporte humanizado e integração com Pix, cartão e mais.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${InterFont.className} antialiased`}
      >
       {children}
      </body>
    </html>
  );
}
