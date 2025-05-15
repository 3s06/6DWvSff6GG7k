"use client";
import { useState, useRef, useEffect } from "react";
import { SignOut } from "@/lib/server/appwrite";
import { RiSettings6Fill, RiArrowRightUpLine, RiVipCrown2Fill, RiEmotionLaughFill    } from "react-icons/ri";
import { FaDiscord } from "react-icons/fa";
import { MdKeyboardArrowDown } from "react-icons/md";
import { SymbolValora } from "../Icons/SvgValora";

import Link from "next/link";
import { useRouter } from "next/navigation";

interface InformaçõesDoUsuário {
    user: {
        name: string,
        email: string,
        avatarUrl: string
    };
};

export function DropDowMenu({ user }: InformaçõesDoUsuário) {
    const DialogMenuRef = useRef<HTMLDivElement>(null);
    const [DialogOpen, setDialogOpen] = useState(false);
    const RouteRedirect = useRouter();

    useEffect(() => {
        function HandleClicarAvatar(event:  MouseEvent) {
            if (DialogMenuRef.current && !DialogMenuRef.current.contains(event.target as Node)) {
                setDialogOpen(false);
            };
        };
        document.addEventListener("mousedown", HandleClicarAvatar);
        return () => document.removeEventListener("mousedown", HandleClicarAvatar);
    }, []);

    const HandleToggleButton = () => {
        setDialogOpen((prev) => !prev);
    };

    async function HandleLogout() {
        const Success = await SignOut();
        if (Success) {
            setDialogOpen(false);
            RouteRedirect.push("/")
        }
    };

    return (
        <div className="realtive">
            <button onClick={HandleToggleButton} className="rounded-full bg-black/5 dark:bg-white/5 px-3 py-2 gap-x-[9px] hidden sm:flex items-center justify-center cursor-pointer">
                    <div className="size-8 flex items-center justify-center rounded-full bg-black/10 dark:bg-white/10 ">
                        <SymbolValora className="w-[20px] h-[20px] fill-black dark:fill-white" />
                    </div>
                    <span className="text-sm text-black dark:text-white font-medium truncate tracking-tight">{user?.name}</span>
            </button>
            {DialogOpen && (
                <div className="absolute w-[240px] h-[521px] sm:h-[225px] overflow-hidden top-22 z-10   items-stretch right-5 sm:right-4 rounded-3xl bg-black/5 dark:bg-white/5 border-black/5 dark:border-slate-50/10 border ">
                    <div className="flex items-start p-2">
                        <Link href={"/@me"} className="relative rounded-xl transition-all inline-flex items-center hover:bg-black/10 dark:hover:bg-white/10 w-full px-2 h-[36px] font-medium text-black dark:text-white  focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)] cursor-pointer">
                            <RiSettings6Fill size={20} className="mr-2  text-black dark:text-white/80" />
                            <p className="text-base">Minha conta</p>
                        </Link>
                    </div>
                    <div className="grow h-px bg-black/5 dark:bg-white/10" />
                    <div className="flex flex-col p-2">
                        <Link target="_blank" href={""} className="relative rounded-xl transition-all inline-flex items-center justify-between hover:bg-black/10 dark:hover:bg-white/10 w-full px-2 h-[36px] font-medium text-black dark:text-white  focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)] cursor-pointer">
                            <p className="text-base">Changelog</p>
                            <RiArrowRightUpLine size={20} className="text-black dark:text-white/80" />
                        </Link>
                        <Link target="_blank" href={""} className="relative rounded-xl transition-all inline-flex justify-between items-center hover:bg-black/10 dark:hover:bg-white/10 w-full px-2 h-[36px] font-medium text-black dark:text-white  focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)] cursor-pointer">
                            <p className="text-base">Suporte</p>
                            <RiArrowRightUpLine size={20} className="text-black dark:text-white/80" />
                        </Link>
                        <button onClick={HandleLogout} className="relative rounded-xl transition-all inline-flex items-center hover:bg-black/10 dark:hover:bg-white/10 w-full px-2 h-[36px] font-medium text-black dark:text-white  focus-visible:ring-4 focus-visible:ring-[hsl(var(--blue-60)/50%)] cursor-pointer">
                            <p className="text-base">Log out</p>
                        </button>
                    </div>
                    <div className="grow h-px bg-white/10" />
                    <div className="flex p-4 items-center pt-[8px]">
                        <div className="flex items-center justify-between w-full gap-x-[4px] ">
                            <Link href={"/privacy"} className="text-xs font-semibold text-center text-black dark:text-white dark:hover:text-white/80 hover:underline">
                                Privacy
                            </Link>
                            <Link href={"/terms"} className="text-xs font-semibold text-center text-black dark:text-white dark:hover:text-white/80 hover:underline">
                                Terms
                            </Link>
                            <Link href={"/terms"} className="text-xs font-semibold text-center text-black dark:text-white dark:hover:text-white/80 hover:underline">
                                Copyright
                            </Link>
                        </div>
                        <div className="flex justify-end w-full">
                            <Link href={"/terms"} className="text-xs font-semibold text-center text-black dark:text-white hover:text-whit/80e hover:underline">
                                <FaDiscord size={18} />
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </div>
    )
}