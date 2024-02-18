import { SearchBar } from "@/components/ui/searchBar";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button";
import { Book } from 'lucide-react';

interface Params {
  params: { username: string }
}

export default function Notes({ params }: Params) {
  const { username } = params;

  //Sample notebooks list, for testing. This will be fetched from the API later (from DB)
  //Yet to be updated: More icon choices, not just default 0; Book icon
  const notebooks = [
    {
      id: 1,
      title: "COMP2123 Notes by Icey",
      updated: "1 month ago",
      color: 1,
      icon: 0
    },
    {
      id: 2,
      title: "INFO1113 Notes (feat. Abyan)",
      updated: "1 hour ago",
      color: 2,
      icon: 0
    }
  ]

  const colorClass: Record<number, string> = {
    0: "bg-slate-200 dark:bg-slate-800  mt-5 rounded-lg dark:hover:bg-slate-700 hover:bg-slate-100", //default Gray
    1: "bg-orange-300 dark:bg-orange-800  mt-5 rounded-lg dark:hover:bg-amber-700 hover:bg-amber-300", //Orange
    2: "bg-blue-200 dark:bg-sky-800  mt-5 rounded-lg dark:hover:bg-cyan-700 hover:bg-cyan-100" //Blue
  }

  return (
    <div className="grid container max-w-[50rem]">
      <h1 className="mb-4 t">@{username};aposs Notes</h1>
      <div className="flex items-center">
        <SearchBar className="flex-grow" placeholder="Search" />
        <Button variant="outline" size="icon" className="ml-2">
          <MagnifyingGlassIcon />
        </Button>
      </div>
      {notebooks.map((notebook) => (
        <div key={notebook.id} className={`grid container ${colorClass[notebook.color] || colorClass[0]} transition duration-100 ease-in-out`}>
          <div className="flex items-center space-x-2 p-1">
            <Book className="" />
            <div>
              <h3 className="ml-7 mt-2 mb-1">{notebook.title}</h3>
              <h6 className="text-xs ml-7 mb-2 italic">Updated {notebook.updated}</h6>
            </div>
          </div>
        </div>
      ))}

    </div>

  )
}
