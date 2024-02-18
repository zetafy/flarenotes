"use client"

import * as React from "react"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export default function ColorDropdown() {
    const [position, setPosition] = React.useState("default")

    const colorClass: Record<string, string> = {
        "default": "bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-100", //default Gray
        "orange": "bg-orange-300 dark:bg-orange-800 dark:hover:bg-amber-700 hover:bg-amber-300", //Orange
        "blue": "bg-blue-200 dark:bg-sky-800 dark:hover:bg-cyan-700 hover:bg-cyan-100" //Blue
    }

    return (
    <DropdownMenu>
        <DropdownMenuTrigger asChild>
            <Button className={colorClass[position]} variant="outline" >{position}</Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-56">
        <DropdownMenuLabel>Select notebook color</DropdownMenuLabel>
        <DropdownMenuSeparator />
        <DropdownMenuRadioGroup value={position} onValueChange={setPosition}>
            <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="orange">Orange</DropdownMenuRadioItem>
            <DropdownMenuRadioItem value="blue">Blue</DropdownMenuRadioItem>
        </DropdownMenuRadioGroup>
        </DropdownMenuContent>
    </DropdownMenu>
    )
}
