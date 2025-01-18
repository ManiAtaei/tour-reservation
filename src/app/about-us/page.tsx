"use client"
import { useState } from "react";
import Container from '@/components/Container';
import History from "./components-about/History";
import Activity from "./components-about/Activity";
import Value from "./components-about/Value";
import Contactus from "./components-about/Contactus";

export default function Page() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <div className='mt-[6.2rem] flex flex-col lg:flex-row py-8 bg-[#F9F9F9] gap-[25px]'>
        <div className="  flex-row bg-white divide-y-2 rounded-lg flex  gap-4 overflow-x-auto max-w-[900px]
        lg:flex-col lg:w-[400px] lg:h-[270px] lg:gap-0  ">
          <button
            className={` transition-colors duration-300 ease-in-out 
 flex  py-[18.5px]  text-[18px] pr-6 font-xbold ${activeTab === "tab1" ? "text-[#5DAF6E]" : "text-black"}`}
            onClick={() => handleClick("tab1")}
          >
            تاریخچه درنا

          </button>
          <button
            className={` transition-colors duration-300 ease-in-out
 flex items-start py-[18.5px] pr-6 text-[18px] font-xbold ${activeTab === "tab2" ? "text-[#5DAF6E]" : "text-black"}`}
            onClick={() => handleClick("tab2")}
          >
            فعالیت درنا

          </button>

          <button
            className={` transition-colors duration-300 ease-in-out
 flex items-start py-[18.5px] pr-6 text-[18px] font-xbold ${activeTab === "tab3" ? "text-[#5DAF6E]" : "text-black"}`}
            onClick={() => handleClick("tab3")}
          >
            ارزش درنا

          </button>

          <button
            className={` transition-colors duration-300 ease-in-out
 flex items-start py-[18.5px] pr-6 text-[18px] font-xbold ${activeTab === "tab4" ? "text-[#5DAF6E]" : "text-black"}`}
            onClick={() => handleClick("tab4")}
          >
            تماس باما

          </button>
        </div>

        <div className="">
          {activeTab === "tab1" && <div className="transition-all duration-300"> <History /> </div>}
          {activeTab === "tab2" && <div className="transition-all duration-300"> <History /> </div>}
          {activeTab === "tab3" && <div className="transition-all duration-300"> <History /> </div>}
          {activeTab === "tab4" && <div className="transition-all duration-300"> <History /> </div>}
        </div>
      </div>
    </Container>
  );
}
