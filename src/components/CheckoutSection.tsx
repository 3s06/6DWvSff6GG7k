import { MdOutlineImage, MdOutlineOndemandVideo , MdOutlineTabletMac   } from "react-icons/md";
import { AlarmClockIcon } from "./ui/alarm-clock";
import { MessageSquareMoreIcon } from "./ui/message-square-more";
import { SquareStackIcon } from "./ui/square-stack";
import { MonitorCheckIcon } from "./ui/monitor-check";
import { LayoutPanelTopIcon } from "./ui/layout-panel-top";
import { FileTextIcon } from "./ui/file-text";
import { ItalicIcon } from "./ui/italic";
import { BadgePercentIcon } from "./ui/badge-percent";
import { UpvoteIcon } from "./ui/upvote";
import { ChartSplineIcon } from "./ui/chart-spline";
import { VibrateIcon } from "./ui/vibrate";
import { CartIcon } from "./ui/cart";

export function SessãoDoChekout() {
    return (    
        <section className="bg-white w-full min-h-screen mx-auto gap-y-[10px] flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center w-full max-w-lg">
                <div className="border border-black/30 rounded-full px-4 py-2 flex items-center justify-center">
                    <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                        <CartIcon size={15} />
                    </div>
                    <span className="text-black tracking-tight font-medium">Checkout</span>
                </div>
                <div className="flex flex-col items-center gap-y-[20px]">
                    <h1 className="text-black text-center tracking-tight font-semibold text-[3rem] sm:text-[3.75rem] leading-[3rem] sm:leading-[3.5rem]">Construa seu <br />próprio checkout.</h1>
                    <p className="text-center text-sm sm:text-base text-black/60 font-semibold tracking-tight">Adicione modelos pré-definidos, ou crie seu próprio layout de checkout.</p>
                </div>
            </div>
            <div className="flex flex-col items-center gap-y-[10px] w-full">
                <div className="flex items-center gap-2">
                        <div className="border border-black/30 hover:-translate-y-2 ease-in-out transition-transform duration-150 rounded-full px-4 py-2 flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <MdOutlineImage size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Imagens</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <MdOutlineOndemandVideo size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Vídeos</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 hidden sm:flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <LayoutPanelTopIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Layout Responsivo</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <AlarmClockIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Cronômetro</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 hidden sm:flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <SquareStackIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Banners</span>
                        </div>
                </div>
                <div className="flex sm:hidden items-center gap-2">
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex sm:hidden items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <LayoutPanelTopIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Layout Responsivo</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex sm:hidden items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <FileTextIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Listas</span>
                        </div>
                </div>
                <div className="flex sm:hidden items-center gap-2">
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex sm:hidden items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <ItalicIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Textos</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex sm:hidden items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <UpvoteIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Vantagens</span>
                        </div>
                </div>
                <div className="flex items-center gap-2">
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <ChartSplineIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Indicador de Engajamento</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 hidden sm:flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <FileTextIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Listas</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 hidden sm:flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <ItalicIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Textos</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <BadgePercentIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Order Bump</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 hidden sm:flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <UpvoteIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Vantagens</span>
                        </div>
                </div>
                <div className="flex items-center gap-2">
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <MessageSquareMoreIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Depoimentos</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <MonitorCheckIcon  size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Desktop</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 hidden sm:flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <MdOutlineTabletMac size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Tablet</span>
                        </div>
                        <div className="hover:-translate-y-2 ease-in-out transition-transform duration-150 border border-black/30 rounded-full px-4 py-2 flex items-center justify-center">
                            <div className="rounded-full border border-black/30 text-black flex items-center justify-center size-7 mr-1 ">
                                <VibrateIcon size={15} />
                            </div>
                            <span className="text-black tracking-tight font-medium">Mobile</span>
                        </div>
                </div>
            </div>
        </section>
    )
}