import type { Metadata } from "next";
import "../globals.css";
import Header from "../componets/header/page";
import Footer from "../componets/footer/page";



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
      <Header/>
      <body>{children}</body>
      <Footer/>
    </html>
  );
}
