"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { useState } from "react";

import {
  RiDashboardLine,
  RiLineChartLine,
} from "react-icons/ri";
import { HiOutlineCreditCard } from "react-icons/hi";
import {
  MdStackedBarChart,
  MdOutlineHelp,
  MdOutlineDashboardCustomize,
  MdOutlineKeyboardDoubleArrowLeft,
  MdOutlineKeyboardDoubleArrowRight,
} from "react-icons/md";
import { FaRegHandPeace } from "react-icons/fa";
import { HiMiniShoppingBag } from "react-icons/hi2";

import { SymbolValora } from "./Icons/SvgValora";
const LinkDeNavegaçãoSidebar = [
  { name: "Dashboard", path: "/dashboard", icon: RiDashboardLine },
  { name: "Produtos", path: "/dashboard/products", icon: HiMiniShoppingBag },
  { name: "Vendas", path: "/dashboard/sales", icon: RiLineChartLine },
  { name: "Financeiro", path: "/dashboard/financial", icon: HiOutlineCreditCard },
  { name: "Relatórios", path: "/dashboard/reports", icon: MdStackedBarChart },
  { name: "Integrações", path: "/dashboard/integrations", icon: MdOutlineDashboardCustomize },
  { name: "Indique e Ganhe", path: "/dashboard/referral", icon: FaRegHandPeace },
  { name: "Ajuda", path: "/dashboard/help", icon: MdOutlineHelp },
];

export function SidebarDashboard() {
  const pathname = usePathname();
  const [isCollapsed, setIsCollapsed] = useState(false);

  return (
    <aside
      className={`hidden h-auto sm:flex flex-col p-4 bg-indigo-50/50 dark:bg-white/5 transition-all duration-200 ease-linear ${
        isCollapsed ? "w-[100px]" : "w-[290px]"
      }`}
    >
      <div className="flex items-center w-full justify-between my-6">
        {isCollapsed  ?
          <SymbolValora className="w-[43px] h-[43px] fill-black dark:fill-white " />
          :  
         <div className="flex items-center gap-0.5">
            <SymbolValora className="w-[40px] h-[40px] fill-black dark:fill-white " />
            <span className="text-2xl text-black dark:text-white tracking-tight font-medium">Valora Pay</span>
          </div> 
          }
        <button
          onClick={() => setIsCollapsed(!isCollapsed)}
          className="size-10 transition-colors ease-linear duration-300 cursor-pointer rounded-xl hover:bg-black/10 dark:hover:bg-white/10 text-black/60 dark:text-white/60 flex items-center justify-center"
        >
          {isCollapsed ? (
            <MdOutlineKeyboardDoubleArrowRight size={20} />
          ) : (
            <MdOutlineKeyboardDoubleArrowLeft size={20} />
          )}
        </button>
      </div>

      {!isCollapsed && (
        <div className="flex items-start mb-[20px]">
          <span className="text-sm text-black/60 dark:text-white/60 uppercase font-medium">
            Menu
          </span>
        </div>
      )}

      <div className="flex flex-col w-full items-start gap-y-[12px]">
        {LinkDeNavegaçãoSidebar.slice(0, 6).map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${
              pathname === link.path
                ? "bg-black/5 dark:bg-white/5 text-black dark:text-white"
                : "hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white"
            } rounded-2xl font-medium flex items-center py-3 px-4 w-full transition-colors ease-in-out duration-300`}
          >
            <link.icon
               size={isCollapsed ? 20 : 20}
              className={`${isCollapsed ? "mx-auto" : "mr-2"} transition-all`}
            />
            {!isCollapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </div>

      <div className="bg-black/10 dark:bg-white/10 w-full h-[1px] my-5"></div>

      <div className="flex flex-col w-full items-start gap-y-[12px]">
        {LinkDeNavegaçãoSidebar.slice(6).map((link) => (
          <Link
            key={link.name}
            href={link.path}
            className={`${
              pathname === link.path
                ? "bg-black/5 dark:bg-white/5 text-black dark:text-white"
                : "hover:bg-black/5 dark:hover:bg-white/5 text-black/60 dark:text-white/70 hover:text-black dark:hover:text-white"
            } rounded-2xl font-medium flex items-center py-3 px-4 w-full transition-colors ease-in-out duration-300`}
          >
            <link.icon
              size={isCollapsed ? 20 : 20}
              className={`${isCollapsed ? "mx-auto" : "mr-2"} transition-all`}
            />
            {!isCollapsed && <span>{link.name}</span>}
          </Link>
        ))}
      </div>
    </aside>
  );
}
