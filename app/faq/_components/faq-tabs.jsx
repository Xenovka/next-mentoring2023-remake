"use client";

import { useState } from "react";

import styles from "@/public/styles/faq.module.css";

export default function FAQTabs() {
  const [toggleState, setToggleState] = useState(1);

  const toggleTab = (index) => {
    setToggleState(index);
  };
  return (
    <div className={`text-white hidden md:flex flex-row justify-between relative w-[80vw] h-fit break-normal mx-auto`}>
      <div className={`flex flex-col w-fit h-[50dvh] gap-4 overflow-scroll overflow-x-hidden hidescroll`}>
        <div className="bg-[#172546] w-fit h-fit ">
          <button
            className={toggleState === 1 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(1)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Siapa yang menjadi ketua mentoring umn 2023 pada kesempatan itu? asdlasda asdasda dasd asd asd ada
              </span>
              <div className="transform transition ease duration-500 group-focus:rotate-90">
                <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
                </svg>
              </div>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={toggleState === 2 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(2)}
          >
            <div className="flex flex-row justify-between items-center">
              <span className="w-[28vw]">Contoh pertanyaan ke dua nih hayo apa</span>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={toggleState === 3 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(3)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Siapa yang menjadi ketua mentoring umn 2023 pada kesempatan itu? asdlasda asdasda dasd asd asd ada
              </span>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={toggleState === 4 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(4)}
          >
            <div className="flex flex-row justify-between items-center">
              <span className="w-[28vw]">Contoh pertanyaan ke dua nih hayo apa</span>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={toggleState === 5 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(5)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Siapa yang menjadi ketua mentoring umn 2023 pada kesempatan itu? asdlasda asdasda dasd asd asd ada
              </span>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={toggleState === 6 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(6)}
          >
            <div className="flex flex-row justify-between items-center">
              <span className="w-[28vw]">Contoh pertanyaan ke dua nih hayo apa</span>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={toggleState === 7 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(7)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Siapa yang menjadi ketua mentoring umn 2023 pada kesempatan itu? asdlasda asdasda dasd asd asd ada
              </span>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={toggleState === 8 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(8)}
          >
            <div className="flex flex-row justify-between items-center">
              <span className="w-[28vw]">Contoh pertanyaan ke dua nih hayo apa</span>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
              </svg>
            </div>
          </button>
        </div>

        <div className="bg-[#172546] w-fit h-fit">
          <button
            className={toggleState === 9 ? `${styles.tabs} ${styles.activetabs}` : `${styles.tabs}`}
            onClick={() => toggleTab(9)}
          >
            <div className="flex flex-row justify-between items-center ">
              <span className="w-[28vw]">
                Siapa yang menjadi ketua mentoring umn 2023 pada kesempatan itu? asdlasda asdasda dasd asd asd ada
              </span>
              <svg width="17" height="20" viewBox="0 0 17 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z" fill="#8FC3EA" />
              </svg>
            </div>
          </button>
        </div>
      </div>

      <div className={`${styles.contenttabs} flex`}>
        <div className={toggleState === 1 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati praesentium incidunt quia aspernatur
            quasi quidem facilis quo nihil vel voluptatum?
          </p>
        </div>

        <div className={toggleState === 2 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
        </div>

        <div className={toggleState === 3 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
        </div>

        <div className={toggleState === 4 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
        </div>

        <div className={toggleState === 5 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
        </div>

        <div className={toggleState === 6 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
        </div>

        <div className={toggleState === 7 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
        </div>

        <div className={toggleState === 8 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 2</h2>
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente voluptatum qui adipisci.</p>
        </div>

        <div className={toggleState === 9 ? `${styles.content}  ${styles.activecontent}` : `${styles.content}`}>
          <h2>Content 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eos sed nostrum rerum laudantium totam unde
            adipisci incidunt modi alias! Accusamus in quia odit aspernatur provident et ad vel distinctio recusandae
            totam quidem repudiandae omnis veritatis nostrum laboriosam architecto optio rem, dignissimos voluptatum
            beatae aperiam voluptatem atque. Beatae rerum dolores sunt.
          </p>
        </div>
      </div>
    </div>
  );
}
