"use client";
import { usePathname } from "next/navigation"
import { MdKeyboardArrowDown } from "react-icons/md";
import { HiOutlineBell } from "react-icons/hi";
import { ChangeThemeButton } from "./Buttons/TrocarDeTemaBotão";

export function NavbarDashboard() {

    return (
        <header className="w-full flex items-center justify-between p-4">
            <div className="flex items-start">
                <span className="text-2xl text-black dark:text-white font-semibold tracking-tight">Dashboard</span>
            </div>
            <div className="flex items-center">
                <ChangeThemeButton />
                <button className="size-12 rounded-full hover:bg-black/10 dark:hover:bg-white/10 flex items-center justify-center hover:text-black/80 dark:hover:text-white/80 text-black/60 dark:text-white/60 cursor-pointer mr-3.5 transition-colors ease-in-out duration-300">
                    <HiOutlineBell size={20} />
                </button>
                <button className="rounded-full bg-black/5 dark:bg-white/5 px-3 py-2 gap-x-[9px] hidden sm:flex items-center justify-center cursor-pointer">
                    <div className="size-8 rounded-full bg-black/10 dark:bg-white/10 "></div>
                    <span className="text-sm text-black dark:text-white font-medium tracking-tight">Nome Do Usuário</span>
                    <div className="flex items-center justify-center size-6 rounded-full hover:bg-black/5 dark:hover:bg-white/5">
                        <MdKeyboardArrowDown size={20} />
                    </div>
                </button>
            </div>
        </header>
    )
}