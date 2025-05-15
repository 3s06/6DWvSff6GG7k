/*
 * @descrição Página onde o usuário irá ver detalhamento das suas vendas
 *
 */

import Link from "next/link";
import { HandCoinsIcon } from "@/components/ui/hand-coins";

export default function PáginaDeRelatórios() {
  return (
    <div className="bg-white dark:bg-neutral-950 flex flex-col w-full ">
      <div className="grid grid-cols-1 gap-2 sm:grid-cols-4 items-center">
        <div className="bg-white hover:bg-emerald-50 rounded-2xl px-3 py-2 flex items-start justify-start border border-emerald-100 hover:border-emerald-300">
          <div className="bg-emerald-100 border text-emerald-500 border-emerald-400 size-10 rounded-xl flex items-center justify-center mr-2.5">
            <HandCoinsIcon size={22} />
          </div>
          <div className="flex flex-col items-start justify-start">
            <div className="flex items-start justify-start w-full">
              <span className="text-black tracking-tight font-semibold">
                Vendas Abandondas
              </span>
            </div>
            <p className="text-xs text-neutral-500 hover:text-emerald-300">
              Analise as taxas e as causas das vendas não finalizadas.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
