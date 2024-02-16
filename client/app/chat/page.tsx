import { ScrollArea } from "@/components/ui/scroll-area"
import { Input } from "@/components/ui/input"


const tags = Array.from({ length: 50 }).map(
  (_, i, a) => `v1.2.0-beta.${a.length - i}`
)

export default function ChatPage() {
<<<<<<< HEAD
    const userId = 2032176;
    const chatSample = [
        {
            id: 1,
            username: "IceyVision",
            content: "Testing testing 123 lol.",
            timestamp: "Today at 12:54PM",
            authorId: 2032176
        },
        {
            id: 2,
            username: "Rooney",
            content: "Lorem Ipsum",
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
            content: "I wonder.",
            timestamp: "Today at 12:56PM",
            authorId: 2044172
        },
        {
            id: 6,
            username: "kinderheim",
            content: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
            timestamp: "Today at 12:56PM",
            authorId: 2418289
        },
        {
            id: 7,
            username: "kinderheim",
            content: "I love rust.",
            timestamp: "Today at 12:57PM",
            authorId: 2418289
        },
        {
            id: 8,
            username: "kinderheim",
            content: "Java sucks.",
            timestamp: "Today at 12:57PM",
            authorId: 2418289
        }
    ]
    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="bg-slate-200 w-[40%] h-[95%] m-2 rounded-md">
                {/* Other content might go here */}
            </div>
            <div className="bg-slate-200 dark:bg-slate-600 w-[60%] h-[95%] m-1 rounded-md flex flex-col">
                <div className="bg-slate-100 dark:bg-slate-800 ml-1 mr-1 mt-1 rounded-sm p-3">
                    <h1 className="text-xl dark:text-white font-bold">
                        Team Zetafy
                    </h1>
                    <h1 className="text-xs italic">12 Members</h1>
                </div>
                {/* Adjusted ScrollArea to fill the remaining space */}
                    <div className="flex-1 overflow-y-auto">
                        <div className="space-y-2 flex flex-col w-full">
                            {chatSample.map((chat) => (

                                chat.authorId === userId ? (
                                <div key={chat.id} className={`bg-orange-200 ${chat.content.length >= 52 ? "max-w-[50%]" : "max-w-max"} ml-auto mb-2 mr-2 mt-2 rounded-tl-3xl rounded-tr-3xl rounded-bl-3xl p-3 shadow-lg`}>
                                    <h1 className="text-sm font-bold truncate">{chat.username}</h1>
                                    <p className="text-sm break-words">{chat.content}</p>
                                    <h1 className="text-xs italic pt-2 pr-2">{chat.timestamp}</h1>
                                </div>
                                ) : (
                                    <div key={chat.id} className={`bg-white ${chat.content.length >= 52 ? "max-w-[50%]" : "max-w-max"} ml-3 mb-2 rounded-tl-3xl rounded-tr-3xl rounded-br-3xl p-3 shadow-lg`}>
                                        <h1 className="text-sm font-bold truncate">{chat.username}</h1>
                                        <p className="text-sm break-words">{chat.content}</p>
                                        <h1 className="text-xs italic pt-2 pr-2">{chat.timestamp}</h1>
                                    </div>
                                )
                                
                            ))}
                        </div>
                    </div>
                <Input className="mt-2 max-w-[95%]" placeholder="Enter your message" />
            </div>
        </div>

    )
}
=======
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
      id: 3,
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
          {/* <ScrollArea className="h-72 w-48 rounded-md border"> */}
          {/*   <div className="p-4"> */}
          {/*     <h4 className="mb-4 text-sm font-medium leading-none">Tags</h4> */}
          {/*     {tags.map((tag) => ( */}
          {/*       <> */}
          {/*         <div key={tag} className="text-sm"> */}
          {/*           {tag} */}
          {/*         </div> */}
          {/*       </> */}
          {/*     ))} */}
          {/*   </div> */}
          {/* </ScrollArea> */}
          <ScrollArea className="h-64 space-y-2 flex flex-col">
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
>>>>>>> 04bcadc3b7d51e7c85b1d1d03abd696ec4b64ded
