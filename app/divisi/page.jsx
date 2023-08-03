"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

export default async function Divisi() {
  const getData = async () => {
    const response = await fetch("https://simple-mentoring-api.netlify.app/.netlify/functions/api/data");
    const body = response.json();

    return body;
  };

  const slidesCountOnScreen = (swiper) => {
    const width = window.innerWidth;

    if (width < 1024) {
      swiper.params.slidesPerView = 3;
    } else {
      swiper.params.slidesPerView = 5;
    }
  };

  const [division, setDivision] = useState(null);

  useEffect(async () => {
    setDivision(await getData());
    console.log(division);
  }, []);

  return (
    <div className="flex justify-center">
      <div className="w-9/12 mt-10">
        <Swiper className="h-16" spaceBetween={10} slidesPerView={5} onSwiper={(swiper) => slidesCountOnScreen(swiper)}>
          {division &&
            division.data.map((item) => {
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
