import {useState} from "react"

const SearchBox = () => {
    const [searchText, setSearchText] = useState<string>("")
    const search = () => {
        console.log(searchText)
    }
    return (
        <div className={"bg-white flex items-center px-2 py-1 rounded-full space-x-2 shadow-xl"}>
            <input
                className={"px-2 border"}
                type="text"
                placeholder={"検索してください"}
                value={searchText}
                onChange={(event) => setSearchText(event.target.value)}
            />
            <div onClick={() => search()} className={"fill-black cursor-pointer"}>
                <svg className={"w-6 h-6"} xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 512 512"><path d="M416 208c0 45.9-14.9 88.3-40 122.7L502.6 457.4c12.5 12.5 12.5 32.8 0 45.3s-32.8 12.5-45.3 0L330.7 376c-34.4 25.2-76.8 40-122.7 40C93.1 416 0 322.9 0 208S93.1 0 208 0S416 93.1 416 208zM208 352a144 144 0 1 0 0-288 144 144 0 1 0 0 288z"/></svg>
            </div>
        </div>
    )
}

export default SearchBox;