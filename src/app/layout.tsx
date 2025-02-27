import type { Metadata, Viewport } from "next"; // Responsável por alterar a Status Bar

// Styles "global" ---> como o projeto é NextJS com Tailwind o style é inline
import "./globals.css";

// Fonts
import { Anek_Gujarati } from "next/font/google";

// Components
import Header from "./componets/header/header";
import { WhatsApp } from "./componets/addons/whatsapp";
import Footer from "./componets/footer/footer";
import { produção } from "./config";

//Vercel dados
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";



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
      <body>
        <script type="text/javascript" async src="https://d335luupugsy2.cloudfront.net/js/loader-scripts/e0aeb777-2dc4-4651-bf36-597b452260fd-loader.js" ></script>
        <Analytics/>
        <SpeedInsights/>
        {produção == true ? 
        <Header/> // Sessão dentro de componets/header/header.tsx
        :
        <></>
        }
        {children}
        {produção == true ?
        <>
          <WhatsApp/> {/* Sessão dentro de componets/addons/whatsapp.tsx */}
          <Footer/> {/* Sessão dentro de componets/footer/footer.tsx */}
        </>
        :
        <></>
        }
      </body>
    </html>
  );
}
