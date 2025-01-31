import React from "react";
import video from "../img/video.mp4";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import { IoMdShareAlt } from "react-icons/io";
import { FaRegBookmark } from "react-icons/fa";
import { GiSaveArrow } from "react-icons/gi";
import Pdp from "./ProfileIcon";

export default function PlayVideo() {
    return(
        <div /*play-video */ className="flex-basis-[69%] w-full">
            <video src={video} controls autoPlay muted className="w-full"></video>
            <h3 className="mt-2.5 font-semibold text-[22px] ">Best youtube chanel to learnweb development</h3>
            <div /*play-video-info */ className="play-video-info flex items-center justify-between flex-wrap mt-2.5 text-[14px] text-[#5a5a5a]">
                <p>1525 views &bull; 2 days ago </p>
                <div>
                    <span className="inline-flex items-center ml-[15px]"><AiOutlineLike className="w-[20px] mr-2" />125</span>
                    <span className="inline-flex items-center ml-[15px]"><AiOutlineDislike className="w-[20px] mr-2" />2</span>
                    <span className="inline-flex items-center ml-[15px]"><IoMdShareAlt className="w-[20px] mr-2" />Share</span>
                    <span className="inline-flex items-center ml-[15px]"><FaRegBookmark className="w-[20px] mr-2" />Save</span>
                    <span className="inline-flex items-center ml-[15px]"><GiSaveArrow className="w-[20px] mr-2" />Download</span>
                </div>
            </div>
            <hr className=" border-0 h-px bg-[#ccc] my-2.5 " />
            <div /*publisher */ className="flex items-center mt-5 ">
                <Pdp img={} name={}/>
                <div className="flex-1 leading-[18px]">
                    <p className="text-black font-semibold text-[18px]">greatstack</p>
                    <span className="text-[13px] text-[#5a5a5a]">1m Subscribers</span>
                </div>
                <button className=" bg-black text-white py-2 px-7 border-0 rounded-[6px] cursor-pointer" >Subscribe</button>
            </div>
            <div /* vid-description*/ className="pl-[55px] my-[15px]">
                <p className="text-[14px] mb-[5px] text-[#5a5a5a]" >Lorem ipsum dolor sit amet</p>
                <p className="text-[14px] mb-[5px] text-[#5a5a5a]" >Lorem ipsum dolor sit amet, consectetur adipisicing elit. Magni, facere. Consequatur </p>
                <hr />
                <h4 className="text-[14px] text-[#5a5a5a] mt-[15px]" >130 Comments</h4>

                <div /*commment */ className="flex items-start my-[20px]">
                    <Pdp img={} name={}/>
                    <div>
                        <h3 className="text-[14px] mb-[2px]">jack nicholson 
                            <span className="text-[12px] text-[#5a5a5a] font-medium ml-[8px]">1 day ago</span></h3>
                        <p className="text-[14px] mb-[5px] text-[#5a5a5a]">Lorem ipsum dolor sit amet consectetur, adipisicing elit. At saepe earum numquam officiis repudiandae ab molestias iusto magnam commodi sed nulla temporibus </p>
                        <div /*comment-action */ className="flex items-center my-[8px] text-[14px]">
                            <AiOutlineLike className="w-[20px] mr-[5px] rounded-none" />
                            <span className="mr-[20px] text-[#5a5a5a]">244</span>
                            <AiOutlineDislike className="w-[20px] mr-[5px] rounded-none" />
                        </div>
                    </div>
                </div>
                <div /*commment */>
                    <Pdp img={} name={}/>
                    <div>
                        <h3>jack nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At saepe earum numquam officiis repudiandae ab molestias iusto magnam commodi sed nulla temporibus </p>
                        <div /*comment-action */>
                            <AiOutlineLike />
                            <span>244</span>
                            <AiOutlineDislike />
                        </div>
                    </div>
                </div>
                <div /*commment */>
                    <Pdp img={} name={}/>
                    <div>
                        <h3>jack nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At saepe earum numquam officiis repudiandae ab molestias iusto magnam commodi sed nulla temporibus </p>
                        <div /*comment-action */>
                            <AiOutlineLike />
                            <span>244</span>
                            <AiOutlineDislike />
                        </div>
                    </div>
                </div>
                <div /*commment */>
                    <Pdp img={} name={}/>
                    <div>
                        <h3>jack nicholson <span>1 day ago</span></h3>
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. At saepe earum numquam officiis repudiandae ab molestias iusto magnam commodi sed nulla temporibus </p>
                        <div /*comment-action */>
                            <AiOutlineLike />
                            <span>244</span>
                            <AiOutlineDislike />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
    
}