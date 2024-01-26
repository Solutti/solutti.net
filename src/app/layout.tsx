import type { Metadata } from "next";
import "./globals.css";
import { Anek_Gujarati } from "next/font/google";

const anek_gujarati = Anek_Gujarati({ subsets: ["gujarati"] });

export const metadata: Metadata = {
  title: "Solutti Networks",
  description: "Criando conexões, simplificando soluções",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={anek_gujarati.className}>{children}</body>
    </html>
  );
}
