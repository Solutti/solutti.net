import type { Metadata, Viewport } from "next"; // Responsável por alterar a Status Bar

// Styles "global" ---> como o projeto é NextJS com Tailwind o style é inline
import "./globals.css";

// Fonts
import { Anek_Gujarati } from "next/font/google";

const anek_gujarati = Anek_Gujarati({ subsets: ["gujarati"] });

export const metadata: Metadata = {
  title: "Solutti Networks", // Título da página
  description: "Criando conexões, simplificando soluções", // Descrição do site | página
};

export const viewport: Viewport = {
  themeColor: '#D2D7DC', // Define a cor da Status Bar na versão mobile
}

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
