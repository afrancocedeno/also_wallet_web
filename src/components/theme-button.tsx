"use client"

import * as React from "react"
import { MoonIcon, SunIcon } from "@radix-ui/react-icons"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeButton() {
  const { theme, setTheme } = useTheme()

  return (
    <Button variant="outline" size="icon" onClick={() => setTheme(theme == "light" ? "dark" : "light")} >
      <SunIcon className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all " />
      {/* <span className="sr-only">Toggle theme</span> */}
    </Button>
  )
}
