"use client"
import { useState } from "react";
import Container from '@/components/Container';
import History from "./components-about/History";
import Activity from "./components-about/Activity";
import Value from "./components-about/Value";

export default function Page() {
  const [activeTab, setActiveTab] = useState("tab1");

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <div className='mt-[6.2rem] flex py-8 bg-[#F9F9F9] gap-[25px]'>
        <div className=" flex flex-col w-[286px] h-[252px] bg-white divide-y-2 rounded-lg">
          <button
            className={` flex items-start py-[18.5px] pr-6 text-[18px] font-xbold ${activeTab === "tab1" ? "text-[#5DAF6E]" : "text-black"}`}
            onClick={() => handleClick("tab1")}
          >
            تاریخچه درنا

          </button>
          <button
            className={` flex items-start py-[18.5px] pr-6 text-[18px] font-xbold ${activeTab === "tab2" ? "text-[#5DAF6E]" : "text-black"}`}
            onClick={() => handleClick("tab2")}
          >
            فعالیت درنا

          </button>

          <button
            className={` flex items-start py-[18.5px] pr-6 text-[18px] font-xbold ${activeTab === "tab3" ? "text-[#5DAF6E]" : "text-black"}`}
            onClick={() => handleClick("tab3")}
          >
            ارزش درنا

          </button>

          <button
            className={` flex items-start py-[18.5px] pr-6 text-[18px] font-xbold ${activeTab === "tab4" ? "text-[#5DAF6E]" : "text-black"}`}
            onClick={() => handleClick("tab4")}
          >
            تماس باما

          </button>
        </div>

        <div className="">
          {activeTab === "tab1" && <div> <History /> </div>}
          {activeTab === "tab2" && <div><Activity /> </div>}
          {activeTab === "tab3" && <div> <Value /> </div>}
          {/* {activeTab === "tab4" && <div>محتوای دکمه 4</div>} */}
        </div>
      </div>
    </Container>
  );
}
