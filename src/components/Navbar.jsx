import React from 'react';
import { IoMenuOutline } from 'react-icons/io5';
import { IoMdSearch } from 'react-icons/io';
import { IoIosNotificationsOutline } from 'react-icons/io';
import { MdKeyboardVoice } from 'react-icons/md';
import Pdp from './ProfileIcon';
import CreateIcon from './CreateIcon';
export default function Navbar({setSidebar}) {
    return(
        <div>
        <nav /*flex-dev*/ className="flex items-center p-2.5 justify-between shadow-md bg-white sticky top-0 z-10">
            <div /*nav-left flex-dev*/ className=" flex items-center "> 
                <div /*menu-icon*/  className=" cursor-pointer w-[22px] mr-[25px] " 
                onClick={()=>setSidebar(prev=>prev===false?true:false)/*if the previous estate is false then => true and if not false then => true(toggle function )*/}>
                    <IoMenuOutline />
                </div>
                <div className="flex flex-row items-center gap-1 p-1">
                    <svg height="90px" width="130px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg"   viewBox="0 0 461.001 461.001">
                        <g>
                        	<path style="fill:#F61C0D;" d="M365.257,67.393H95.744C42.866,67.393,0,110.259,0,163.137v134.728
		                    c0,52.878,42.866,95.744,95.744,95.744h269.513c52.878,0,95.744-42.866,95.744-95.744V163.137
	                    	C461.001,110.259,418.135,67.393,365.257,67.393z M300.506,237.056l-126.06,60.123c-3.359,1.602-7.239-0.847-7.239-4.568V168.607
	                    	c0-3.774,3.982-6.22,7.348-4.514l126.06,63.881C304.363,229.873,304.298,235.248,300.506,237.056z"/>
                        </g>
                    </svg>
                    <h2 className=" text-lg font-semibold"> YouTube </h2>
                </div>
            </div>  

            
            <div /*nav-middle flex-dev*/ className="flex items-center p-2.5 justify-between shadow-md bg-white sticky top-0 z-10" >
                <div /*Search-box flex-dev*/ className="flex items-center p-2.5 justify-between shadow-md bg-white sticky top-0 z-10 border border-gray-300 mr-4 pr-3 pl-3 rounded-lg">
                    <div>
                        <input type="text" placeholder='Search..' className="w-[400px] border-0 outline-0 bg-transparent" />
                    </div>
                    <div  className="cursor-pointer w-4">
                        <IoMdSearch />
                    </div>
                </div>
                <div className=" cursor-pointer rounded hover:bg-gray-400">
                    <button>
                    <MdKeyboardVoice />
                    </button>
                </div>
            </div>
            

            <div /* nav-right flex-div*/ className="flex items-center p-2.5 justify-between shadow-md bg-white sticky top-0 z-10"> 
                <CreateIcon/>
                <div className=" cursor-pointer rounded w-[25px] mr-[25px] hover: bg-slate-500">
                    <button>
                    <IoIosNotificationsOutline />
                    </button>
                </div>
                <div>
                    <Pdp/>
                </div>
            </div>
        </nav>
        </div>
    )
}
