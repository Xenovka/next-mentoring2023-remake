"use client";

import { useContext, useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { DivisionContext } from "@/app/divisi/_context/division-context";

import "swiper/css";

export default function DivisionSwiper({ divisionData }) {
    const { currentIndex, setCurrentIndex } = useContext(DivisionContext);
    const [slides, setSlides] = useState(5);

    const handleSetSlide = (width) => {
        if (width < 540) {
            setSlides(1);
        } else if (width < 1024) {
            setSlides(3);
        } else {
            setSlides(5);
        }
    };

    const onResizeSwiper = (swiper) => {
        window.addEventListener("resize", () => {
            handleSetSlide(window.innerWidth);
        });
    };

    useEffect(() => {
        handleSetSlide(window.innerWidth);
    }, []);

    const onDataChanged = (swiper) => {
        if (swiper.clickedIndex === undefined) return;

        setCurrentIndex(swiper.clickedIndex);
    };

    return (
        <div className="w-auto flex justify-center">
            <div className="w-9/12 mt-10">
                <Swiper
                    grabCursor={true}
                    spaceBetween={10}
                    slidesPerView={slides}
                    onSwiper={(swiper) => onResizeSwiper(swiper)}
                    onClick={(swiper) => onDataChanged(swiper)}
                >
                    {divisionData &&
                        divisionData.map((item, index) => {
                            return (
                                <SwiperSlide
                                    style={{
                                        border: "3px solid",
                                        borderTop: "none",
                                        borderImageSlice: 2,
                                        borderImageSource: `linear-gradient(to top, ${item.color} 0%, transparent 80%)`,
                                        backgroundImage: `linear-gradient(to top, ${item.rgbaColor} -40%, rgba(40, 117, 180, 0.1) 90%)`
                                    }}
                                    className="flex justify-center"
                                    key={item.key}
                                >
                                    <div className="flex justify-center items-center h-full">
                                        <div
                                            className={`flex justify-center items-center max-sm:text-lg text-center ${
                                                index === currentIndex ? "selected-swiper" : "h-16"
                                            }`}
                                        >
                                            {item.name}
                                        </div>
                                    </div>
                                </SwiperSlide>
                            );
                        })}
                </Swiper>
            </div>
        </div>
    );
}
