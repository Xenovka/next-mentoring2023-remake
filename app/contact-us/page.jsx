"use client";

import { useState } from "react";

import Image from "next/image";
import Link from "next/link";

import ContactModal from "@/app/contact-us/_components/contact-modal";
import Footer from "@/components/footer";

import styles from "@/public/styles/contact.module.css";

export default function ContactUs() {
  const [showModal, setShowModal] = useState(false);
  const [showModal2, setShowModal2] = useState(false);

  return (
    <div className="overflow-hidden w-full">
      <div className="w-screen h-10 md:h-18 lg:h-16 flex justify-center mt-[3vh] relative ">
        <Image src="/assets/mentoring-logo.svg" alt="Logo" fill />
      </div>
      <div className="flex flex-col w-[40dvw] md:w-[20dvw] lg:w-[13dvw] md:ml-[12vw] ml-[10vw]">
        <span className="text-white font-semibold italic relative z-[5] mb-[-3dvw] md:mb-[-2.5dvw] lg:mb-[-1.4dvw] mx-3 text-sm md:text-lg lg:text-2xl">
          Contact Us
        </span>
        <div className={`${styles.title} w-full`}></div>
      </div>

      <div className="flex flex-col items-center ">
        <div className="gap-4 w-[90dvw] my-8 text-white grid grid-cols-2 md:grid-cols-4">
          <Link
            href="mailto:mentoring@umn.ac.id"
            className={` ${styles.bg} p-4 md:w-full h-[40vh] md:h-[50vh] flex flex-row items-center justify-center text-center text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] hover:-translate-y-1.5 hover:relative hover:z-10 transition-all`}
          >
            <div>
              <p className="font-bold text-base">Email</p>
              <div className="w-[25dvw] h-[25dvh] md:w-[10dvw] md:h-[30dvh] relative block mx-auto">
                <Image src="/assets/email.svg" alt="" fill />
              </div>
              <p className="text-[1.6vh] md:text-base">mentoring@umn.ac.id</p>
            </div>
          </Link>

          <Link
            href="https://instagram.com/mentoringumn"
            target="blank"
            className={`${styles.bg} p-4 md:w-full h-[40vh] md:h-[50vh] flex flex-row items-center justify-center text-center text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] hover:-translate-y-1.5 hover:relative hover:z-10 transition-all`}
          >
            <div>
              <p className="font-bold text-base">Instagram</p>
              <div className="w-[30dvw] h-[25dvh] md:w-[15dvw] md:h-[30dvh] relative block mx-auto pt-8 md:pt-12">
                <Image src="/assets/instagram.svg" alt="" fill />
              </div>
              <p className="text-[1.7vh] md:text-base">@mentoringumn</p>
            </div>
          </Link>

          <div
            className={` ${styles.bg} ${styles.bgbawah} p-4 md:w-full h-[40vh] md:h-[50vh] text-center text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] cursor-pointer hover:-translate-y-1.5 hover:relative hover:z-10 transition-all`}
            onClick={() => setShowModal(true)}
          >
            <p className="font-bold text-base">Sponsor</p>
          </div>

          <div
            className={` ${styles.bg} ${styles.bgbawah} p-4 md:w-full h-[40vh] md:h-[50vh] text-center text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] cursor-pointer hover:-translate-y-1.5 hover:relative hover:z-10 transition-all`}
            onClick={() => setShowModal2(true)}
          >
            <p className="font-bold text-[2.5vh]">Media Partner</p>
          </div>
        </div>

        <ContactModal isVisible={showModal} onClose={() => setShowModal(false)}>
          <div className="text-[3.5vw] font-bold md:text-[1.5vw] lg:text-[1.5vw] text-center pb-4">SPONSOR</div>
          <div className="gap-4 md:gap-5 grid grid-cols-2 md:grid-cols-3 mx-4">
            <div className="w-[25dvw] md:w-[20dvw] h-[25dvw] md:h-[20dvw] relative block mx-auto">
              <Image alt="" src="/assets/kotak.svg" fill />
            </div>
            <div className="w-[25dvw] md:w-[20dvw] h-[25dvw] md:h-[20dvw] relative block mx-auto">
              <Image alt="" src="/assets/kotak.svg" fill />
            </div>
            <div className="w-[25dvw] md:w-[20dvw] h-[25dvw] md:h-[20dvw] relative block mx-auto">
              <Image alt="" src="/assets/kotak.svg" fill />
            </div>
            <div className="w-[25dvw] md:w-[20dvw] h-[25dvw] md:h-[20dvw] relative block mx-auto">
              <Image alt="" src="/assets/kotak.svg" fill />
            </div>
            <div className="w-[25dvw] md:w-[20dvw] h-[25dvw] md:h-[20dvw] relative block mx-auto">
              <Image alt="" src="/assets/kotak.svg" fill />
            </div>
          </div>
        </ContactModal>

        <ContactModal isVisible={showModal2} onClose={() => setShowModal2(false)}>
          <h3>modal2</h3>
        </ContactModal>

        <div className={`${styles.gradienbutton} flex flex-col justify-center items-center w-[50vw] md:w-[20vw]`}>
          <Link
            href={"/"}
            className="uppercase text-white text-center font-normal text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] px-8 py-3"
          >
            Back
          </Link>
        </div>
      </div>
      <Footer />
    </div>
  );
}
