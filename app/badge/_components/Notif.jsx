import React, { useState } from "react";
import styles from "@/public/styles/about.module.css";

export default function Notif({ setStage, stage, setShowModal }) {
  return (
    <>
      <button
        className={`w-60 h-20 text-3xl font-semibold flex justify-center items-center absolute right-[15vw] top-[15vh]`}
        onClick={() => {
          setShowModal(false);
          setStage(1);
        }}
      >
        Back
      </button>
      <div className="flex flex-col gap-10 mx-40 justify-center items-center relative">
        <h1 className="text-3xl font-extrabold text-center uppercase">
          Notification?
        </h1>
        <p className="text-justify">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aut, eius
          labore doloribus beatae ab in delectus id eveniet odit quae suscipit,
          adipisci maxime perspiciatis animi? Id, ipsam. Vitae, quia voluptates!
          Cupiditate aspernatur eius reiciendis, quae deserunt, aperiam voluptas
          architecto, inventore commodi ipsum at omnis. Id aliquid, facere
          cumque tenetur similique non reprehenderit cum optio veritatis rem
          neque repellendus pariatur quasi beatae minus dignissimos sed eos
          sint! Eius expedita harum molestiae, aliquam quas odit pariatur
          doloribus explicabo delectus quidem quaerat nisi unde sunt, voluptatum
          ratione sed maxime eveniet ullam iusto. Alias, nihil consequuntur!
          Aperiam doloremque fugiat aliquam sequi mollitia culpa cumque?
        </p>
        <button
          className={`${styles.gradienbackmodal} w-60 h-10 text-base font-semibold flex justify-center items-center`}
          onClick={() => {
            setStage(2);
          }}
        >
          I'M READY!
        </button>
      </div>
    </>
  );
}
