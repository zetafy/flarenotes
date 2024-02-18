'use client'
import { Button } from "@/components/ui/button"
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { PlusIcon, InfoCircledIcon } from "@radix-ui/react-icons"
import ColorDropdown from "./color-dropdown"
import { Switch } from "@/components/ui/switch"
import InfoHovericon from "./infoHoverIcon"
import * as React from "react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { useFormState } from 'react-dom'

export default function CreateNotebook() {
    const [position, setPosition] = React.useState("default")

    const colorClass: Record<string, string> = {
        "default": "bg-slate-200 dark:bg-slate-800 dark:hover:bg-slate-700 hover:bg-slate-100", //default Gray
        "orange": "bg-orange-300 dark:bg-orange-800 dark:hover:bg-amber-700 hover:bg-amber-300", //Orange
        "blue": "bg-blue-200 dark:bg-sky-800 dark:hover:bg-cyan-700 hover:bg-cyan-100" //Blue
    }

    async function createNotebook(prevState:any, formData: FormData) {
        console.log("1234")
        const title = (await formData.get("title")) as string;
        const description = (await formData.get("description")) as string;
        const color = position;
        let isPublic = (await formData.get("public")) as string | boolean;
        {isPublic == "on" ? isPublic = true : isPublic = false}

        const newNotebook = {
            owner: "iceyvision",
            title: title,
            description: description,
            notes: [],
            color: color,
            public: isPublic
        }
        
        try {
            const response = await fetch(`https://flarenotes-api-rxvdlpawqq-uc.a.run.app/notebooks`, {
              method: 'POST',
              headers: {
                'Authorization': `Bearer ${process.env.API_KEY}`,
                'Content-Type': 'application/json',
              },
              body: JSON.stringify(newNotebook),
            });
      
            if (!response.ok) {
              throw new Error('Network response was not ok');
            }
      
            // Handle success
            const result = await response.json();
            console.log(result); // Process your server response here
          } catch (error) {
            console.error('Failed to submit form', error);
          }
    }
    
    const [state, formAction] = useFormState(createNotebook, null);
  return (
    
        <Dialog>
        <DialogTrigger asChild>
            <Button className="ml-2">
                <PlusIcon className="mr-1" /> Create
            </Button>
        </DialogTrigger>
        <DialogContent className="sm:max-w-[425px]">
        <form action={formAction}>
            <DialogHeader>
            <DialogTitle>Create new notebook</DialogTitle>
            <DialogDescription>
                Create a new notebook. Click create when done.
            </DialogDescription>
            </DialogHeader>
            <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="title" className="text-right">
                Title
                </Label>
                <Input id="title" name="title" placeholder="Enter notebook title" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="description" className="text-right">
                Description
                </Label>
                <Input id="description" name="description" placeholder="Enter description" className="col-span-3" />
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="color" className="text-right">
                    Color
                </Label>
                <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                        <Button className={colorClass[position]} variant="outline" >{position}</Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent className="w-56">
                    <DropdownMenuLabel>Select notebook color</DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuRadioGroup id="color" value={position} name="color" onValueChange={setPosition}>
                        <DropdownMenuRadioItem value="default">Default</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="orange">Orange</DropdownMenuRadioItem>
                        <DropdownMenuRadioItem value="blue">Blue</DropdownMenuRadioItem>
                    </DropdownMenuRadioGroup>
                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
            <div className="grid grid-cols-4 items-center gap-4">
                <Label htmlFor="publicToggle" className="text-right">
                    <InfoHovericon text="Public" />
                </Label>
                <Switch id="public" name="public" />
            </div>
            </div>
            <DialogFooter>
            <Button >Create notebook</Button>
            </DialogFooter>
            </form>
        </DialogContent>
        </Dialog>
  )
}
