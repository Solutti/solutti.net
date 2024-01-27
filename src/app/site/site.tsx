import { QuemSomos } from "../componets/sections/about";
import { Hero } from "../componets/sections/hero";
import { Portfolio } from "../componets/sections/portfolio";
import { Presenca } from "../componets/sections/presenca";

export default function Site() {
  return (
    <main className="flex min-h-screen min-w-screen flex-col items-center justify-center bg-primary">
      <Hero/>
      <QuemSomos/>
      <Portfolio/>
      <Presenca/>
    </main>
  );
}
