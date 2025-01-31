/*import UpperBar from "./components/UpperBar";
import UpperSection from "./components/UpperSection";
import HomePage from "./components/home/UpperBar/HomePage";
import ScrollSection from "./components/home/ScrollSection";*/
import React from 'react';
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Video from "./pages/Video";
export default function App() {

  const [sidebar, setSidebar]  = useState(true);

    return (
      <div className="m-0 p-0 box-border font-sans">
        <Navbar setSidebar={setSidebar}/>  
        <Routes>
          <Route path='/' element={<Home sidebar={sidebar} />} />
          <Route path='/video/:categoryId/:videoId' element={<Video/>}/>  
        </Routes>  
      </div>
    );
    }

    /*<div className="text-black bg-white flex flex-row gap-1">      
      <div className=" flex flex-col gap-5 items-center ">
        <UpperBar/>
        <UpperSection/>
        <HomePage/>
      </div>
      <div>
      <ScrollSection/>
      </div>
    </div>*/