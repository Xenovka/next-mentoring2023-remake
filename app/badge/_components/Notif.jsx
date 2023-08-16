import React, { useState } from "react";
import styles from "@/public/styles/about.module.css";

export default function Notif({ setStage, stage, setShowModal }) {
  return (
    <>
      <div className="flex flex-col gap-10 mx-40 justify-center items-center relative">
        <h1 className="text-3xl font-extrabold text-center uppercase">
          CHOOSE YOUR CHARACTER
        </h1>
        <p className="text-center">
          Hi! Sebelum kamu memulai perjalanan kamu di Mentoring 2023, ada
          beberapa hal yang perlu kamu siapkan. <br /> <br /> Are you ready?
        </p>
        <button
          className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
          onClick={() => {
            setStage(2);
          }}
        >
          I'M READY!
        </button>
        <button
          className={`w-60 h-10 text-base font-semibold flex justify-center items-center`}
          onClick={() => {
            setShowModal(false);
          }}
        >
          Back
        </button>
      </div>
    </>
  );
}
