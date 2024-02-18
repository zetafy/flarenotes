"use-client"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"


export default function ProfilePage() {
    return (

        <div className="flex justify-center items-center h-screen">
            <div className="bg-gray-200 dark:bg-gray-500" style={{ height: "50rem", width: "50rem" }}>
                <h1>hello</h1>
                <Avatar>
                    <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
                    <AvatarFallback>CN</AvatarFallback>
                </Avatar>
            </div>
        </div>

    )


}