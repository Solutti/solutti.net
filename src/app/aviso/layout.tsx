import type { Metadata } from "next";
import "../globals.css";

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
      <body>{children}</body>
    </html>
  );
}
