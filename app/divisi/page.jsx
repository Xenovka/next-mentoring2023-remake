"use client";

import { useEffect, useState } from "react";

import Footer from "@/components/footer";
import DivisionContent from "@/app/divisi/_components/div-content";
import DivisionSwiper from "@/app/divisi/_components/div-swiper";

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

  const handleScreenSize = (swiper) => {
    const width = window.innerWidth;

    if (width < 1024) {
      swiper.params.slidesPerView = 3;
    } else {
      swiper.params.slidesPerView = 5;
    }
  };

  const handleDivisionDataChange = (swiper) => {
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
      {divisionList && (
        <div>
          <DivisionSwiper
            divisionList={divisionList}
            onScreenSize={handleScreenSize}
            onDataChanged={handleDivisionDataChange}
          />
          <DivisionContent division={division} boxStyles={contentBoxStyles} />
          <Footer />
        </div>
      )}
    </>
  );
}
