import Image from "next/image";
import Logo from "../../../public/logo/logo.png"

export default function Aviso() {
  return (
    <main className="flex items-center justify-center min-h-screen min-w-screen flex-col bg-background">
      <div className="text-center items-center justify-center flex flex-col p-24">
        <Image src={Logo} alt="Logotipo Solutti Networks" width={250} className=" mb-6"/>
        <p className="text-black text-lg">EM BREVE</p>
        <a href="mailto:comercial@solutti.net" className="no-underline text-gray text-base cursor-pointer hover:text-primary">comercial@solutti.net</a>
      </div>
    </main>
  );
}
