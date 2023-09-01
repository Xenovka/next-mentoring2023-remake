import Image from "next/image";
import Link from "next/link";

import { motion } from "framer-motion";

import Footer from "@/components/footer";
import Tooltip from "@/components/Tooltip";

export default function StartMobile() {
  return (
    <div className="sm:px-4 py-8 w-full h-screen">
      <div className="flex justify-center mx-auto gap-8">
        <div className="my-auto w-24 relative">
          <Image
            src="/assets/pagetitle-mobile.svg"
            className="absolute -z-10 top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
            alt="Image"
            width={300}
            height={300}
          />
          <h1 className="text-white whitespace-nowrap absolute left-[45%] -translate-x-1/2 -translate-y-1/2 text-md">
            Home
          </h1>
        </div>
        <div className="my-auto w-28">
          <Image
            src="/assets/mentoring-logo.svg"
            className="mx-auto my-auto"
            alt="Image"
            width={70}
            height={70}
          />
        </div>
        <div className="my-auto w-28">
          <Image
            src="/assets/icons/icon-gear.png"
            className="mx-auto my-auto"
            alt="Image"
            width={45}
            height={45}
          />
        </div>
      </div>
      <div className="flex justify-center mt-20 py-2 mx-auto gap-2">
        <Link
          href="/team"
          className="hover:translate-y-[-5px] transition-transform duration-300 min-h-20 min-w-fit mb-[-10vh]"
        >
          <div className="relative w-64">
            <Image
              src="/assets/buttons/btn-news-mobile.svg"
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Image"
              width={300}
              height={200}
            />
            <div className="flex justify-center absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
              <h1 className="text-white whitespace-nowrap text-xl my-auto font-bold">
                News
              </h1>
              <div className="w-0.5 bg-white ml-5 mr-6"></div>
              <div className="my-auto">
                <h1 className="text-white whitespace-nowrap text-xl font-bold">
                  Team List
                </h1>
                <h1 className="text-white whitespace-nowrap text-md"></h1>
              </div>
            </div>
          </div>
        </Link>

        <Link
          href="/faq"
          className="hover:translate-y-[-5px] transition-transform duration-300 min-h-20 min-w-fit mb-[-10vh]"
        >
          <div className="relative w-24">
            <Image
              src="/assets/buttons/btn-faq-mobile.svg"
              className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
              alt="Image"
              width={100}
              height={100}
            />
            <Image
              src="/assets/zachery/zach-faq.svg"
              className="absolute -z-10 -top-2 left-1/2 -translate-x-1/2 -translate-y-full -scale-x-100"
              alt="Image"
              width={40}
              height={40}
            />
            <h1 className="text-white whitespace-nowrap text-lg my-auto text-center absolute -z-10 left-1/2 -translate-x-1/2">
              FAQ
            </h1>
          </div>
        </Link>
      </div>

      <div className="flex flex-col justify-center mt-5">
        <motion.div
          initial={{ y: 0 }}
          animate={{
            y: [-10, 10, -10],
            transition: {
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              ease: "easeInOut",
            },
          }}
        >
          <Image
            src="/assets/backgrounds/bg-zach-mobile.png"
            className="mx-auto"
            alt="Image"
            width={400}
            height={400}
          />
        </motion.div>
        <div className="relative mt-8 hover:translate-y-[-5px] transition-transform duration-300">
          <Tooltip message="Only Available in Desktop">
            <Image
              src="/assets/buttons/btn-comingsoon-mobile.svg"
              className="absolute -z-10 left-1/2 -translate-x-1/2 -translate-y-[44%]"
              alt="Image"
              width={300}
              height={200}
            />
            <h1 className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-2xl font-bold">
              Character Selection
            </h1>
          </Tooltip>
        </div>
      </div>

      {/* 3 button */}
      <div className="flex justify-center gap-2 mt-36">
        <Link
          href="/gallery"
          className="hover:translate-y-[-5px] transition-transform duration-300"
        >
          <div className="relative">
            <div className="relative w-28 mx-auto py-8">
              <Image
                src="/assets/buttons/btn-gallery-mobile.svg"
                className="absolute -z-10 top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                alt="Image"
                width={300}
                height={300}
              />
              <h1 className="text-white text-center absolute bottom-3 left-1/2 -translate-x-1/2 text-lg font-bold">
                Gallery
              </h1>
            </div>
          </div>
        </Link>
        <Link
          href="/contact-us"
          className="hover:translate-y-[-5px] transition-transform duration-300"
        >
          <div className="relative">
            <div className="relative w-28 mx-auto py-8">
              <Image
                src="/assets/buttons/btn-contact-mobile.svg"
                className="absolute -z-10 top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                alt="Image"
                width={300}
                height={300}
              />
              <h1 className="text-white text-center absolute bottom-0 left-1/2 -translate-x-1/2 text-lg font-bold">
                Contact Us
              </h1>
            </div>
          </div>
        </Link>
        <Link
          href="/about-us"
          className="hover:translate-y-[-5px] transition-transform duration-300"
        >
          <div className="relative">
            <div className="relative w-28 mx-auto py-8">
              <Image
                src="/assets/buttons/btn-about-mobile.svg"
                className="absolute -z-10 top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
                alt="Image"
                width={300}
                height={300}
              />
              <h1 className="text-white text-center absolute bottom-0 left-1/2 -translate-x-1/2 text-lg font-bold">
                About Us
              </h1>
            </div>
          </div>
        </Link>
      </div>

      <Footer />
    </div>
  );
}
