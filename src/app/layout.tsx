import type { Metadata } from "next";
import "./globals.css";
import { Anek_Gujarati } from "next/font/google";
import { produção } from "./config";
import Header from "./componets/header/header";
import Footer from "./componets/footer/footer";

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
      {produção != true ? 
        <body className={anek_gujarati.className}>{children}</body>
      : 
      <>
        <Header/>
        <body className={anek_gujarati.className}>{children}</body>
        <Footer/>
      </>
      }    
    </html>
  );
}
