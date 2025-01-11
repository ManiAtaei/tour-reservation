'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";


function BestComent() {

    const personsID = [

        { id: 1, name: "کاوه راد", score: 4.5, description: "درنا یک خاطره فوق العاده برای شما میسازه تجربه فوق العادی با خرید از درنا داشتم. باز هم تور رزرو خواهم کرد.", icon: "/icon-profile/1.png" },

        { id: 1, name: "کاوه راد", score: 4.5, description: "درنا یک خاطره فوق العاده برای شما میسازه تجربه فوق العادی با خرید از درنا داشتم. باز هم تور رزرو خواهم کرد.", icon: "/icon-profile/1.png" },

        { id: 1, name: "کاوه راد", score: 4.5, description: "درنا یک خاطره فوق العاده برای شما میسازه تجربه فوق العادی با خرید از درنا داشتم. باز هم تور رزرو خواهم کرد.", icon: "/icon-profile/1.png" },

        { id: 1, name: "کاوه راد", score: 4.5, description: "درنا یک خاطره فوق العاده برای شما میسازه تجربه فوق العادی با خرید از درنا داشتم. باز هم تور رزرو خواهم کرد.", icon: "/icon-profile/1.png" },




    ];

    return (
        <div className="mt-8 pb-4">
            <div className="text-2xl font-xbold mb-4 text-right">
                <p>سوالات متداول</p>
            </div>
            <Swiper
                modules={[Navigation]}

                spaceBetween={46}
                slidesPerView={3}
                breakpoints={{
                    320: { slidesPerView: 1 },
                    500: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {personsID.map((person) => (
                    <SwiperSlide key={person.id}>
                        <div className="mt-6">
                            <div className="bg-[#FFE8D99C] w-full rounded-md">
                                <div className="flex items-center gap-4  py-7 pr-5" >
                                    <div>
                                        <img src={person.icon} alt="" />
                                    </div>

                                    <div>
                                        <div className="text-[18px] font-xbold">
                                            {person.name}
                                        </div>

                                        <div className="text-[12px] font-xregular mt-2 text-[#4A90E2]">
                                        {person.score} امتیاز 
                                        </div>
                                    </div>


                                </div>
                                <div className="bg-white p-[23px] text-[16px] font-xregular">
                                    <p className="">
                                        {person.description}
                                    </p>
                                    <div>
                                        <div className="flex items-center gap-1 mt-2 justify-end ">
                                            <img src="/nav-icon/Quote.png" alt="" />
                                            <img src="/nav-icon/Quote.png" alt="" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    )
}



export default BestComent