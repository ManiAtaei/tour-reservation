"use client";
import React, { useState } from "react";
import Image from "next/image";
import SearchTour from "./SearchTour";

type Tour = {
    id: number;
    title: string;
    image: string;
};

const tours: Tour[] = [
    { id: 1, title: "همه تور ها", image: "/slider-img/1.png" },
    { id: 2, title: "تور های زیارتی", image: "/slider-img/2.png" },
    { id: 3, title: "تور های طبیعت گردی", image: "/slider-img/3.png" },
    { id: 4, title: "تور های تاریخی", image: "/slider-img/4.png" },
    { id: 5, title: "تور های گردشگری", image: "/slider-img/5.png" },
    { id: 6, title: "تور های یک روزه", image: "/slider-img/6.png" },
];

function PictureSlide() {
    const [currentImage, setCurrentImage] = useState<string>(tours[0].image);
    const [selectedTour, setSelectedTour] = useState<number>(tours[0].id);
    const [isAnimating, setIsAnimating] = useState<boolean>(false);

    const handleClick = (id: number, image: string) => {
        if (id === selectedTour) return;
        setIsAnimating(true);
        setTimeout(() => {
            setCurrentImage(image);
            setSelectedTour(id);
            setIsAnimating(false);
        }, 200);
    };

    return (
        <div className="w-full mt-4">
            <div className="overflow-hidden relative">
                <Image
                    src={currentImage}
                    alt="تصویر تور انتخابی"
                    width={1200}
                    height={506}
                    className={`w-full h-[506px] object-cover transition-transform duration-300 ${isAnimating ? "-translate-x-full opacity-0" : "translate-x-0 opacity-100"}`}
                />
                <SearchTour />
            </div>

            <div className="flex items-center justify-between mt-4 overflow-x-auto gap-4 mx-auto xl:px-[200px] scrollbar-hide">
                {tours.map((tour) => (
                    <label
                        onClick={() => handleClick(tour.id, tour.image)}
                        key={tour.id}
                        className={`cursor-pointer whitespace-nowrap px-4 py-2 transition text-xl 
                        ${selectedTour === tour.id ? "text-orange-500 border-b-2 border-orange-500" : "text-gray-800"}`}
                    >
                        {tour.title}
                    </label>
                ))}
            </div>
        </div>
    );
}

export default PictureSlide;
