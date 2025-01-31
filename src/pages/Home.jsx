import React, { useState } from 'react';
import Sidebar from "../components/Sidebar";
import Feed from '../components/Feed';

export default function Home(){

    const [category,setCategory] = useState(0);
    
    return(
        <div>
            <Sidebar  sidebar={sidebar} category={category} setCategory={setCategory}/>
            <div      /*container ; if side-bar is false then => large-container  */
            className={`bg-[#f9f9f9] ${sidebar ? "pl-[7%]" : "pl-[17%]"} pr-[2%] pt-20 pb-20`}>
                <Feed category={category} />
            </div>
        </div>
    )
 }