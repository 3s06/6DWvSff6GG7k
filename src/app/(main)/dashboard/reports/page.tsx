/*
 * @descrição Página onde o usuário irá ver detalhamento das suas vendas
 *
 */

import Link from "next/link";
import { HandCoinsIcon } from "@/components/ui/hand-coins";
import { MdArrowForward  } from "react-icons/md";
import { NavbarDashboard } from "@/components/NavbarDashboardUsuário";
import { BoxesIcon } from "@/components/ui/boxes";
import { ArchiveIcon } from "@/components/ui/archive";
import { CartIcon } from "@/components/ui/cart";
import { BlocksIcon } from "@/components/ui/blocks";
import { WorkflowIcon } from "@/components/ui/workflow";

const MapaDeRelatorios = [
  { name: 'Vendas Realizadas', icon: HandCoinsIcon, description: ' Lista de todas as vendas concluídas.', url: '/reports/sales'},
  { name: 'Vendas Abandonas', icon: ArchiveIcon, description: ' Analise as taxas e as causas das vendas não finalizadas.', url: '/reports/abandoned-sales'},
  { name: 'Receita por Produto/Serviço', icon: BoxesIcon, description: ' Analise quanto cada item gerou de receita em um período.', url: '/reports/recipe-product'},
  { name: 'Produtos Mais Vendidos', icon: CartIcon, description: 'Lista os produtos mais vendidos no período.', url: '/reports/vendas-abandonas'},
  { name: 'Estornos e Reembolsos', icon: BlocksIcon, description: ' Lista de vendas que foram reembolsadas ou canceladas', url: '/reports/vendas-abandonas'},
  { name: 'Conversão de Pagamentos', icon: WorkflowIcon, description: 'Mostra quantas pessoas: Iniciaram o checkout e outros', url: '/reports/vendas-abandonas'},
]

export default function PáginaDeRelatórios() {
  return (
    <div className="bg-white dark:bg-neutral-950 flex flex-col w-full">
      <NavbarDashboard />
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center p-2 sm:p-6">
        {MapaDeRelatorios.map((link) => (
          <Link href={link.url} className="bg-white dark:bg-neutral-950 group hover:bg-emerald-50 rounded-2xl sm:rounded-3xl w-[390px] p-3 sm:px-4 sm:py-4 flex items-start justify-start border border-emerald-200 dark:border-white/30 hover:border-emerald-300 dark:hover:bg-white/5">
              <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 dark:bg-transparent dark:text-white dark:border-white/50 w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-2.5">
                <link.icon size={25} />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-start justify-between w-full">
                  <span className="text-black dark:text-white tracking-tight text-md font-semibold">
                    {link.name}
                  </span>
                  <MdArrowForward size={22} className="text-black dark:text-white " />
                </div>
                <p className="text-sm sm:text-xs text-neutral-500 dark:text-neutral-400 group-hover:text-emerald-500 dark:group-hover:text-white">
                  {link.description}
                </p>
              </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
