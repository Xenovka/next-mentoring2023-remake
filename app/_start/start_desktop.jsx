"use client";

import Link from "next/link";
import Image from "next/image";

import { motion } from "framer-motion";

import Footer from "@/components/footer";

export default function Start() {
  return (
    <main>
      <div className="w-full h-screen relative">
        <Image
          src="/assets/mentoring-logo.svg"
          className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2"
          alt="Logo"
          quality={100}
          width={100}
          height={100}
        />

        <div className="flex flex-row justify-between mx-5 py-10 xl:px-12 lg:px-8 md:px-2 relative pb-16">
          <div className="absolute left-1/2 top-1/2 -translate-y-1/2 -translate-x-1/2 w-[40dvw] h-[40dvw]">
            <motion.div
              initial={{ y: 0, scale: 0, transitionDelay: 2 }}
              animate={{
                y: [-30, 0, -30],
                scale: 1,
                transition: {
                  y: {
                    duration: 3,
                    repeat: Infinity,
                    repeatType: "reverse",
                    ease: "easeInOut",
                  },
                  scale: {
                    duration: 1,
                    ease: "easeInOut",
                  },
                },
              }}
              style={{ width: "100%", height: "100%", margin: "auto" }}
            >
              <Image
                src="/assets/zachery/zach-circle.png"
                alt="Zach"
                quality={100}
                fill
              />
            </motion.div>
          </div>
          <div className="xl:w-1/3 lg:w-1/2 flex flex-col mt-4 ">
            <Link
              href={"/faq"}
              className="py-9 relative xl:w-72 w-60 xl:ml-14 ml-6 flex hover:translate-y-[-5px] transition-transform duration-300"
            >
              <Image
                src="/assets/buttons/btn-faq.svg"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
                alt="Image"
                width={400}
                height={330}
              />
              <h1 className="text-white absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 text-3xl">
                FAQ
              </h1>
            </Link>

            {/*Gallery Card */}
            <div className={` mt-32 md:px-10 lg:px-0 relative `}>
              <Image
                src="/assets/borders/border-gallery.png"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 w-[28rem]"
                alt="Image"
                width={200}
                height={200}
              />
              <div className="bg-gradient-to-t to-transparent rounded-lg p-0.5 relative mx-auto w-80">
                <div className="p-1 bg-gradient-to-t from-yellowOutline to-transparent rounded-lg mb-8 ">
                  <Image
                    src="/assets/mantap.png"
                    className="w-full rounded-lg"
                    alt="Image"
                    width={200}
                    height={200}
                  />
                </div>
                <Link
                  href="/"
                  className="pt-10 flex w-full mx-auto hover:translate-y-[-5px] transition-transform duration-300"
                >
                  <Image
                    src="/assets/buttons/btn-gallery.png"
                    className="absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2 w-full"
                    alt="Image"
                    width={300}
                    height={300}
                  />
                  <h1 className="text-white absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl whitespace-nowrap">
                    Open Gallery
                  </h1>
                </Link>
              </div>
            </div>

            <div className="mt-14 ">
              <Link
                href="/about-us"
                className="relative flex w-80 mx-auto mt-24 hover:translate-y-[-5px] transition-transform duration-300"
              >
                <Image
                  src="/assets/buttons/btn-about.svg"
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
                  alt="Image"
                  width={500}
                  height={530}
                />
                <h1 className="text-white absolute top-[55%] left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl whitespace-nowrap">
                  About Us
                </h1>
              </Link>
              <Link
                href="/contact-us"
                className="relative flex w-80 mx-auto mt-28 hover:translate-y-[-5px] transition-transform duration-300"
              >
                <Image
                  src="/assets/buttons/btn-contact.svg"
                  className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
                  alt="Image"
                  width={500}
                  height={530}
                />
                <h1 className="text-white absolute top-1/4 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl whitespace-nowrap ">
                  Contact Us
                </h1>
              </Link>
            </div>
          </div>

          {/* Notification Card */}
          <div className="xl:w-1/3 lg:w-1/2 flex flex-col justify-center">
            {/* 2xl:px-52 2xl:pt-24 */}
            <div className={`mt-36 relative md:px-10 lg:px-0 `}>
              <Image
                src="/assets/borders/border-news.png"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2  w-[28rem]"
                alt="Image"
                width={200}
                height={200}
              />
              <h1 className="text-white text-center text-3xl mb-4">
                Notification
              </h1>
              <div className=" p-2 mb-8 flex flex-col justify-center">
                <div className="">
                  <div className="relative">
                    <Image
                      src="/assets/news-box.svg"
                      className="mx-auto "
                      alt="Image"
                      width={300}
                      height={300}
                    />
                    <Image
                      src="/assets/zachery/zach-back.png"
                      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
                      alt="Image"
                      width={60}
                      height={60}
                    />
                    <h1 className="text-white text-base absolute bottom-3 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap">
                      Team List
                    </h1>
                  </div>
                </div>

                <Link
                  href="/team"
                  className="pt-16 flex w-60 mx-auto hover:translate-y-[-5px] transition-transform duration-300"
                >
                  <Image
                    src="/assets/buttons/btn-default-blue.svg"
                    className="absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2 "
                    alt="Image"
                    width={300}
                    height={300}
                  />
                  <h1 className="text-white absolute bottom-1/5 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl">
                    Team List
                  </h1>
                </Link>
              </div>
            </div>

            <Link
              href="/badge"
              className="py-9 relative flex w-80 mx-auto mt-28 hover:translate-y-[-5px] transition-transform duration-300"
            >
              <Image
                src="/assets/buttons/btn-yellow.svg"
                className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 "
                alt="Image"
                width={500}
                height={530}
              />
              <h1 className="text-white absolute top-7 left-1/2 -translate-y-1/2 -translate-x-1/2 text-2xl whitespace-nowrap">
                Character Selection
              </h1>
            </Link>
          </div>
        </div>
        <Footer />
      </div>
    </main>
  );
}
