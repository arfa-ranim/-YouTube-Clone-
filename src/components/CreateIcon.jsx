import { GoPlus } from "react-icons/go";
export default function CreateIcon() {
    return(
        <div className="rounded-xl bg-slate-400 hover:bg-gray-500"  >
            <button className="rounded-xl bg-slate-400 flex gap-1 items-center" >
            <GoPlus />
            <p className="font-sans">Create</p>
            </button>
        </div>
    )
    
}