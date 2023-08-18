import Image from "next/image";
import Link from "next/link";

import styles from "@/public/styles/gallery.module.css";

export default function EventList({ isMobile, img, title, id, active, setActive }) {
  return (
    <>
      {isMobile ? (
        <div className="flex bg-[#00072330] ">
          <Image src={img} className="p-4" alt="Image" width={150} height={150} quality={100} />
          <div className=" mr-4 my-4 w-3/5">
            <h2 className="text-2xl">{title}</h2>
            <h2 className="text-md">Mentoring UMN 2023</h2>
            <div className="w-full h-px bg-white"></div>
            <div className="flex justify-around mt-2">
              <Link href={`/gallery/${id}`}>
                <button className={`${styles.bluebtn} py-3 px-10 align-middle`}>Foto</button>
              </Link>
              <Link href={`/gallery/${id}`}>
                <button className={`${styles.bluebtn} py-3 px-10 align-middle`}>Video</button>
              </Link>
            </div>
          </div>
        </div>
      ) : (
        <li className="my-2">
          <button
            className={`text-xl py-8 pl-14 pr-8 bg-[#172546] flex justify-between align-middle w-full ${
              active && styles.active
            }`}
            onClick={() => setActive(id)}
          >
            <Image src="/assets/buttons/btn-play.svg" className="" alt={title} quality={100} width={18} height={18} />
            <h5>{title}</h5>
          </button>
        </li>
      )}
    </>
  );
}
