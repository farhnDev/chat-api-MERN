// import MessagePage from "../../components/MessagePage";
import MessagePage from "../../components/Message/MessagePage.jsx";
import SideBar from "../../components/SideBar/SideBar.jsx";

export default function Home() {
    return (
        <div className="flex sm:h-[450px] md:h-[550px] rounded-lg overflow-hidden  bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-lg bg-opacity-0">
            <SideBar/>
            <MessagePage/>
        </div>
    )
}