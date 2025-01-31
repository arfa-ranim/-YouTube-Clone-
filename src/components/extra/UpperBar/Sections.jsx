import { IoMdHome } from "react-icons/io";
export default function Sections({section}) {
    return(
        <div>
            <button className="rounded-md  bg-slate-400 text-black flex flex-row gap-4   hover: bg-slate-500" on onClick={}>
            < IoMdHome />
            <p className="font-sans"> {section }</p>
            </button>
        </div>
    )
}