"use client";

import { useContext } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { DivisionContext } from "@/app/divisi/_context/division-context";

import "swiper/css";
import "swiper/css/navigation";

export default function DivisionSwiper({ divisionData }) {
  const { setCurrentIndex } = useContext(DivisionContext);

  const handleScreenSize = (swiper) => {
    const width = window.innerWidth;

    if (width < 1024) {
      swiper.params.slidesPerView = 3;
    } else {
      swiper.params.slidesPerView = 5;
    }
  };

  const onDataChanged = (swiper) => {
    setCurrentIndex(swiper.clickedIndex);
  };

  return (
    <div className="flex justify-center">
      <div className="w-9/12 mt-10">
        <Swiper
          className="h-16"
          spaceBetween={10}
          slidesPerView={5}
          onSwiper={(swiper) => handleScreenSize(swiper)}
          onClick={(swiper) => onDataChanged(swiper)}
        >
          {divisionData &&
            divisionData.map((item) => {
              return (
                <SwiperSlide
                  style={{
                    border: "3px solid",
                    borderTop: "none",
                    borderImageSlice: 2,
                    borderImageSource: `linear-gradient(to top, ${item.color} 0%, transparent 80%)`,
                    backgroundImage: `linear-gradient(to top, ${item.rgbaColor} -40%, rgba(40, 117, 180, 0.1) 90%)`
                  }}
                  className="cursor-pointer"
                  key={item.key}
                >
                  <div className="h-full flex justify-center items-center text-center">{item.name}</div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </div>
  );
}
