import React, { useState, useEffect } from "react";
import Image from "next/image";
import styles from "@/public/styles/about.module.css";

export default function CharacterDetails({
  setStage,
  setSelected,
  characters,
  setShowModal,
}) {
  const [image, setImage] = useState(`${characters.image}-male.png`);

  useEffect(() => {
    const gender = localStorage.getItem("gender");
    if (!gender) {
      setStage(2);
    } else {
      setImage(`${characters.image}-${gender}.png`);
    }
  }, []);

  return (
    <>
      <button
        className={`scale-75 lg:scale-100 flex justify-center items-center absolute left-20 top-10 md:left-32 md:top-[60px] lg:left-72 lg:top-[90px]`}
        onClick={() => {
          setStage(3);
        }}
      >
        <img src="/assets/back.svg" alt="" />
      </button>
      <button
        className={`scale-75 lg:scale-100 w-10 flex justify-center items-center absolute right-20 top-10 md:right-32 md:top-[60px] lg:right-72 lg:top-[90px]`}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <img src="/assets/close.svg" alt="" />
      </button>

      <div className="h-full flex flex-col gap-10 mx-10 lg:mx-40 justify-center items-center relative">
        <h1 className="text-lg lg:text-3xl font-extrabold text-center uppercase">
          Select your character
        </h1>
        <div className="flex flex-col lg:flex-row gap-20 justify-center items-center">
          <div className="h-full flex justify-evenly">
            <div className="w-56 h-80 relative flex justify-between">
              <div className="w-40 h-40 md:w-40 md:h-72 ">
                <Image
                  src={image}
                  alt={characters.alt}
                  fill
                  objectFit="cover"
                  className="absolute overflow-visible z-10"
                />
              </div>
              <div className="w-full h-full absolute top-20 z-20">
                <Image
                  src="/assets/characters/field2.svg"
                  fill
                  alt="selected"
                />
              </div>
              <div className="w-full h-full absolute top-40">
                <Image
                  src="/assets/characters/field1.svg"
                  fill
                  alt="selected"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex flex-col justify-around">
              <div>
                <p
                  className={`${characters.color} text-left uppercase font-bold text-3xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`}
                >
                  {characters.title}
                </p>
                <p
                  className={`${characters.color} font-bold italic drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`}
                >
                  Character Role
                </p>
              </div>
            </div>
            <div className="flex justify-around border-t-2 pt-5 mt-5">
              <p className="text-justify text-base">{characters.description}</p>
            </div>
          </div>
        </div>

        <button
          className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
          onClick={() => {
            setStage(9);
            setSelected(characters);
          }}
        >
          Continue
        </button>
      </div>
    </>
  );
}
