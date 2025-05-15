import { SymbolValora } from "@/components/Icons/SvgValora";
import Link from "next/link";
import { MdArrowBack, MdDoorbell } from "react-icons/md";
import { RiUser5Fill, RiCloseCircleFill, RiShieldKeyholeFill, RiInformation2Line, RiCodeSSlashLine, RiBookOpenFill  } from "react-icons/ri";

export default function SettingsPageUser() {
    return (
        <div className="w-full min-h-screen items-center  bg-white flex flex-col px-3 sm:px-28">
            <header className="w-full flex items-center justify-between py-[30px] px-[5px] sm:px-[10px]">
                <Link href="/dashboard" className="rounded-full bg-[#edefea] size-12 flex items-center justify-center">
                    <MdArrowBack size={30} className="text-black" />
                </Link>
                <div className="flex items-center gap-1">
                    <SymbolValora className="w-[50px] h-[50px]" />
                    <span className="hidden sm:block text-semibold text-xl font-semibold tracking-tight leading-3">ValoraPay</span>
                </div>
            </header>
            <div className="flex flex-col w-full max-w-md items-center justify-center gap-y-6 h-auto  overflow-auto">
                {/* Seção: Dados pessoais */}
                <div className="flex flex-col w-full gap-y-4 p-2 sm:p-0">
                    <h1 className="text-black text-3xl tracking-tight font-semibold mb-4">Dados pessoais</h1>

                    <Link href="" className="bg-white max-w-md rounded-3xl transition-all easy-in-out duration-200 flex items-center w-full h-[80px] p-2 hover:bg-[#edefea]">
                    <div className="p-4 rounded-full flex items-center justify-center bg-[#edefea] mr-4">
                        <RiUser5Fill size={30} className="text-black" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-semibold text-xl">Atualizar cadastro</span>
                        <p className="text-black/60 text-base">Gerencie suas informações pessoais e mantenha seus dados atualizados.</p>
                    </div>
                    </Link>
                </div>

                {/* Seção: Configurações */}
                <div className="flex flex-col w-full gap-y-4 p-2 sm:p-0">
                    <h1 className="text-black text-3xl tracking-tight font-semibold mb-4">Configurações</h1>

                    <Link href="" className="bg-white max-w-md rounded-3xl transition-all easy-in-out duration-200 flex items-center w-full h-[80px] p-2 hover:bg-[#edefea]">
                    <div className="p-4 rounded-full flex items-center justify-center bg-[#edefea] mr-4">
                        <RiShieldKeyholeFill size={30} className="text-black" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-semibold text-xl">Segurança e privacidade</span>
                        <p className="text-black/60 text-base">Configure autenticação, senhas e preferências de privacidade.</p>
                    </div>
                    </Link>

                    <Link href="" className="bg-white max-w-md rounded-3xl transition-all easy-in-out duration-200 flex items-center w-full h-[80px] p-2 hover:bg-[#edefea]">
                    <div className="p-4 rounded-full flex items-center justify-center bg-[#edefea] mr-4">
                        <RiInformation2Line size={30} className="text-black" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-semibold text-xl">Política de privacidade</span>
                        <p className="text-black/60 text-base">Entenda como protegemos e usamos seus dados de forma segura.</p>
                    </div>
                    </Link>
                </div>

                {/* Seção: Integração */}
                <div className="flex flex-col w-full gap-y-4 p-2 sm:p-0">
                    <h1 className="text-black text-3xl tracking-tight font-semibold mb-4">Integração</h1>

                    <Link href="" className="bg-white max-w-md rounded-3xl transition-all easy-in-out duration-200 flex items-center w-full h-[80px] p-2 hover:bg-[#edefea]">
                    <div className="p-4 rounded-full flex items-center justify-center bg-[#edefea] mr-4">
                        <RiCodeSSlashLine size={30} className="text-black" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-semibold text-xl">Chaves de API</span>
                        <p className="text-black/60 text-base">Crie, visualize e gerencie suas credenciais de integração.</p>
                    </div>
                    </Link>

                    <Link href="" className="bg-white max-w-md rounded-3xl transition-all easy-in-out duration-200 flex items-center w-full h-[80px] p-2 hover:bg-[#edefea]">
                    <div className="p-4 rounded-full flex items-center justify-center bg-[#edefea] mr-4">
                        <RiBookOpenFill size={30} className="text-black" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-semibold text-xl">Documentação de API</span>
                        <p className="text-black/60 text-base">Saiba como integrar e utilizar nossa API nos seus projetos.</p>
                    </div>
                    </Link>
                </div>

                {/* Seção: Ações e contratos */}
                <div className="flex flex-col w-full gap-y-4 p-2 sm:p-0 mb-5">
                    <h1 className="text-black text-3xl tracking-tight font-semibold mb-4">Ações e contratos</h1>
                    <Link href="" className="bg-white max-w-md rounded-3xl transition-all easy-in-out duration-200 flex items-center w-full h-[80px] p-2 hover:bg-[#edefea]">
                        <div className="p-4 rounded-full flex items-center justify-center bg-[#edefea] mr-4">
                            <MdDoorbell size={30} className="text-black" />
                        </div>
                        <div className="flex flex-col">
                            <span className="text-black font-semibold text-xl">Solicitações e propostas</span>
                            <p className="text-black/60 text-base">Acompanhe ações, contratos e acordos firmados em sua conta.</p>
                        </div>
                    </Link>
                    <Link href="" className="bg-white max-w-md rounded-3xl transition-all easy-in-out duration-200 flex items-center w-full h-[80px] p-2 hover:bg-[#edefea]">
                    <div className="p-4 rounded-full flex items-center justify-center bg-[#edefea] mr-4">
                        <RiCloseCircleFill size={30} className="text-black" />
                    </div>
                    <div className="flex flex-col">
                        <span className="text-black font-semibold text-xl">Encerrar conta</span>
                        <p className="text-black/60 text-base">Solicite a exclusão definitiva da sua conta e dados associados.</p>
                    </div>
                    </Link>
                </div>
            </div>
        </div>
    )
}