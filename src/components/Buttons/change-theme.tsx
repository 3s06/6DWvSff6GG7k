"use client";
import * as React from "react";
import { useTheme } from "next-themes";
import { RiMoonClearLine } from "react-icons/ri";
import { MdSunny } from "react-icons/md";

export function ChangeThemeButton() {
  const { theme, setTheme, resolvedTheme } = useTheme();

  const isDark = resolvedTheme === "dark";

  const toggleTheme = () => {
    setTheme(isDark ? "light" : "dark");
  };

  return (
    <button
      onClick={toggleTheme}
      className="size-12 hover:bg-black/10 dark:hover:bg-white/10 text-black/60 hover:text-black dark:text-white/60 flex items-center justify-center rounded-full cursor-pointer transition-colors"
    >
      {isDark ? <MdSunny size={20} /> : <RiMoonClearLine size={20} />}
    </button>
  );
}
