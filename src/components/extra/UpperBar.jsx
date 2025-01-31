import SideBar from "./UpperBar/SideBar";
import Logo from "./UpperBar/Logo";
import SearchIcon from "./UpperBar/SearchIcon";
import VoiceIcon from "./UpperBar/VoiceIcon";
import CreateIcon from "./UpperBar/CreateIcon";
import NotificationIcon from "./UpperBar/NotificationIcon";
import ProfileIcon from "./UpperBar/ProfileIcon";
export default function UpperBar() {
    return(
        <div className="flex gap-5 flex-row justify-between bg-pink-500 w-full h-10">
            <div className="flex gap-5 flex-row justify-start ">
                <SideBar/>
                <Logo/>
            </div>
            <div className="flex gap-5 flex-row justify-end ">
                <SearchIcon/>
                <VoiceIcon/>
                <CreateIcon/>
                <NotificationIcon/>
                <ProfileIcon/>
            </div>
        </div>
    );
}