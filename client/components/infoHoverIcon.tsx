import {
    HoverCard,
    HoverCardContent,
    HoverCardTrigger,
  } from "@/components/ui/hover-card"

import { InfoCircledIcon } from "@radix-ui/react-icons"

  
export default function InfoHovericon({ text }: { text: string}) {
    return <HoverCard>
        <HoverCardTrigger>
            <div className="flex text-end justify-end">
                {text}&nbsp;<InfoCircledIcon />
            </div>
        </HoverCardTrigger>
        <HoverCardContent>
            Make your notebook public, so it is viewable to everyone.
        </HoverCardContent>
    </HoverCard>

}