"use client";

import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

import "swiper/css";
import "swiper/css/navigation";

export default async function Divisi() {
  const [division, setDivision] = useState(null);
  const [divisionList, setDivisionList] = useState(null);
  const [contentBoxStyles, setContentBoxStyles] = useState({
    backgroundImage: "linear-gradient(to top, #0096a730 0%, #0096a710 50%)",
    borderImageSource: "linear-gradient(to top, #0097a7 0%, transparent 80%)"
  });

  const getData = async () => {
    const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
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

  const changeDivisionData = (swiper) => {
    const currentDivision = divisionList[swiper.clickedIndex];
    const color = currentDivision.color;

    setDivision(currentDivision);

    setContentBoxStyles({
      backgroundImage: `linear-gradient(to top, ${color}30 0%, ${color}10 50%)`,
      borderImageSource: `linear-gradient(to top, ${color} 0%, transparent 80%)`
    });
  };

  const setDivisionData = async () => {
    const response = await getData();
    setDivisionList(response.data);
    setDivision(response.data[0]);
  };

  useEffect(() => {
    setDivisionData();
  }, []);

  return (
    <>
      <div className="w-auto h-auto mt-14 align-middle flex justify-center relative">
        <Link href="/">
          <Image src="/assets/mentoring-logo.svg" width={94} height={74} alt="logo" priority />
        </Link>
        <div className="w-[180px] h-6 absolute top-[15%] left-[12%]">
          <Link href="/">
            <div className="w-full h-full relative">
              <div className="btn-back-border"></div>
              <p className="text-white text-2xl font-bold italic absolute -top-1/2 left-[10%]">Character</p>
            </div>
          </Link>
        </div>
      </div>
      <div className="flex justify-center">
        <div className="w-9/12 mt-10">
          <Swiper
            className="h-16"
            spaceBetween={10}
            slidesPerView={5}
            onSwiper={(swiper) => slidesCountOnScreen(swiper)}
            onClick={(swiper) => changeDivisionData(swiper)}
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
      <div className="w-fit h-auto mx-auto mt-11 grid grid-cols-[305px,_515px,_419px] gap-6 grid-rows-[325px,_100px]">
        <div className="row-[1_/span_2] col-[1_/span_1]">
          <div style={contentBoxStyles} className="box box-crew text-white flex flex-col items-center h-full">
            <h1 className="text-2xl font-bold mt-6">Crew</h1>
            <div className="crew-divider"></div>
            <div className="text-center w-full h-full overflow-y-scroll no-scrollbar pb-8 px-8">
              <ul>
                {division &&
                  division.members.map((item, index) => (
                    <li className="my-5" key={index}>
                      {item}
                    </li>
                  ))}
              </ul>
            </div>
          </div>
        </div>
        <div className=" row-[1_/span_2] col-[2_/_3]">
          <div style={contentBoxStyles} className="box box-preview text-center text-white flex flex-col items-center">
            <h1 className="text-2xl font-bold p-6">Character Preview</h1>
            {division && (
              <div>
                <Image src={division.image} alt={division.name} width={300} height={300} />
              </div>
            )}
          </div>
        </div>
        <div className=" row-[1_/span_1] col-[3_/span_1]">
          {division && (
            <div
              style={contentBoxStyles}
              className="box box-description text-white text-center flex flex-col items-center justify-center h-full p-6"
            >
              <h1 className="text-2xl font-bold">{division.name}</h1>
              <p className="mt-4 text-base">{division.description}</p>
            </div>
          )}
        </div>
        <div className="box box-back row-[2_/span_1] col-[3_/span_1] py-8 px-6 cursor-pointer text-center">
          <Link href={"/"} className="text-2xl text-white font-bold">
            Back
          </Link>
        </div>
      </div>
      <footer className="w-full mt-9 h-28">
        <p className="text-center text-3xl text-[#9BCDEC] font-bold italic drop-shadow-[6px_6px_4px_#000000]">
          #PerceivePursuePersevere
        </p>
        <p className="text-center text-xs text-[#9BCDEC] opacity-30 font-bold">copyright &copy; 2023 Mentoring UMN</p>
      </footer>
    </>
  );
}
