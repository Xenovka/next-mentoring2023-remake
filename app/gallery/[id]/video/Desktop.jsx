"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/public/styles/gallery.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore from "swiper";
import { Navigation } from "swiper/modules";
import ReactPlayer from "react-player";
import "swiper/css";
import "swiper/css/navigation";
import Link from "next/link";
import { notFound, usePathname } from "next/navigation";
import Footer from "@/components/footer";
SwiperCore.use([Navigation]);

export default function Desktop({ gallery }) {
  const path = usePathname();
  const id = path.split("/")[2];
  const selected = gallery.find((v) => v.id === Number(id));
  if(!selected) notFound()

  const [isPlaying, setIsPlaying] = useState(selected.videos.map(() => false));

  const handleSlideChange = () => {
    setIsPlaying(isPlaying.map(() => false));
  };

  const handleVideoToggle = (i) => {
    setIsPlaying(isPlaying.map((v, index) => (index === i ? true : false)));
  };

  return (
    <div className="w-full h-full md:overflow-x-hidden hidescroll ">
      <Image
        src="/assets/mentoring-logo.svg"
        className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        alt="Logo"
        quality={100}
        width={100}
        height={100}
      />
      <div className=" sm:px-4 py-8 mt-28 mx-24">
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
        {
          selected.videos.length > 0 ? (
            <div className="relative w-[80vw] mx-auto my-16 select-none">
              <Swiper navigation={true} onSlideChange={handleSlideChange}>
                {selected.videos.map((url, i) => (
                  <SwiperSlide className="flex justify-center w-full py-4 " key={i}>
                    <div className="text-center h-[680px]">
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
          ) : (
            <div className="relative w-[80vw] mx-auto my-16 select-none flex justify-center">
              <div className="text-center ">
                <h1 className="text-white text-4xl font-bold my-32">No Video Available</h1>
              </div>
            </div>
          )
        }


        {/* Back Button */}
        <div className="">
          <Link href={`/gallery`}>
            <button className={`${styles.yellowbtn} flex flex-col justify-end place-self-end float-right mt-3`}>
              <span className=" text-white text-center text-xl px-24 py-3">Back</span>
            </button>
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
