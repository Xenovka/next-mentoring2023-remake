import Image from "next/image";
import Link from "next/link";

import FAQTabs from "@/app/faq/_components/faq-tabs";
// import FAQAccordion from "@/app/faq/_components/faq-accordion";
import Footer from "@/components/footer";

import styles from "@/public/styles/faq.module.css";

export default function Faq() {
  return (
    <div className="overflow-hidden">
      <div className="w-screen h-10 md:h-18 lg:h-16 flex justify-center mt-[3vh] relative ">
        <Image src="/assets/mentoring-logo.svg" alt="Logo" fill />
      </div>
      <div className="flex flex-col w-[30dvw] md:w-[20dvw] lg:w-[13dvw] md:ml-[12vw] ml-[10vw]">
        <span className="text-white font-semibold italic relative z-[5] mb-[-3dvw] md:mb-[-2.5dvw] lg:mb-[-1.4dvw] mx-3 text-xs md:text-lg lg:text-2xl">
          FAQ
        </span>
        <div className={`${styles.title} w-full`}></div>
      </div>
      <div className="min-h-[60dvh] mt-[5dvh] mx-auto">
        {/* <div className={`max-w-600px mx-2 my-10 md:hidden`}>
          <FAQAccordion title="Content" content="Content Body" />
        </div> */}
        <FAQTabs />
        <div className="w-[90vw] md:w-[80vw] flex flex-col md:flex-row items-center md:justify-between mx-auto pt-2 border-t-2 border-[#8FC3EA] md:border-none">
          <div className=" text-white font-semibold text-[3vw] md:text-sm lg:text-base text-center md:text-left w-[80vw] md:w-[50vw] lg:w-[35vw]">
            We’re also providing our contact in order to ask specifict question by opening{" "}
            <Link className="text-[#8FC3EA]" href="/contact-us">
              CONTACT US
            </Link>{" "}
            page.
          </div>
          <div
            className={`${styles.gradienbutton} flex flex-col justify-center items-center w-[50vw] md:w-[15vw] mt-[3vh]`}
          >
            <span className="uppercase text-white text-center font-normal text-[2.5vw] md:text-[1.5vw] lg:text-[1.5vw] px-8 py-3">
              Back
            </span>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
