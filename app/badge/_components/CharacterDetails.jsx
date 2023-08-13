import React from "react";
import Image from "next/image";

export default function CharacterDetails({ image, title, description }) {
  const data = [
    // {
    //   src: "/assets/characters/thinker.png",
    //   alt: "Thinker",
    //   name: "Thinker",
    //   color: "text-[#72ACE5]",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit doloremque reprehenderit magni vel soluta non alias quae! Facere, recusandae?",
    // },
    {
      src: "/assets/characters/support.png",
      alt: "Support",
      name: "Support",
      color: "text-[#CADBC2]",
      desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit doloremque reprehenderit magni vel soluta non alias quae! Facere, recusandae?",
    },
    // {
    //   src: "/assets/characters/passionate.png",
    //   alt: "Passionate",
    //   name: "Passionate",
    //   color: "text-[#F9EF83]",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit doloremque reprehenderit magni vel soluta non alias quae! Facere, recusandae?",
    // },
    // {
    //   src: "/assets/characters/neutral.png",
    //   alt: "Neutral",
    //   name: "Neutral",
    //   color: "text-[#E5BEBE]",
    //   desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Molestias suscipit doloremque reprehenderit magni vel soluta non alias quae! Facere, recusandae?",
    // },
  ];

  return (
    <div className="flex flex-col gap-20 mx-40 justify-center">
      <h1 className="text-3xl font-extrabold text-center uppercase">
        Select your character
      </h1>
      <div className="flex gap-20 justify-center items-center">
        <div className="h-full flex justify-evenly">
          {data.map((image, index) => (
            <div
              className="w-56 h-80 relative flex justify-between"
              key={index}
            >
              <div className="w-40 h-72 ">
                <Image
                  src={image.src}
                  alt={image.alt}
                  fill
                  objectFit="cover"
                  className="absolute overflow-visible z-10"
                />
              </div>
              <div className="w-full h-full absolute top-20 z-20">
                <Image src="/assets/characters/field2.svg" fill />
              </div>
              <div className="w-full h-full absolute top-40">
                <Image src="/assets/characters/field1.svg" fill />
              </div>
            </div>
          ))}
        </div>
        <div className="flex flex-col">
          <div className="flex flex-col justify-around">
            {data.map((data, index) => (
              <div>
                <p
                  className={`${data.color} text-left uppercase font-bold text-3xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`}
                  key={index}
                >
                  {data.name}
                </p>
                <p
                  className={`${data.color} font-bold italic drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`}
                >
                  Character Role
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-around border-t-2 pt-5 mt-5">
            {data.map((data, index) => (
              <p className="text-justify text-base" key={index}>
                {data.desc}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
