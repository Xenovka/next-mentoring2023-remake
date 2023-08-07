"use client";

import Image from "next/image";
import { useEffect, useState } from "react";
import styles from "@/public/styles/gallery.module.css";
import Link from "next/link";
import { GALLERY } from "../_data/dummy";
import Footer from "@/components/footer";
import EventList from "./gallery-eventlist";

export default function Desktop() {
  const [active, setActive] = useState(1);
  const [image, setImage] = useState(GALLERY[0].image);

  useEffect(() => {
    const image = GALLERY.find((item) => item.id === active)?.image;
    console.log(image);
    setImage(image);
  }, [active]);
  return (
    <div className="w-full h-full md:overflow-x-hidden hidescroll ">
      <Image
        src="/assets/logo.png"
        className="absolute top-24 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        alt="Logo"
        quality={100}
        width={100}
        height={100}
      />
      <div className=" sm:px-4 py-8 mt-20 mx-24">
        {/* navigation */}
        <div className="flex flex-col w-[30dvw] md:w-[20dvw] lg:w-[13dvw] md:ml-[12vw] ml-[10vw]">
          <span className="text-white font-semibold italic relative z-[5] mb-[-3dvw] md:mb-[-2.5dvw] lg:mb-[-1.4dvw] mx-3 text-xs md:text-lg lg:text-2xl">
            Gallery
          </span>
          <div className={`${styles.title} w-full`}></div>
        </div>

        <div className="text-white">
          <div className={` mt-10 py-10 px-14  `}>
            <h2 className="text-center text-4xl mb-6 font-bold">Select Your Event</h2>
            <div className={`flex w-full gap-6 max-h-[60vh]`}>
              <div className="basis-1/3">
                <h2 className="text-center text-4xl italic">Events</h2>
                <div className="bg-white h-[2px] my-8"></div>
                <ul className={`list-none overflow-y-auto max-h-[49dvh] ${styles.list} pl-2`}>
                  {GALLERY.map((item, index) => (
                    <EventList
                      isMobile={false}
                      title={item.title}
                      img={item.img}
                      id={item.id}
                      active={active === item.id}
                      setActive={setActive}
                      key={index}
                    />
                  ))}
                </ul>
              </div>
              <div className="basis-2/3">
                <div className="relative h-full">
                  <Image
                    src={image}
                    className="object-cover border-x-[30px] border-y-[30px] border-[#172546]"
                    alt="pembekalan1"
                    quality={100}
                    fill="responsive"
                  />
                  <div className="absolute z-10 2xl:bottom-20 bottom-44 left-16">
                    <h2 className="text-5xl ">Pembekalan 1</h2>
                    <h3 className="text-2xl ">MENTORING UMN 2023</h3>
                  </div>
                  <div className="absolute z-10 bottom-20 2xl:right-16 2xl:left-auto left-16">
                    <button className={`${styles.whitebtn} flex`}>
                      <Link href={`/gallery/${active}/photo`}>
                        <span className=" text-white text-center text-xl px-16 py-4">Open Gallery</span>
                      </Link>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
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
