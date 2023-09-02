import Image from "next/image";
import React, { useState, useEffect } from "react";
import styles from "@/public/styles/about.module.css";

export default function CharacterSelection({
  setStage,
  characters,
  setShowModal,
}) {
  const [gender, setGender] = useState("male");
  // const [loading, setLoading] = useState(true)
  useEffect(() => {
    const localGender = localStorage.getItem("gender");
    if (!localGender) {
      setStage(2);
    } else {
      setGender(localGender);
    }
    // setLoading(false)
  }, []);

  return (
    <>
      <button
        className={`flex justify-center items-center absolute left-72 top-[90px]`}
        onClick={() => {
          setStage(2);
        }}
      >
        <img src="/assets/back.svg" alt="" />
      </button>
      <button
        className={`w-10 flex justify-center items-center absolute right-72 top-[90px]`}
        onClick={() => {
          setShowModal(false);
        }}
      >
        <img src="/assets/close.svg" alt="" />
      </button>

      <div className="flex flex-col gap-20 justify-center items-center">
        <h1 className="text-3xl font-extrabold text-center uppercase">
          Select your character role
        </h1>

        <div className="h-full flex gap-10 justify-evenly">
          {characters.map((data, index) => (
            <div className="flex flex-col" key={index}>
              <div
                className="w-40 h-72 relative group"
                onClick={() => setStage(index + 4)}
              >
                <Image
                  src={`${data.image}-${
                    gender === "male" ? "male" : "female"
                  }.png`}
                  alt={data.alt}
                  fill
                  objectFit="cover"
                  className="absolute overflow-visible cursor-pointer z-40 w-[80%] h-[80%] pt-[5vh]"
                />
                <div
                  className="w-full h-full absolute top-[4.5rem] z-50 
              opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/assets/characters/field2.svg"
                    fill
                    alt="selected"
                  />
                </div>
                <div
                  className="w-full h-full absolute top-32 z-10 
              opacity-0 group-hover:opacity-100 transition-opacity"
                >
                  <Image
                    src="/assets/characters/field1.svg"
                    fill
                    alt="selected"
                  />
                </div>
              </div>

              <p
                className={`${data.color} text-center uppercase font-bold text-2xl drop-shadow-[0_0_5px_rgba(255,255,255,0.5)]`}
              >
                {data.title}
              </p>
            </div>
          ))}
        </div>
        <p className="text-center opacity-50 italic">
          Pililah character role yang sesuai dengan kepribadian mentee
        </p>
      </div>
    </>
  );
}
