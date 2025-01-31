import React from 'react';
import PlayVideo from '../components/PlayVideo';
import Recommended from '../components/Recommended';

export default function video(){
    return(
        <div /*play-container */ 
        className="play-container bg-[#f9f9f9] px-[2%] pt-5 pb-5 flex justify-between flex-wrap">
            <PlayVideo/>
            <Recommended/>
        </div>
    )
}

