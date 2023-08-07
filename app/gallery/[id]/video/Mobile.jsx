"use client";

import Image from "next/image";
import { React, useState } from "react";
import styles from "@/public/styles/gallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import SwiperCore from "swiper";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";
SwiperCore.use([Navigation]);

export default function Mobile({ gallery }) {
  const [isPlaying, setIsPlaying] = useState(gallery.map(() => false));

  const handleSlideChange = () => {
    setIsPlaying(isPlaying.map(() => false));
  };

  const handleVideoToggle = (i) => {
    setIsPlaying(isPlaying.map((v, index) => (index === i ? true : false)));
  };

  const path = usePathname();
  const id = path.split("/")[2];

  return (
    <div className="w-full h-full md:overflow-x-hidden flex flex-col justify-center">
      <Image
        src="/assets/mentoring-logo.svg"
        className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        alt="Logo"
        quality={100}
        width={100}
        height={100}
      />
      <div className="px-0 sm:px-4 py-8 mt-28 sm:mx-24 flex flex-col justify-center flex-grow">
        {/* navigation */}
        <div className="flex justify-center gap-10 ">
          <Link className="relative w-62" href={`/gallery/${id}/photo`}>
            <Image src="/assets/placeholder-long.svg" alt="Image" width={400} height={400} />
            <h1 className="absolute bottom-1/2 right-6 text-white italic text-2xl">Photo</h1>
          </Link>
          <Link className="relative w-62" href={`/gallery/${id}/video`}>
            <Image src="/assets/placeholder-long.svg" alt="Image" width={400} height={400} className="scale-x-[-1]" />
            <h1 className="absolute bottom-1/2 left-4 text-white italic text-2xl">Video</h1>
          </Link>
        </div>

        {/* Carousel */}
        <div className="relative w-full mx-auto my-16 select-none flex justify-center">
          {/* asdasd */}
          <Swiper navigation={true} onSlideChange={handleSlideChange}>
            {gallery[id].videos.map((url, i) => (
              <SwiperSlide className="flex justify-center w-full py-4 " key={i}>
                <div className="text-center h-96 ">
                  <ReactPlayer
                    className="mx-auto"
                    width={"90%"}
                    height={"100%"}
                    url={url}
                    playing={isPlaying[i]}
                    onPlay={() => handleVideoToggle(i)}
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>

        {/* Back Button */}
        <div className="">
          <button className={`${styles.yellowbtn} flex flex-col justify-end place-self-end float-right mt-3`}>
            <span className=" text-white text-center text-xl px-24 py-3">Back</span>
          </button>
        </div>
      </div>
      <Footer />
    </div>
  );
}
