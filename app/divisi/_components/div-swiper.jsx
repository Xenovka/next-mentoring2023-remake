import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/navigation";

export default function DivisionSwiper({ divisionList, onScreenSize, onDataChanged }) {
  return (
    <div className="flex justify-center">
      <div className="w-9/12 mt-10">
        <Swiper
          className="h-16"
          spaceBetween={10}
          slidesPerView={5}
          onSwiper={(swiper) => onScreenSize(swiper)}
          onClick={(swiper) => onDataChanged(swiper)}
        >
          {divisionList &&
            divisionList.map((item) => {
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
