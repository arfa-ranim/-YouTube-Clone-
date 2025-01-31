import {youtube.svg} from "./components/img";
 
export default function Logo() {
    return(
        <div className="flex flex-row items-center gap-1 p-1">
            <img src="youtube.svg" alt=".." />
            <h2 className=" text-lg font-semibold">YouTube</h2>
        </div>
    )    
}