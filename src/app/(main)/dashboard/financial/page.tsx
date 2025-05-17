/* 
  * @descrição Página responsável para que o usuário possa ver seu saldo e gerir seu saque e afins. 
  *
*/

import { NavbarDashboard } from "@/components/NavbarDashboardUsuário";
import { HandCoinsIcon } from "@/components/ui/hand-coins";
import { FaRegHandPeace } from "react-icons/fa6";

export default function PáginaDoFinanceiro() {
    return (
        <div className="bg-white dark:bg-neutral-950 flex flex-col w-full">
          <NavbarDashboard />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center p-2 sm:p-6">
          <div className="bg-emerald-500 flex-col dark:bg-neutral-950 group rounded-2xl sm:rounded-3xl w-[390px] p-3 sm:px-4 sm:py-4 flex items-start justify-start border border-emerald-200 dark:border-white/30 hover:border-emerald-300 dark:hover:bg-white/5">
              <div className="flex items-start justify-start">
                <div className="bg-white border text-emerald-500 border-emerald-400 dark:bg-transparent dark:text-white dark:border-white/50 p-1 rounded-md flex items-center justify-center mr-2 sm:mr-2">
                  <FaRegHandPeace size={15} />
                </div>
                <div className="flex items-start justify-between w-full">
                  <span className="text-white tracking-tight text-lg font-semibold">
                    Saldo Disponível
                  </span>
                </div>
              </div>
              <h1 className="text-2xl text-white tracking-tight font-bold dark:textwhite">R$ 0,00</h1>
          </div>
          <div className="bg-blue-500 flex-col dark:bg-neutral-950 group rounded-2xl sm:rounded-3xl w-[390px] p-3 sm:px-4 sm:py-4 flex items-start justify-start border border-blue-200 dark:border-white/30 hover:border-blue-300 dark:hover:bg-white/5">
              <div className="flex items-start justify-start">
                <div className="bg-white border text-blue-500 border-blue-400 dark:bg-transparent dark:text-white dark:border-white/50 p-1 rounded-md flex items-center justify-center mr-2 sm:mr-2">
                  <FaRegHandPeace size={15} />
                </div>
                <div className="flex items-start justify-between w-full">
                  <span className="text-white tracking-tight text-lg font-semibold">
                    Saldo a liberar
                  </span>
                </div>
              </div>
              <h1 className="text-2xl text-white tracking-tight font-bold dark:textwhite">R$ 0,00</h1>
          </div>
          <div className="bg-white dark:bg-neutral-950 group hover:bg-blue-50 rounded-2xl sm:rounded-3xl w-[390px] p-3 sm:px-4 sm:py-4 flex items-start justify-between border border-blue-200 dark:border-white/30 hover:border-blue-300 dark:hover:bg-white/5">
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-start justify-between w-full mb-1">
                  <span className="text-black dark:text-white tracking-tight text-md font-semibold">
                    Efetuar Saque
                  </span>
                </div>
                <p className="text-sm text-gray-500 tracking-tight font-medium dark:text-neutral-500">O dinheiro cairá na sua conta em até 1 dia útil</p>
              </div>
              <div className="bg-blue-100 border text-blue-500 border-blue-400 dark:bg-transparent dark:text-white dark:border-white/50 w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] rounded-xl sm:rounded-2xl flex items-center justify-center ">
                <HandCoinsIcon size={25} />
              </div>
          </div>
          </div>
          <div className="flex p-2 sm:p-6">
            <div className="bg-neutral-100 w-full border-b border-neutral-400 items-center justify-center rounded-b-none rounded-xl p-2 sm:p-3 py-4 grid grid-cols-3">
                <span className="text-neutral-500 font-medium tracking-tight text-base">Data</span>
                <span className="text-neutral-500 font-medium tracking-tight text-base">Valor líquido</span>
                <span className="text-neutral-500 font-medium tracking-tight text-base">Status</span> 
            </div>
          </div>
        </div>
    )
}