/* 
  * @descrição Página responsável para que o usuário possa ver seu saldo e gerir seu saque e afins. 
  *
*/

import { NavbarDashboard } from "@/components/NavbarDashboardUsuário";
import { HandCoinsIcon } from "@/components/ui/hand-coins";

export default function PáginaDoFinanceiro() {
    return (
        <div className="bg-white dark:bg-neutral-950 flex flex-col w-full">
          <NavbarDashboard />
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-3 items-center p-2 sm:p-6">
          <div className="bg-white dark:bg-neutral-950 group hover:bg-emerald-50 rounded-2xl sm:rounded-3xl w-[390px] p-3 sm:px-4 sm:py-4 flex items-start justify-start border border-emerald-200 dark:border-white/30 hover:border-emerald-300 dark:hover:bg-white/5">
              <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 dark:bg-transparent dark:text-white dark:border-white/50 w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                <HandCoinsIcon size={25} />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-start justify-between w-full">
                  <span className="text-black dark:text-white tracking-tight text-md font-semibold">
                    Saldo Disponível
                  </span>
                </div>
                <h1 className="text-2xl text-black tracking-tight font-bold dark:textwhite">R$ 0,00</h1>
              </div>
          </div>
          <div className="bg-white dark:bg-neutral-950 group hover:bg-emerald-50 rounded-2xl sm:rounded-3xl w-[390px] p-3 sm:px-4 sm:py-4 flex items-start justify-start border border-emerald-200 dark:border-white/30 hover:border-emerald-300 dark:hover:bg-white/5">
              <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 dark:bg-transparent dark:text-white dark:border-white/50 w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] rounded-xl sm:rounded-2xl flex items-center justify-center mr-3 sm:mr-4">
                <HandCoinsIcon size={25} />
              </div>
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-start justify-between w-full">
                  <span className="text-black dark:text-white tracking-tight text-md font-semibold">
                    Saldo a liberar 
                  </span>
                </div>
                <h1 className="text-2xl text-black tracking-tight font-bold dark:textwhite">R$ 0,00</h1>
              </div>
          </div>
          <div className="bg-white dark:bg-neutral-950 group hover:bg-emerald-50 rounded-2xl sm:rounded-3xl w-[390px] p-3 sm:px-4 sm:py-4 flex items-start justify-between border border-emerald-200 dark:border-white/30 hover:border-emerald-300 dark:hover:bg-white/5">
              <div className="flex flex-col items-start justify-start">
                <div className="flex items-start justify-between w-full mb-1">
                  <span className="text-black dark:text-white tracking-tight text-md font-semibold">
                    Efetuar Saque
                  </span>
                </div>
                <p className="text-sm text-gray-500 tracking-tight font-medium dark:text-neutral-500">O dinheiro cairá na sua conta em até 1 dia útil</p>
              </div>
              <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 dark:bg-transparent dark:text-white dark:border-white/50 w-[60px] h-[60px] sm:w-[55px] sm:h-[55px] rounded-xl sm:rounded-2xl flex items-center justify-center ">
                <HandCoinsIcon size={25} />
              </div>
          </div>
          </div>
          <div className="flex p-2 sm:p-6">
            <div className="bg-neutral-200 w-full border-b border-neutral-400 items-center justify-center rounded-b-none rounded-xl p-2 sm:p-3 py-4 grid grid-cols-3">
                <span className="text-neutral-600 font-medium tracking-tight text-base">Data</span>
                <span className="text-neutral-600 font-medium tracking-tight text-base">Valor líquido</span>
                <span className="text-neutral-600 font-medium tracking-tight text-base">Status</span> 
            </div>
          </div>
        </div>
    )
}