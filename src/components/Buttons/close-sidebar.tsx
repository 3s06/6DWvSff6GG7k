"use client";
import { MdOutlineKeyboardDoubleArrowLeft, MdOutlineKeyboardDoubleArrowRight    } from "react-icons/md";

export function CloseAndOpenSidebar() {
    return (
        <button className="size-10 transition-colors ease-in-out duration-300 cursor-pointer rounded-xl hover:bg-black/10 dark:hover:bg-white/10 text-black/60 dark:text-white/60 flex items-center justify-center">
            <MdOutlineKeyboardDoubleArrowLeft size={20} />
        </button>
    )
}