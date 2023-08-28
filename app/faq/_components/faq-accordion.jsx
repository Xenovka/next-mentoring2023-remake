"use client";

import { useState } from "react";

import styles from "@/public/styles/faq.module.css";

export default function FAQAccordion({ title, content }) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div
      className={`${styles.bg} text-white p-4 my-2 mx-5 group bg-[#172546] transition-all cursor-pointer`}
    >
      <div
        className={`flex justify-between`}
        onClick={() => setIsActive(!isActive)}
      >
        <div>{title}</div>
        <div className={`${isActive ? "rotate-90" : ""} duration-500`}>
          <svg
            width="17"
            height="20"
            viewBox="0 0 17 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17 10L0.500002 19.5263L0.500002 0.473721L17 10Z"
              fill="#8FC3EA"
            />
          </svg>
        </div>
      </div>
      {isActive && (
        <div className="border-t-2 mt-2 pt-2 text-justify transition-all">
          {content}
        </div>
      )}
    </div>
  );
}
