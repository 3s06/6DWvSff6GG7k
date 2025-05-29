/* 
  * @descrição Página de produtos. 
  *
*/

import { CreateProducButton } from "@/components/Buttons/create-product";
import { NavbarDashboard } from "@/components/NavbarDashboardUsuário";
import { HandCoinsIcon } from "@/components/ui/hand-coins";
import { PlusIcon } from "lucide-react";
import { MdSearch } from "react-icons/md";

export default function PáginaDeProtudos() {
    return (
        <div className="bg-white dark:bg-neutral-950 flex flex-col w-full">
          <NavbarDashboard />
          <div className="w-full p-2 sm:p-6 flex items-start justify-between">
            <div className="realtive flex border border-black/10 w-full max-w-[250px] sm:max-w-xl rounded-xl py-3 px-1">
                <MdSearch size={25} className="translate-x-1/2 text-gray-500" />
                <input placeholder="Procure pelo Nome ou Id do produto" type="text" className="ml-5 flex text-black w-full focus:outline-none dark:text-white" />
            </div>
            <CreateProducButton />
          </div>
          <div className="flex p-2 w-full sm:p-6">
            <div className="bg-neutral-100 w-full border-b border-neutral-400 items-center justify-center rounded-b-none rounded-xl p-2 sm:p-3 py-4 grid grid-cols-5">
                <span className="text-neutral-500 font-medium tracking-tight text-base truncate">Id do Prod.</span>
                <span className="text-neutral-500 font-medium tracking-tight text-base">Nome</span>
                <span className="text-neutral-500 font-medium tracking-tight text-base">Vendas</span>
                <span className="text-neutral-500 font-medium tracking-tight text-base">Status</span> 
                <span className="text-neutral-500 font-medium tracking-tight text-base">Ações</span> 
            </div>
          </div>
        </div>
    )
}