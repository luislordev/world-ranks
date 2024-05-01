import { Search } from "@/Components/Icons/Search"

interface InputSearchProps {
    onChange: (evt: React.ChangeEvent<HTMLInputElement>) => void
}

export const InputSearch = ({onChange}:InputSearchProps) => {
  return (
    <div className="relative min-w-80">
        <div className="absolute inset-y-0 start-0 flex items-center ps-2 pointer-events-none">
        <Search />
        </div>
        <input 
        type="text" 
        id="country-search" 
        placeholder="Search by Name, Region, Subregion"
        className="bg-bg-secondary py-2 px-3 rounded-lg block w-full ps-10"
        onChange={onChange}
        />
    </div>
  )
}
