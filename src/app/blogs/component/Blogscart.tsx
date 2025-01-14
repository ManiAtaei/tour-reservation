'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function TourCart() {
    const tours = [
        { id: 1, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 2, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 3, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 4, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 5, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 6, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
       
    ];

    return (    
        <div className="mt-8 pb-4">
            
            <Swiper
                modules={[Navigation]}
                
                spaceBetween={46}
                slidesPerView={3}
                breakpoints={{
                    320 :{slidesPerView : 1},
                    500: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                }}
            >
                {tours.map((tour) => (
                    <SwiperSlide key={tour.id}>
                        <div className="p-[14px] bg-white border rounded-lg flex flex-col gap-2 w-full">
                            <img src={tour.img} className="w-full h-[190px]" alt={tour.city} />
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-lg font-xmedium">{tour.city}</p>
                                        <p className="text-[12px] font-xregular text-[#757575]">({tour.duration})</p>
                                    </div>
                                    <div className="text-[12px] text-[#757575] font-xregular">{tour.date}</div>
                                </div>
                                <div className="flex flex-col items-end">
                                    <p className="text-base font-xregular">{tour.hotel}</p>
                                    <p>⭐⭐⭐⭐⭐</p>
                                </div>
                            </div>
                            <br />
                            <div className="flex items-center justify-between">
                                <p className="text-[16px] font-xdemibold">{tour.price} تومان</p>
                                <button className="bg-[#5DAF6E] py-2 px-8 text-white rounded-lg">
                                    انتخاب تور
                                </button>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default TourCart;
