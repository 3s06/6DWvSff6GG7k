import Link from "next/link";
import { MdOutlineArrowOutward } from "react-icons/md";
import { GiHamburgerMenu } from "react-icons/gi";

const LinksNavegaçãoNavbar = [{ name: 'Taxas', path: '#taxas' }, { name: 'Sobre', path: '#sobre' }, { name: 'Contato', path: '#contato' }];

export function NavbarPáginaPrincipal() {
    return (
        <header className="p-8 sm:p-12 flex items-center justify-center w-full">
            <nav className="flex items-center justify-between w-full px-6 py-2 border border-white/10 rounded-full">
                <div className="flex items-center gap-1">
                    <span className="text-xl text-white tracking-tight font-semibold">Gateway</span>
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
                    <Link href="/signin" className="px-4 py-2 rounded-lg text-black hover:bg-white/70 transition-colors flex items-center justify-center">
                        <span className="text-white">Login</span>
                    </Link>
                    <Link href="/signup" className="bg-white outline outline-white/10 px-4 py-2 rounded-full text-black hover:bg-white/70 transition-colors flex items-center justify-center">
                        <span className="mr-1">Criar conta</span>
                        <MdOutlineArrowOutward size={20} />
                    </Link>
                </div>
                <button className="flex sm:hidden border border-white/10 rounded-xl p-2">
                    <GiHamburgerMenu size={20} />
                </button>
            </nav>
        </header>
    );
};