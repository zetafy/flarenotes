import { ScrollArea } from "@/components/ui/scroll-area"

export default function ChatPage() {
    const userId = 2041728;
    const chatSample = [
        {
            id: 1,
            username: "IceyVision",
            content: "Testing testing 123 lol. Yapp gyatt rizz w ofc skibbidy toilet lorem ipsum, phantom tax, W rizz.",
            timestamp: "Today at 12:54PM",
            authorId: 2032176
        },
        {
            id: 2,
            username: "Rooney",
            content: "I am gay",
            timestamp: "Today at 12:54PM",
            authorId: 2044172
        },
        {
            id:3,
            username: "modithebest",
            content: "I agree",
            timestamp: "Today at 12:55PM",
            authorId: 2055718
        },
        {
            id: 4,
            username: "IceyVision",
            content: "Bad idea...",
            timestamp: "Today at 12:56PM",
            authorId: 2032176
        },
        {
            id: 5,
            username: "Rooney",
            content: "FUCK the Society",
            timestamp: "Today at 12:56PM",
            authorId: 2044172
        },
        {
            id: 6,
            username: "kinderheim",
            content: "Moi intersante",
            timestamp: "Today at 12:56PM",
            authorId: 2418289
        }
    ]
    return (
        <div className="bg-slate-300 h-[35rem] flex justify-center">
            <div className="bg-slate-200 w-[40%] h-[95%] m-2 rounded-md">

            </div>
            <div className="bg-slate-200 dark:bg-slate-600 w-[60%] h-[95%] m-1 rounded-md">
                <div className="bg-slate-100 dark:bg-slate-800 h-[10%] ml-1 mr-1 mt-1 rounded-sm">
                    <h1 className="text-xl dark:text-white pl-7 pt-0.5 font-bold">
                        Team Zetafy
                    </h1>
                    <h1 className="text-xs pl-7 italic">12 Members</h1>
                </div>
                <div>
                    <ScrollArea className="space-y-2 flex flex-col">
                        {chatSample.map((chat) => (
                            <div key={chat.id} className="bg-white max-w-[50%] mb-2 rounded-tl-full rounded-tr-full rounded-br-full p-3">
                                <div className="min-w-0">
                                    <h1 className="text-sm font-bold truncate">{chat.username}</h1>
                                    <p className="text-sm break-words">{chat.content}</p>
                                    <h1 className="text-xs italic">{chat.timestamp}</h1>
                                </div>
                            </div>
                        ))}
                    </ScrollArea>
                </div>

            </div>
        </div>
    )
}