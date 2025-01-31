import React from "react";
import thumbnail from "../img/thumbnail.jpeg";
import thumbnail2 from "../img/thumbnail2.jpeg";
import thumbnail3 from "../img/thumbnail3.jpeg";
import thumbnail4 from "../img/thumbnail4.jpeg";
import thumbnail5 from "../img/thumbnail5.jpeg";
import thumbnail6 from "../img/thumbnail6.jpeg";
import thumbnail7 from "../img/thumbnail7.jpeg";
import thumbnail8 from "../img/thumbnail8.jpeg";
export default function Recommended() {
    return(
        <div /*recomended */ className=" flex-[30%] ">
            <div /*side-video-list*/
             className=" flex justify-between mb-[8px] ">
                <img src={thumbnail} alt="" 
                className="flex-[49%] w-[50%]" />
                <div /*vid-info*/ className="vid-info flex-[49%]">
                    <h4 className="flex-[49%]">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis quasi </h4>
                    <p className="text-[13px] mb-[5px]">greatstack</p>
                    <p className="text-[13px] mb-[5px]">199k views</p>
                </div>
            </div>
            <div /*side-video-list*/ className=" ">
                <img src={thumbnail2} alt="" />
                <div /*vid-info*/ className="">
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis quasi </h4>
                    <p>greatstack</p>
                    <p>199k views</p>
                </div>
            </div>
            <div /*side-video-list*/ className=" ">
                <img src={thumbnail3} alt="" />
                <div /*vid-info*/ className="">
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis quasi </h4>
                    <p>greatstack</p>
                    <p>199k views</p>
                </div>
            </div>
            <div /*side-video-list*/ className=" ">
                <img src={thumbnail4} alt="" />
                <div /*vid-info*/ className="">
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis quasi </h4>
                    <p>greatstack</p>
                    <p>199k views</p>
                </div>
            </div>
            <div /*side-video-list*/ className=" ">
                <img src={thumbnail5} alt="" />
                <div /*vid-info*/ className="">
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis quasi </h4>
                    <p>greatstack</p>
                    <p>199k views</p>
                </div>
            </div>
            <div /*side-video-list*/ className=" ">
                <img src={thumbnail6} alt="" />
                <div /*vid-info*/ className="">
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis quasi </h4>
                    <p>greatstack</p>
                    <p>199k views</p>
                </div>
            </div>
            <div /*side-video-list*/ className=" ">
                <img src={thumbnail7} alt="" />
                <div /*vid-info*/ className="">
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis quasi </h4>
                    <p>greatstack</p>
                    <p>199k views</p>
                </div>
            </div>
            <div /*side-video-list*/ className=" ">
                <img src={thumbnail8} alt="" />
                <div /*vid-info*/ className="">
                    <h4>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Non nobis quasi </h4>
                    <p>greatstack</p>
                    <p>199k views</p>
                </div>
            </div>

        </div>
    )
    
}