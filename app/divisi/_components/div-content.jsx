import { motion } from "framer-motion";

import Link from "next/link";
import Image from "next/image";

export default function DivisionContent({ division, boxStyles }) {
  // Framer Motion Variant Objects
  const floatingImage = {
    hidden: { scale: 0, y: -10 },
    visible: {
      scale: 1,
      y: [-10, 30, -10],
      transition: {
        y: {
          duration: 2,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut"
        }
      }
    }
  };

  const scaleText = {
    hidden: { scale: 0 },
    visible: { scale: 1, transition: { duration: 0.5 } }
  };

  return (
    <div className="w-fit h-auto mx-auto mt-11 grid grid-cols-[305px,_515px,_419px] gap-6 grid-rows-[325px,_100px]">
      <div className="row-[1_/span_2] col-[1_/span_1]">
        <div style={boxStyles} className="box box-crew text-white flex flex-col items-center h-full">
          <h1 className="text-2xl font-bold mt-6">Crew</h1>
          <div className="crew-divider"></div>
          <div className="text-center w-full h-full overflow-y-scroll no-scrollbar pb-8 px-8">
            <motion.ul initial="hidden" animate="visible" variants={scaleText} key={division.key}>
              {division &&
                division.members.map((item, index) => (
                  <li className="my-5" key={index}>
                    {item}
                  </li>
                ))}
            </motion.ul>
          </div>
        </div>
      </div>
      <div className="row-[1_/span_2] col-[2_/_3]">
        <div style={boxStyles} className="box box-preview text-center text-white flex flex-col items-center">
          <h1 className="text-2xl font-bold p-6">Character Preview</h1>
          {division && (
            <motion.div initial="hidden" animate="visible" variants={floatingImage} key={division.key}>
              <Image
                style={{ WebkitUserDrag: "none" }}
                src={division.image}
                alt={division.name}
                width={300}
                height={300}
              />
            </motion.div>
          )}
        </div>
      </div>
      <div className=" row-[1_/span_1] col-[3_/span_1]">
        {division && (
          <div
            style={boxStyles}
            className="box box-description text-white text-center flex flex-col items-center justify-center h-full p-6"
          >
            <motion.div initial="hidden" animate="visible" variants={scaleText} key={division.key}>
              <h1 className="text-2xl font-bold">{division.name}</h1>
              <p className="mt-4 text-base">{division.description}</p>
            </motion.div>
          </div>
        )}
      </div>
      <div className="box box-back row-[2_/span_1] col-[3_/span_1] py-8 px-6 cursor-pointer text-center">
        <Link href={"/"} className="text-2xl text-white font-bold">
          Back
        </Link>
      </div>
    </div>
  );
}
