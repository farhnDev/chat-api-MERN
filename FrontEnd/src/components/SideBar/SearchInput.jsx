import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import useConversation from "../../zustand/useConversation";
import useGetConversations from "../../hooks/useGetConversations";
import toast from "react-hot-toast";

export default function SearchInput() {
    const [search, setSearch] = useState('')
    const { setSelectedConversation } = useConversation()
    const { conversations } = useGetConversations()

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!search) return;
        if (search.length < 3) {
            return toast.error('Sorry search query must be at least 3 charactersn😔')
        }

        const conversation = conversations.find(conversation => conversation.fullName.toLowerCase().includes(search.toLowerCase()));

        if (conversation) {
            setSelectedConversation(conversation)
            setSearch('');
        }else toast.error('Sorry user not found 😔')
    }

    return (
        <form className="flex gap-2 items-center" onSubmit={handleSubmit}>
            <input
                id="search"
                type="text"
                placeholder="Search..."
                className="input input-bordered rounded-full"
                value={search}
                onChange={(e) => setSearch(e.target.value)}
            />
            <button type="submit" htmlFor="search" className="btn btn-circle bg-sky-500 btn-md"><FaSearch className=" outline-none" /></button>
        </form>
    )
}