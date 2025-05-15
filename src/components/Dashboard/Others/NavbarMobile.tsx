"use client";

import { usePathname } from "next/navigation";
import Link from "next/link";
import { RiDashboardLine, RiLineChartLine } from "react-icons/ri";
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
import clsx from "clsx";

const LinkDeNavegaçãoSidebar = [
  { name: "Dashboard", path: "/dashboard", icon: RiDashboardLine },
  { name: "Produtos", path: "/dashboard/products", icon: HiMiniShoppingBag },
  { name: "Vendas", path: "/dashboard/sales", icon: RiLineChartLine },
  { name: "Financeiro", path: "/dashboard/financial", icon: HiOutlineCreditCard },
  { name: "Relatórios", path: "/dashboard/reports", icon: MdStackedBarChart },
  { name: "Integrações", path: "/dashboard/integrations", icon: MdOutlineDashboardCustomize },
  { name: "Indique", path: "/dashboard/referral", icon: FaRegHandPeace },
  { name: "Ajuda", path: "/dashboard/help", icon: MdOutlineHelp },
];

export function MobileBar() {
  const pathname = usePathname();

  return (
    <div className="sm:hidden fixed bottom-0 left-0 right-0 z-50 h-[120px] bg-white dark:bg-neutral-950 border-t border-black/10 dark:border-white/10 flex justify-around items-center shadow-md">
      {LinkDeNavegaçãoSidebar.slice(0, 5).map((link) => {
        const isActive = pathname === link.path;

        return (
          <Link
            key={link.path}
            href={link.path}
            className={clsx(
              "flex flex-col items-center font-medium justify-center text-xs transition-colors",
              isActive ? "text-black dark:text-white" : "text-gray-400 hover:text-black dark:text-white/60 dark:hover:text-white"
            )}
          >
            <link.icon  size={35} className="mb-1" />
            <span className="text-base">{link.name}</span>
          </Link>
        );
      })}
    </div>
  );
}
