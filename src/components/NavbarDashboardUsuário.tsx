import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import { ChangeThemeButton } from "./Buttons/TrocarDeTemaBotão";
import { PegarUsuarioLogado } from "@/lib/server/appwrite";
import { SymbolValora } from "./Icons/SvgValora";
import { DropDowMenu } from "./Buttons/MenuUsuário";

export async function NavbarDashboard() {
    const user = await PegarUsuarioLogado();

    return (
        <header className="w-full flex items-start sm:items-center justify-between gap-4 p-4">
        {/* Título + Filtros */}
        <div className="flex flex-col sm:flex-row sm:items-center gap-4 w-full">
          <span className="text-2xl sm:text-3xl font-semibold text-black dark:text-white tracking-tight">
            Dashboard
          </span>
        </div>
      
        {/* Ações (botões) */}
        <div className="flex items-center gap-3 sm:gap-4 self-end sm:self-auto">
          <ChangeThemeButton />
          <button className="size-12 rounded-full hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center text-black/60 dark:text-white/60 hover:text-black/80 dark:hover:text-white/80 transition-colors duration-300">
            <HiOutlineBell size={20} />
          </button>
          <DropDowMenu user={user} />
        </div>
      </header>
      
    )
}