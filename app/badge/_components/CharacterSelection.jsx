import Image from "next/image";
import React, { useState } from "react";

export default function CharacterSelection({ setStage }) {
  const data = [
    {
      img: "/assets/characters/leader-male.png",
      alt: "leader",
      text: "Leader",
      color: "text-[#72ACE5]",
    },
    {
      img: "/assets/characters/thinker-male.png",
      alt: "thinker",
      text: "Thinker",
      color: "text-[#72ACE5]",
    },
    {
      img: "/assets/characters/support-male.png",
      alt: "support",
      text: "Support",
      color: "text-[#CADBC2]",
    },
    {
      img: "/assets/characters/passionate-male.png",
      alt: "passionate",
      text: "Passionate",
      color: "text-[#F9EF83]",
    },
    {
      img: "/assets/characters/neutral-male.png",
      alt: "neutral",
      text: "Neutral",
      color: "text-[#E5BEBE]",
    },
    // {
    //   img: "/assets/characters/leader-female.png",
    //   alt: "leader",
    //   text: "LEader",
    //   color: "text-[#72ACE5]",
    // },
    // {
    //   img: "/assets/characters/thinker-female.png",
    //   alt: "thinker",
    //   text: "Thinker",
    //   color: "text-[#72ACE5]",
    // },
    // {
    //   img: "/assets/characters/support-female.png",
    //   alt: "support",
    //   text: "Support",
    //   color: "text-[#CADBC2]",
    // },
    // {
    //   img: "/assets/characters/passionate-female.png",
    //   alt: "passionate",
    //   text: "Passionate",
    //   color: "text-[#F9EF83]",
    // },
    // {
    //   img: "/assets/characters/neutral-female.png",
    //   alt: "neutral",
    //   text: "Neutral",
    //   color: "text-[#E5BEBE]",
    // },
  ];

  return (
    <div className="flex flex-col gap-10 justify-center">
      <h1 className="text-3xl font-extrabold text-center uppercase">
        Select your character role
      </h1>

      <div className="h-full flex justify-evenly">
        {data.map((data, index) => (
          <div
            className="w-40 h-72 relative"
            key={index}
            onClick={() => setStage(index + 4)}
          >
            <Image
              src={data.img}
              alt={data.alt}
              fill
              objectFit="cover"
              className="absolute overflow-visible"
            />
          </div>
        ))}
      </div>
      <div className="flex justify-around mx-10">
        {data.map((data, index) => (
          <p
            className={`${data.color} text-center uppercase font-bold text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`}
            key={index}
          >
            {data.text}
          </p>
        ))}
      </div>

      {/* <div className="h-80 flex justify-evenly">
        <div
          className="flex flex-col justify-between"
          onClick={() => setStage(4)}
        >
          <div className="w-40 h-72 relative">
            <Image
              src="/assets/characters/thinker.png"
              className="absolute overflow-visible"
              alt="Thinker"
              fill
              objectFit="cover"
            />
          </div>
          <p className="text-center uppercase font-bold text-2xl text-[#72ACE5] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            Thinker
          </p>
        </div>
        <div
          className="flex flex-col justify-between"
          onClick={() => setStage(5)}
        >
          <div className="w-40 h-72 relative">
            <Image
              src="/assets/characters/support.png"
              className="absolute overflow-visible"
              alt="Support"
              fill
              objectFit="cover"
            />
          </div>
          <p className="text-center uppercase font-bold text-2xl text-[#CADBC2] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            Support
          </p>
        </div>
        <div
          className="flex flex-col justify-between"
          onClick={() => setStage(6)}
        >
          <div className="w-52 h-72 relative">
            <Image
              src="/assets/characters/passionate.png"
              className="absolute overflow-visible"
              alt="Passionate"
              fill
              objectFit="cover"
            />
          </div>
          <p className="text-center uppercase font-bold text-2xl text-[#F9EF83] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            Passionate
          </p>
        </div>
        <div
          className="flex flex-col justify-between"
          onClick={() => setStage(7)}
        >
          <div className="w-40 h-72 relative">
            <Image
              src="/assets/characters/neutral.png"
              className="absolute overflow-visible"
              alt="Neutral"
              fill
              objectFit="cover"
            />
          </div>
          <p className="text-center uppercase font-bold text-3xl text-[#E5BEBE] drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]">
            Neutral
          </p>
        </div>
      </div> */}

      <p className="text-center opacity-50 italic">
        Pililah character role yang sesuai dengan kepribadian mentee
      </p>
    </div>
  );
}
