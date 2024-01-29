// Páginas
import Site from "./site/site"; // ---> Página inícial Site
import Aviso from "./aviso/aviso"; // ---> Página Aviso | Manutenção

// Config
import { produção } from "./config"; // ---> Arquivo de config do site

export default function Home() {
  return (
    <main>
      {produção == true ? <Site/> : <Aviso/>} {/* Se produção estiver em "true" leve para o site | "false" para a página de avisos  */}
    </main>
  );
}
