"use client";

import { usePathname } from "next/navigation";
import Link from "next/link"

import { RiDashboardLine, RiLineChartLine  } from "react-icons/ri";
import { HiOutlineCreditCard } from "react-icons/hi";
import { MdStackedBarChart, MdOutlineHelp, MdOutlineDashboardCustomize, MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight    } from "react-icons/md";
import { FaRegHandPeace } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";
import { CloseAndOpenSidebar } from "./Buttons/FecharSidebarBotão";

const LinkDeNavegaçãoSidebar = [
    { name: 'Dashboard', path: '/dashboard', icon: RiDashboardLine, },
    { name: 'Produtos', path: '/dashboard/sales', icon: HiMiniShoppingBag,  },
    { name: 'Vendas', path: '/dashboard/sales', icon: RiLineChartLine,  },
    { name: 'Financeiro', path: '/dashboard/financial', icon: HiOutlineCreditCard,  },
    { name: 'Relatórios', path: '/dashboard/reports', icon: MdStackedBarChart,  },
    { name: 'Integrações', path: '/dashboard/sales', icon: MdOutlineDashboardCustomize,  },
    { name: 'Indique e Ganhe', path: '', icon: FaRegHandPeace,  },
    { name: 'Ajuda', path: '', icon: MdOutlineHelp,  },
]

export function SidebarDashboard() {

    const pathname = usePathname();

    return (
        <aside className="hidden w-full max-w-[290px] h-auto sm:flex flex-col p-4 bg-indigo-50/50 dark:bg-white/5">
            <div className="flex items-center w-full justify-between my-6">
                <span className="text-2xl text-black dark:text-white text-center font-semibold tracking-tight">Gateway</span>
                <CloseAndOpenSidebar />
            </div>
            <div className="flex items-start mb-[20px]">
                <span className="text-sm text-black/60 dark:text-white/60 uppercase font-medium">Menu</span>
            </div>
            <div className="flex flex-col w-full  items-start gap-y-[12px]">
                {LinkDeNavegaçãoSidebar.slice(0, 6).map((link) => (
                    <Link key={link.name} href={link.path} className={pathname === link.path ? "bg-black/5 dark:bg-white/5 rounded-2xl font-medium flex items-center text-black dark:text-white py-3 px-6 w-full" : "hover:bg-black/5 font-medium  dark:hover:bg-white/5 w-full  text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white rounded-2xl flex items-center py-3 px-6 transition-colors ease-in-out duration-300"}>
                        <link.icon size={20} className="mr-2" />
                        <span>{link.name}</span>
                    </Link>
                ))}
            </div>
            <div className="bg-black/10 dark:bg-white/10 w-full h-[1px] my-5"></div>
            <div className="flex flex-col w-full  items-start gap-y-[12px]">
                {LinkDeNavegaçãoSidebar.slice(6).map((link) => (
                    <Link key={link.name} href={link.path} className={pathname === link.path ? "bg-black/5 dark:bg-white/5 rounded-2xl font-medium flex items-center text-black dark:text-white py-3 px-6 w-full" : "hover:bg-black/5 font-medium  dark:hover:bg-white/5 w-full text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white rounded-2xl flex items-center py-3 px-6 transition-colors ease-in-out duration-300"}>
                        <link.icon size={20} className="mr-2" />
                        <span>{link.name}</span>
                    </Link>
                ))}
            </div>
        </aside>
    )
}