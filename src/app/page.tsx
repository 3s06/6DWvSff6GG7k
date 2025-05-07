import { HeroPáginaPrincipal } from "@/components/HeroPáginaPrincipal";
import { NavbarPáginaPrincipal } from "@/components/NavbarPáginaPrincipal";
import Image from "next/image";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen w-full bg-black">
        <NavbarPáginaPrincipal />
        <HeroPáginaPrincipal />
    </div>
  );
}
