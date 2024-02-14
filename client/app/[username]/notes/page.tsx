import { SearchBar } from "@/components/ui/searchBar";
import { MagnifyingGlassIcon } from "@radix-ui/react-icons";
import { Button } from "@/components/ui/button"

interface Params {
    params: { username: string }
}

export default function Notes({ params }: Params) {
    const { username } = params;
    return (
        <div className="grid container max-w-[50rem]">
            <h1 className="mb-4 t">@{username}'s Notes</h1>
            <div className="flex items-center">
                <SearchBar className="flex-grow" placeholder="Search" />
                <Button variant="outline" size="icon" className="ml-2">
                    <MagnifyingGlassIcon />
                </Button>
            </div>
            
        </div>
        
    )
}