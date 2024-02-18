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

export default function CreateNotebook() {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="ml-2">
            <PlusIcon className="mr-1" /> Create
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Create new notebook</DialogTitle>
          <DialogDescription>
            Create a new notebook. Click create when done.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Title
            </Label>
            <Input id="title" placeholder="Enter notebook title" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="description" className="text-right">
              Description
            </Label>
            <Input id="description" placeholder="Enter description" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="color" className="text-right">
                Color
            </Label>
            <ColorDropdown />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="publicToggle" className="text-right">
                <InfoHovericon text="Public" />
            </Label>
            <Switch />
          </div>
        </div>
        <DialogFooter>
          <Button type="submit">Create notebook</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  )
}
