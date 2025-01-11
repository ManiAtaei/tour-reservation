'use client';
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";

function TourCart() {
    const tours = [
        { id: 1, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 1, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 1, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 1, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 1, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
        { id: 1, city: "توکیو", duration: "۵روز", date: "۱۲ تا ۱۷ بهمن ۱۴۰۳", price: "۲۳,۰۰۰,۰۰۰", hotel: "هتل کندو", img: "/cart-img/1.png" },
       
    ];

    return (
        <div className="mt-8 pb-4">
            <div className="font-xregular text-base text-[#4A90E2] mb-4 text-left">
                <p>مشاهده همه تور ها</p>
            </div>
            <Swiper
                modules={[Navigation]}
                
                spaceBetween={46}
                slidesPerView={3}
                breakpoints={{
                    320 :{slidesPerView : 1},
                    500: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 3 },
                    1280: { slidesPerView: 4 },
                }}
            >
                {tours.map((tour) => (
                    <SwiperSlide key={tour.id}>
                        <div className="p-[14px] bg-white border rounded-lg flex flex-col gap-2 w-full">
                            <img src={tour.img} className="w-full" alt={tour.city} />
                            <div className="p-4 flex items-center justify-between">
                                <div className="flex flex-col gap-2">
                                    <div className="flex gap-2 items-center">
                                        <p className="text-lg font-xregular">{tour.city}</p>
                                        <p className="text-[10px] font-xregular">({tour.duration})</p>
                                    </div>
                                    <div className="text-[10px] font-xregular">{tour.date}</div>
                                </div>
                                <div>
                                    <p className="text-base font-xregular">{tour.hotel}</p>
                                </div>
                            </div>
                            <div className="flex items-center justify-between">
                                <p className="text-[14px] font-xregular">{tour.price} تومان</p>
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
