import Site from "./site/site";
import Aviso from "./aviso/page";
import { produção } from "./config";

export default function Home() {
  return (
    <main>
      {produção == true ? <Site/> : <Aviso/>}
    </main>
  );
}
