import FilterButton from "./components/FilterButton";
import HorizentalArrowButton from "./components/HorizentalArrowButton";

export default function UpperSection() {
    return(
        <div className="flex gap-5 flex-row justify-between items-center bg-gray-600 h-full w-8">
            <div className="flex flex-row gap-2">
                <FilterButton/>
                {
                /* in the section names u need to figure out how to connect them to the history search */}
                <FilterButton section="Music"/>
                <FilterButton section="Hours"/>
                <FilterButton section="Gaming"/>
                <FilterButton section="Study Skills"/>
                <FilterButton section="Lo-fi"/>
            </div>
            <HorizentalArrowButton/>
        </div>
    )  
}
