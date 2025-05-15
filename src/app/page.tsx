import { SessãoDeRelatorios } from "@/components/AnalyticsSection";
import { SessãoDoChekout } from "@/components/CheckoutSection";
import { Footer } from "@/components/Footer";
import { HeroPáginaPrincipal } from "@/components/HeroPáginaPrincipal";
import { NavbarPáginaPrincipal } from "@/components/NavbarPáginaPrincipal";
import { SessãoDosProdutos } from "@/components/ProductsSeciton";
import { SessãoDeIntegrações } from "@/components/Sections/SessãoDeIntegrações";

export default function Home() {
  return (
    <div className="flex flex-col w-full bg-black">
        <NavbarPáginaPrincipal />
        <HeroPáginaPrincipal />
        <SessãoDeRelatorios />
        <SessãoDosProdutos />
        <SessãoDeIntegrações />
        <SessãoDoChekout />
        <Footer />
    </div>
  );
}
