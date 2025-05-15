import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";
import Image from "next/image";

const LinksNavegaçãoNavbar = [
    { name: 'Taxas', path: '#taxas' }, 
    { name: 'Analytics', path: '#analytics' }, 
    { name: 'Sobre', path: '#sobre' }, 
    { name: 'Contato', path: '#contato' }
];

export function NavbarPáginaPrincipal() {
    return (
        <header className="pt-5 w-full justify-center flex mx-auto">
            <nav className="fixed flex z-10  items-center bg-black/50 backdrop-blur-2xl justify-between w-[350px] sm:w-full sm:max-w-4xl px-6 py-2 border border-white/10 rounded-full">
                <div className="flex items-center gap-0.5">
                    <Image src={"/assets/logos/valora-svg.svg"} alt="Valora Symbol" width={40} height={40} />
                    <span className="hidden sm:block text-2xl text-white tracking-tight font-medium">Valora Pay</span>
                </div>
                <ul className="hidden sm:flex items-center gap-4">
                    {LinksNavegaçãoNavbar.map((link) => (
                        <li key={link.name}>
                            <Link href={link.path} className="text-white/60 hover:text-white transition-colors">
                                {link.name}
                            </Link>
                        </li>
                    ))}
                </ul>
                <div className="hidden sm:flex items-center gap-2 bg-white/5 rounded-full py-1.5 px-2">
                    <Link href="/signin" className="px-4 py-2 rounded-full text-black transition-colors flex items-center justify-center">
                        <span className="text-white">Login</span>
                    </Link>
                    <Link href="/signup" className="bg-white outline outline-white/10 px-4 py-2 rounded-full text-black hover:bg-white/70 transition-colors flex items-center justify-center">
                        <span className="mr-1">Criar conta</span>
                        <MdOutlineArrowOutward size={20} />
                    </Link>
                </div>
                <button className="flex  text-white sm:hidden border border-white/10 rounded-xl p-2">
                    <GiHamburgerMenu size={20} />
                </button>
            </nav>
        </header>
    );
};