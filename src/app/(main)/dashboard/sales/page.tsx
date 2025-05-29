/* 
  * @descrição Página responsável pelo qual o usuário irá ver suas vendas
  *
*/
import { NavbarDashboard } from "@/components/NavbarDashboardUsuário"
import { MdSearch } from "react-icons/md"
import { Badge } from "@/components/ui/badge"
export default function PáginasDeVendas() {
    return (
        <div className="bg-white dark:bg-neutral-950 flex flex-col w-full">
          <NavbarDashboard />
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 p-6">
                <div className="rounded-xl shadow-md w-full px-[20px] py-[25px] p-2 max-w-md gap-y-[20px] flex flex-col items-start justify-start">
                  <h2 className="text-black dark:text-white text-sm tracking-tight font-medium">Valor Liquído</h2>
                  <h1 className="text-black dark:text-white text-4xl tracking-tight font-bold leading-2">R$ 0,00</h1>
                </div>
                <div className="rounded-xl shadow-md w-full px-[20px] py-[25px] p-2 max-w-md gap-y-[20px] flex flex-col items-start justify-start">
                  <h2 className="text-black dark:text-white text-sm tracking-tight font-medium">Qtd. vendas</h2>
                  <h1 className="text-black dark:text-white text-4xl tracking-tight font-bold leading-2">0</h1>
                </div>
                <div className="rounded-xl shadow-md w-full px-[20px] py-[25px] p-2 max-w-md gap-y-[20px] flex flex-col items-start justify-start">
                  <h2 className="text-black dark:text-white text-sm tracking-tight font-medium">Qtd. clientes</h2>
                  <h1 className="text-black dark:text-white text-4xl tracking-tight font-bold leading-2">0</h1>
                </div>
            </div>
            <div className="w-full p-2 sm:p-6 flex items-start justify-between">
            <div className="realtive flex border border-black/10 w-full max-w-[250px] sm:max-w-xl rounded-xl py-3 px-1">
                <MdSearch size={25} className="translate-x-1/2 text-gray-500" />
                <input placeholder="Buscar" type="text" className="ml-5 flex text-black w-full focus:outline-none dark:text-white" />
            </div>
            <button className="w-full max-w-[130px] sm:max-w-[260px] bg-indigo-500 hover:bg-indigo-400 cursor-pointer rounded-xl py-3 flex items-center justify-center">
                <span className="text-white font-medium tracking-tight ">Filtros</span>
            </button>
          </div>
            <div className="flex flex-col p-2 w-full sm:p-6">
              <div className="bg-neutral-100 w-full border-b border-neutral-400 items-center justify-center rounded-b-none rounded-xl p-2 sm:p-3 py-4 grid grid-cols-6">
                  <span className="text-neutral-500 font-medium tracking-tight text-base truncate">Id</span>
                  <span className="text-neutral-500 font-medium tracking-tight text-base">Data</span>
                  <span className="text-neutral-500 font-medium tracking-tight text-base">Cliente</span> 
                  <span className="text-neutral-500 font-medium tracking-tight text-base">Status</span> 
                  <span className="text-neutral-500 font-medium tracking-tight text-base">Ações</span> 
              </div>
              <div className="bg-neutral-100 h-full items-center justify-center p-6 w-full grid grid-cols-6 gap-5">
                  <span>Teste</span>
                  <span>26/04/2025</span>
                  <span>Não Informado</span>
                  <Badge className="bg-yellow-200/50">
                    <span className="relative flex size-2 mr-0.5">
                      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-yellow-500 opacity-75"></span>
                      <span className="relative inline-flex size-2 rounded-full bg-yellow-400"></span>
                    </span>
                    <p className="text-xs text-black">Pendente</p>
                  </Badge >
                  <div className="grid grid-cols-3 items-center  w-full gap-1 bg-neutral-50">
                      <div className="bg-neutral-200 flex items-center justify-center rounded-xl w-[10px] h-[10px]">
                        
                      </div>
                      <div className="bg-neutral-200 flex items-center justify-center rounded-xl w-[10px] h-[10px]">
                      </div>
                      <div className="bg-neutral-200 flex items-center justify-center rounded-xl w-[10px] h-[10px]">

                      </div>
                  </div>
              </div>
          </div>
        </div>
    )
}