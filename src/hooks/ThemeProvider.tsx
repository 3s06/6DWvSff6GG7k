"use client"

import * as React from "react"
import { ThemeProvider as NextThemesProvider } from "next-themes"

/** 
 * @description Código responsável pela troca temas (Dark/White)
 * */ 
export function ThemeProvider({
  children,
  ...props
}: React.ComponentProps<typeof NextThemesProvider>) {
  return <NextThemesProvider {...props}>{children}</NextThemesProvider>
}
