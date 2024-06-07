// import { FaSearch } from "react-icons/fa";
// import { FaCat } from "react-icons/fa";
import Conversations from "./Conversations";
import LogoutButton from "./LogoutButton";
import SearchInput from "./SearchInput";
export default function SideBar() {
    return (
        <div className="border-r border-slate-500 p-4 flex flex-col ">
            <SearchInput />
            <div className="divider px-3" />
            <Conversations />
            <LogoutButton />
        </div>
    )
}