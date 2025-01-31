import { IoMdArrowDropup } from "react-icons/io";
import { MdArrowDropDown } from "react-icons/md";
import { TbRectangleVerticalFilled } from "react-icons/tb";
export default function ScrollSection() {
    return(
        <div className=" flex flex-col gap-1 bg-yellow-300 w-5 h-full right-0">
            <div>
                <button >
                <IoMdArrowDropup />
                </button>
                <div>
                    <div className="p-1" onClick={}>
                    <TbRectangleVerticalFilled />
                    </div>
                </div>
                <button >
                <MdArrowDropDown />
                </button>
            </div>
        </div>
    );
}