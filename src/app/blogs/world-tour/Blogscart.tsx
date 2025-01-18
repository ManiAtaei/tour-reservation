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
                
                spaceBetween={10}
                slidesPerView={3}
                breakpoints={{
                    320 :{slidesPerView : 1},
                    500: { slidesPerView: 1 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 2 },
                    1024: { slidesPerView: 2.5 },
                }}
            >
                {tours.map((tour) => (
                    <SwiperSlide key={tour.id}>
                       <div>
                        <img className="w-full" src="/blog-main/iran-tour/مسجد.svg" alt="" />
                       </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}

export default TourCart;
