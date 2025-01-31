import React from 'react';
import thumbnail from "../img/thumbnail.jpeg";
import thumbnail2 from "../img/thumbnail2.jpeg";
import thumbnail3 from "../img/thumbnail3.jpeg";
import thumbnail4 from "../img/thumbnail4.jpeg";
import thumbnail5 from "../img/thumbnail5.jpeg";
import thumbnail6 from "../img/thumbnail6.jpeg";
import thumbnail7 from "../img/thumbnail7.jpeg";
import thumbnail8 from "../img/thumbnail8.jpeg";

export default function Feed() {
    return(
        /*grid-cols-[repeat(auto-fit,minmax(250px,1fr))]: Custom utility for defining responsive columns with minmax to achieve the desired grid structure.*/
        <div /*feed */ className="grid grid-cols-[repeat(auto-fit,minmax(250px,1fr))] gap-y-[30px] gap-x-[16px] mt-[15px]" >
            <Link to={`video/20/4521`} /*card */ className=''>
                <img src={thumbnail} alt="" className="w-full rounded-md" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </Link>
            <div /*card */ className=''>
                <img src={thumbnail2} alt="" className="w-full rounded-md" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail3} alt="" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail4} alt="" />
                <h2>Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail5} alt="" />
                <h2>Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail6} alt="" className="w-full rounded-md" />
                <h2>Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail7} alt="" className="w-full rounded-md" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail8} alt="" className="w-full rounded-md" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail} alt="" className="w-full rounded-md" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail2} alt="" className="w-full rounded-md" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail3} alt="" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail4} alt="" />
                <h2>Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail5} alt="" />
                <h2>Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail6} alt="" className="w-full rounded-md" />
                <h2>Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail7} alt="" className="w-full rounded-md" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
            <div /*card */ className=''>
                <img src={thumbnail8} alt="" className="w-full rounded-md" />
                <h2 className="text-[16px] font-semibold text-black my-[5px]" >
                    Best channel to learn coding that help you to be  a web devoloper </h2>
                <h3 className="text-[14px] font-semibold text-[#555] my-[6px]">greatstack</h3>
                <p className="text-[14px]" >15 Views &bull; 2days ago</p>
            </div>
        </div>
    )
    
}