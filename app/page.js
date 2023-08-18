"use client";

import Image from "next/image";
import Link from "next/link";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

import StartDesktop from "@/app/_start/start_desktop";
import StartMobile from "@/app/_start/start_mobile";

export default function Home() {
  const [isEntered, setIsEntered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
    } else {
      setIsMobile(false);
    }
  }, []);

  if (isEntered) {
    if (isMobile) {
      return <StartMobile />;
    } else {
      return <StartDesktop />;
    }
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-between p-24">
      <motion.div
        initial={{ y: 0 }}
        animate={{ y: [-10, 30, -10], rotate: [0, 360] }}
        transition={{
          y: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          rotate: {
            duration: 1,
            repeatDelay: 2,
            repeat: Infinity,
            ease: "easeInOut",
          },
        }}
      >
        <div className="w-[65dvw] h-[65dvw] md:w-[35dvw] md:h-[35dvw] relative block mx-auto pt-8 md:pt-12">
          <Image src="/assets/zachery/zach-circle.png" alt="" fill />
        </div>
      </motion.div>
      <div>
        <Link
          href={""}
          className="box box-enter py-6 px-10 flex justify-center items-center cursor-pointer hover:-translate-y-2 transition-transform active:translate-y-0 ease-in-out text-xl font-bold"
          onClick={() => setIsEntered(true)}
        >
          BEGIN THE JOURNEY
        </Link>
      </div>
    </div>
  );
}
