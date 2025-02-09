"use client"
import React, { useState } from "react";


function CoreCart() {
  const [mainImage, setMainImage] = useState("/select-slide/main.png");

  const handleImageClick = (imageUrl: string) => {
    setMainImage(imageUrl);
  };

  return (
    <div className="mt-12 px-6 py-4 bg-white rounded-md">
      <div className=" px-[38px] py-[41px] bg-[#EFF7F066]/40 rounded-l-lg flex flex-col lg:flex-row  gap-4">
        <div className="flex flex-col items-start gap-4 justify-between lg:w-[40%]">
          <div className="flex justify-between gap-4 flex-col">
            <div className="md:hidden">
              <img src={mainImage} alt="" />
            </div>

            <h2 className="text-[32px] font-xbold text-[#FF8C42]">کره جنوبی</h2>

            <h2 className="text-[24px] font-xbold">شهر: سئول</h2>

            <p className="font-xregular text-[16px] text-[#757575]">
              سئول، شهر همیشه بیدار، ترکیبی از آسمان‌خراش‌های مدرن و کاخ‌های
              تاریخی. از غذاهای خیابانی کره‌ای تا مراکز خرید پرزرق‌وبرق، سئول
              تجربه‌ای فراموش‌نشدنی از فرهنگ و زندگی شهری را برای شما به ارمغان
              می‌آورد.
            </p>
          </div>

          <div className="flex flex-col gap-8 text-[#757575] text-base">
            <div className="flex gap-2">
              <p className="font-xregular text-[16px] flex items-center">
                شروع قیمت از
              </p>

              <p className="text-[#4A90E2] font-xregular text-black">۱۸۰,۰۰۰,۰۰۰</p>

              <p className="font-xregular text-[16px] flex items-center">
                تومان
              </p>
            </div>

            <button className=" btn w-full 2xl:w-3/4 bg-[#5DAF6E] text-white rounded-lg py-2 text-sm font-xmedium hover:bg-[#478955] transition-all duration-300">
              انتخاب تور
            </button>
          </div>
        </div>

        <div className="hidden md:flex gap-4 w-full lg:w-[60%] flex-col lg:flex-row justify-end lg:gap-20">
          <div className="w-full lg:h-[310px] lg:w-[508px]">
            <img
              className="w-full h-full bg-cover"
              src={mainImage}
              alt="عکس اصلی"
            />
          </div>

          <div className="flex flex-row lg:flex-col justify-between">
            <div onClick={() => handleImageClick("/select-slide/1.png")}>
              <img src="/select-slide/1.png" alt="عکس 1" />
            </div>

            <div onClick={() => handleImageClick("/select-slide/2.png")}>
              <img src="/select-slide/2.png" alt="عکس 2" />
            </div>

            <div onClick={() => handleImageClick("/select-slide/3.png")}>
              <img src="/select-slide/3.png" alt="عکس 3" />
            </div>

            <div onClick={() => handleImageClick("/select-slide/4.png")}>
              <img src="/select-slide/4.png" alt="عکس 4" />
            </div>

            <div className="lg:hidden" onClick={() => handleImageClick("/select-slide/4.png")}>
              <img src="/select-slide/4.png" alt="عکس 4" />
            </div>

            <div className="lg:hidden" onClick={() => handleImageClick("/select-slide/4.png")}>
              <img src="/select-slide/4.png" alt="عکس 4" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default CoreCart;