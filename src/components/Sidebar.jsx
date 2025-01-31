import React from 'react';
import { IoMdHome } from "react-icons/io";
import { IoGameController } from "react-icons/io5";
import { FaCarSide } from "react-icons/fa";
import { MdOutlineSportsBasketball } from "react-icons/md";
import { IoTvOutline } from "react-icons/io5";
import { GrTechnology } from "react-icons/gr";
import { IoIosMusicalNotes } from "react-icons/io";
import { LiaBlogSolid } from "react-icons/lia";
import { FaRegNewspaper } from "react-icons/fa";
import Pdp from "./ProfileIcon";
export default function Sidebar({sidebar,category,setCategory}) {
    return(  
        <div className={  /*full-sidebar*/
            `bg-white w-[15%] h-[100vh] fixed top-0 pl-2 pt-[80px] 
        ${sidebar?"":"w-[5%]"}`
            /*small-sidebar*/}>   
            <div className='' /*sortcut-links*/ >
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <IoMdHome className="w-[20px] mr-[20px]"/>
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > Home </p></div>
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <IoGameController className="w-[20px] mr-[20px]" />
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > Game </p></div>
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <FaCarSide className="w-[20px] mr-[20px]" />
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > AoutoMobile </p></div>
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <MdOutlineSportsBasketball className="w-[20px] mr-[20px]" />
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > Sports </p></div>
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <IoTvOutline className="w-[20px] mr-[20px]" />
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > Entertament </p></div>
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <GrTechnology className="w-[20px] mr-[20px]" />
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > Technologie </p></div>
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <IoIosMusicalNotes className="w-[20px] mr-[20px]" />
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > Music </p></div>
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <LiaBlogSolid className="w-[20px] mr-[20px]" />
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > Blogs </p></div>
                <div className=" flex items-center mb-5 w-fit flex-wrap cursor-pointer mr-5" 
                /*side-link*/ onClick={()=>setCategory(0) } >
                <FaRegNewspaper className="w-[20px] mr-[20px]" />
                <p className={sidebar ? 'text-gray-600' : 'hidden'} > News </p></div>
            </div>
            <hr  className={sidebar ? 'border-0 h-px bg-gray-300 w-[85%]' : 'w-[50%] mb-[25px]'}/>
            <div className='' /*subscribed-list*/> 
                <h3 className={sidebar ? 'text-sm my-5 text-[#5a5a5a]' : 'hidden'} >Subscribed</h3>
                <div className='' /*side-link*/ >
                    <Pdp user="jack" name="PewDeiPie" /> <p>PewDeiPie</p>
                </div>
                <div className='' /*side-link*/ >
                    <Pdp user="simon" name="Mrbeast" /> <p>Mrbeast</p>
                </div>
                <div className='' /*side-link*/ >
                    <Pdp user="tom" name="justen bieber" /> <p>justen bieber</p>
                </div>
                <div className='' /*side-link*/ >
                    <Pdp user="megan" name="5-minute carafts" /> <p>5-minute carafts</p>
                </div>
                <div className='' /*side-link*/ >
                    <Pdp user="cameron" name="nas daily" /> <p>nas daily</p>
                </div>
            </div>
        </div>
    );    
}