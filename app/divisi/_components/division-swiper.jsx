"use client";

import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { DivisionContext } from "@/app/divisi/_context/division-context";

import "swiper/css";

export default function DivisionSwiper({ divisionData }) {
  const { currentIndex, setCurrentIndex } = useContext(DivisionContext);

  const handleScreenSize = (swiper) => {
    const width = window.innerWidth;

    if (width < 1024) {
      swiper.params.slidesPerView = 3;
    } else {
      swiper.params.slidesPerView = 5;
    }
  };

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
          slidesPerView={5}
          onSwiper={(swiper) => handleScreenSize(swiper)}
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
                      className={`flex justify-center items-center text-center ${
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
