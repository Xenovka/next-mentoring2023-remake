import Image from "next/image";

import { motion } from "framer-motion";

import Footer from "@/components/footer";

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
            Page Title
          </h1>
        </div>
        <div className="my-auto w-28">
          <Image src="/assets/mentoring-logo.svg" className="mx-auto my-auto" alt="Image" width={70} height={70} />
        </div>
        <div className="my-auto w-28">
          <Image src="/assets/icon-gear.png" className="mx-auto my-auto" alt="Image" width={45} height={45} />
        </div>
      </div>
      <div className="flex justify-center mt-20 py-2 mx-auto gap-2">
        <div className="relative w-64">
          <Image
            src="/assets/button/btn-news-mobile.svg"
            className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
            alt="Image"
            width={300}
            height={200}
          />
          <div className="flex justify-center absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
            <h1 className="text-white whitespace-nowrap text-xl my-auto font-bold">News</h1>
            <div className="w-0.5 bg-white ml-5 mr-6"></div>
            <div className="my-auto">
              <h1 className="text-white whitespace-nowrap text-xl font-bold">Coming Soon</h1>
              <h1 className="text-white whitespace-nowrap text-md">NA</h1>
            </div>
          </div>
        </div>

        <div className="relative w-24">
          <Image
            src="/assets/button/btn-faq-mobile.svg"
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
              ease: "easeInOut"
            }
          }}
        >
          <Image src="/assets/background/bg-zach-mobile.png" className="mx-auto" alt="Image" width={400} height={400} />
        </motion.div>

        <div className="relative mt-8">
          <Image
            src="/assets/button/btn-comingsoon-mobile.svg"
            className="absolute -z-10 left-1/2 -translate-x-1/2 -translate-y-[44%]"
            alt="Image"
            width={300}
            height={200}
          />
          <h1 className="text-white absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 whitespace-nowrap text-2xl font-bold">
            Coming Soon
          </h1>
        </div>
      </div>

      {/* 3 button */}
      <div className="flex justify-center gap-2 mt-36">
        <div className="relative">
          <div className="relative w-28 mx-auto py-8">
            <Image
              src="/assets/button/btn-gallery-mobile.svg"
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
        <div className="relative">
          <div className="relative w-28 mx-auto py-8">
            <Image
              src="/assets/button/btn-contact-mobile.svg"
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
        <div className="relative">
          <div className="relative w-28 mx-auto py-8">
            <Image
              src="/assets/button/btn-about-mobile.svg"
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
      </div>

      <Footer />
    </div>
  );
}
