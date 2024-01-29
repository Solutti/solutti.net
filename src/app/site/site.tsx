import { QuemSomos } from "../componets/sections/about"; // Componente Quem Somos
import { Hero } from "../componets/sections/hero"; // Componente Hero
import { Portfolio } from "../componets/sections/portfolio"; // Componente Portfólio
import { Presenca } from "../componets/sections/presenca"; // Componente Presença

// Components
import { WhatsApp } from "../componets/addons/whatsapp";
import Header from "../componets/header/header";
import Footer from "../componets/footer/footer";

// INFO 
// Desenvolvedor: Sali
// WhatsApp: (51) 9.9769-6794

export default function Site() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-primary">
      <Header/> {/* Sessão dentro de componets/header/header.tsx */}
      <Hero/> {/* Sessão dentro de componets/sections/hero.tsx */}
      <QuemSomos/> {/* Sessão dentro de componets/sections/about.tsx */}
      <Portfolio/> {/* Sessão dentro de componets/sections/portfolio.tsx */}
      <Presenca/> {/* Sessão dentro de componets/sections/presenca.tsx */}

      <WhatsApp/> {/* Sessão dentro de componets/addons/whatsapp.tsx */}
      <Footer/> {/* Sessão dentro de componets/footer/footer.tsx */}
    </main>
  );
}
