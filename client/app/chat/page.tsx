import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Separator } from "@radix-ui/react-separator";

export default function ChatPage() {
    const userId = 2032176;
    const chatSample = [
        {
            id: 1,
            username: "IceyVision",
            content: "Testing testing 123 lol.",
            timestamp: "Today at 12:54PM",
            authorId: 2032176,
            messageType: "user",
            messageReply: false
        },
        {
            id: 2,
            username: "Rooney",
            content: "Lorem Ipsum",
            timestamp: "Today at 12:54PM",
            authorId: 2044172,
            messageType: "user",
            messageReply: false
        },
        {
            id:3,
            username: "modithebest",
            content: "I agree",
            timestamp: "Today at 12:55PM",
            authorId: 2055718,
            messageType: "user",
            messageReply: 2
        },
        {
            id: 4,
            username: "IceyVision",
            content: "Bad idea...",
            timestamp: "Today at 12:56PM",
            authorId: 2032176,
            messageType: "user",
            messageReply: 3
        },
        {
            id: 5,
            username: "Rooney",
            content: "I wonder.",
            timestamp: "Today at 12:56PM",
            authorId: 2044172,
            messageType: "user",
            messageReply: false
        },
        {
            id: 6,
            username: "kinderheim",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            timestamp: "Today at 12:56PM",
            authorId: 2418289,
            messageType: "user",
            messageReply: false
        },
        {
            id: 7,
            username: "kinderheim",
            content: "I love rust.",
            timestamp: "Today at 12:57PM",
            authorId: 2418289,
            messageType: "user",
            messageReply: false
        },
        {
            id: 8,
            username: "kinderheim",
            content: "Java sucks.",
            timestamp: "Today at 12:57PM",
            authorId: 2418289,
            messageType: "user",
            messageReply: false
        },
        {
            id: 9,
            username: "System",
            content: "Nathan has joined server",
            timestamp: "Today at 12:57PM",
            authorId: 100000,
            messageType: "system",
            messageReply: false
        }
    ]
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="bg-slate-200 w-[40%] h-[95%] m-2 rounded-md">
                {/* Other content might go here */}
            </div>
            <div className="bg-slate-200 dark:bg-slate-600 w-[60%] h-[95%] m-1 rounded-md flex flex-col">
                <div className="bg-slate-100 dark:bg-slate-800 ml-1 mr-1 mt-1 rounded-sm p-3 grid grid-cols-12">
                    <Avatar className="col-span-1 ml-1 border-dashed border-3 border-red-500">
                        <AvatarImage src="https://i.pinimg.com/originals/95/e5/c9/95e5c91bf6595b7dcb2d9c0029c68204.jpg" />
                        <AvatarFallback>CN</AvatarFallback>
                    </Avatar>
                    <div className="col-span-11">
                        <h1 className="text-xl dark:text-white font-bold">
                            Team Zetafy
                        </h1>
                        <h1 className="text-xs italic">12 Members</h1>
                    </div>
                    
                </div>
                {/* Adjusted ScrollArea to fill the remaining space */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="space-y-2 flex flex-col w-full">
                            {chatSample.map((chat) => (
                                chat.messageType === "system" ? (
                                    <div className="flex items-center justify-center mt-2 mb-2">
                                        <div className="flex-1 h-px bg-gray-400 ml-3"></div>
                                        <h1 className="px-2 text-xs text-center">{chat.content}</h1>
                                        <div className="flex-1 h-px bg-gray-400 mr-3"></div>
                                    </div>

                                ) : (
                                    chat.authorId === userId ? (
                                    <div key={chat.id} className={`bg-orange-200 ${chat.content.length >= 52 ? "max-w-[50%]" : "max-w-max"} ml-auto mb-3 mr-2 mt-2 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl p-3 shadow-lg`}>
                                        <h1 className="text-sm font-bold truncate">{chat.username}</h1>
                                        <p className="text-sm break-words">{chat.content}</p>
                                        <h1 className="text-xs italic pt-2 pr-2">{chat.timestamp}</h1>
                                    </div>
                                    ) : (
                                        <div key={chat.id} className={`bg-white ${chat.content.length >= 52 ? "max-w-[50%]" : "max-w-max"} ml-3 mb-3 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl p-3 shadow-lg`}>
                                            <h1 className="text-sm font-bold truncate">{chat.username}</h1>
                                            <p className="text-sm break-words">{chat.content}</p>
                                            <h1 className="text-xs italic pt-2 pr-2">{chat.timestamp}</h1>
                                        </div>
                                    )
                                )                                
                            ))}
                        </div>
                    </div>
                <Input className="mt-2 max-w-[95%]" placeholder="Enter your message" />
            </div>
        </div>

    )
}
