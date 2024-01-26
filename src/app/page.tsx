import Site from "./site/page";
import Aviso from "./aviso/page";

export default function Home() {
  var produção:any = false;
  return (
    <main>
      {produção == true ? <Site/> : <Aviso/>}
    </main>
  );
}
