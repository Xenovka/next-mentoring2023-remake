"use client";

import Image from "next/image";
import { useState } from "react";
import styles from "@/public/styles/gallery.module.css";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Footer from "@/components/footer";

export default function PhotoDesktop({ gallery }) {
  const imagesPerPage = 15; // Number of images to display per page
  const [currentPage, setCurrentPage] = useState(1);

  // Calculate the index range for the images to display on the current page
  const lastIndex = currentPage * imagesPerPage;
  const firstIndex = lastIndex - imagesPerPage;
  const currentGallery = gallery.slice(firstIndex, lastIndex);

  // Change the current page
  const handlePageChange = (pageNumber) => setCurrentPage(pageNumber);
  const path = usePathname();
  const id = path.split("/")[2];
  return (
    <div className="w-full h-full md:overflow-x-hidden hidescroll ">
      <Image
        src="/assets/mentoring-logo.svg"
        className="absolute top-16 left-1/2 -translate-x-1/2 -translate-y-1/2 z-10"
        alt="Logo"
        quality={100}
        width={100}
        height={100}
      />
      <div className=" sm:px-4 py-8 mt-28 mx-24">
        <div className="flex gap-10">
          <Link href={"/gallery"}>
            <button className="relative w-52">
              <Image src="/assets/pagetitle-mobile.svg" alt="Image" width={400} height={400} />
              <h1 className="absolute bottom-1/2 left-4 text-white italic text-2xl">Gallery</h1>
            </button>
          </Link>
        </div>
        {/* navigation */}
        <div className="flex justify-center gap-10 ">
          <Link className="relative w-62" href={`/gallery/${id}/photo`}>
            <Image src="/assets/placeholder-long.svg" alt="Image" width={400} height={400} />
            <h1 className="absolute bottom-1/2 right-6 text-white italic text-2xl">Photo</h1>
          </Link>
          <Link className="relative w-62" href={`/gallery/${id}/video`}>
            <Image src="/assets/placeholder-long.svg" alt="Image" width={400} height={400} className="scale-x-[-1]" />
            <h1 className="absolute bottom-1/2 left-4 text-white italic text-2xl">Video</h1>
          </Link>
        </div>

        {/* blue rectangle */}
        <div className="relative w-[80vw] mx-auto">
          <div className="grid grid-cols-5 gap-6 justify-center my-5">
            {currentGallery[id].photos.map((image, index) => (
              <div className="w-[15dvw] h-[20dvh] aspect-[4/3] relative" key={index}>
                <Image src={image} className="mx-auto object-center object-contain" alt="Image" fill quality={100} />
              </div>
            ))}
          </div>

          {/* pagination */}
          <div className="flex justify-center items-center">
            <nav className="inline-flex mt-4 text-[calc(1vw+0.15rem)]">
              {currentPage > 1 && (
                <a
                  href="#"
                  className="pr-3 py-1 rounded-l-md text-white"
                  onClick={() => handlePageChange(currentPage - 1)}
                >
                  <div className="h-8 w-8 relative scale-x-[-1]">
                    <Image src="/assets/panah.svg" alt="arrow" fill />
                  </div>
                </a>
              )}

              {Array.from({ length: Math.ceil(gallery.length / imagesPerPage) }, (_, i) => (
                <a
                  href="#"
                  key={i}
                  className={`px-3 py-1 ${currentPage === i + 1 ? "text-blue-300 font-bold" : "text-white"}`}
                  onClick={() => handlePageChange(i + 1)}
                >
                  {i + 1}
                </a>
              ))}

              {currentPage < Math.ceil(gallery.length / imagesPerPage) && (
                <a
                  href="#"
                  className="pr-3 py-1 rounded-r-md text-white"
                  onClick={() => handlePageChange(currentPage + 1)}
                >
                  <div className="h-8 w-8 relative">
                    <Image src="/assets/panah.svg" fill alt="arrow icon" />
                  </div>
                </a>
              )}
            </nav>
          </div>
        </div>
        <div className="">
          <Link href={`/gallery`}>
            <button className={`${styles.yellowbtn} flex flex-col justify-end place-self-end float-right mt-3`}>
              <span className=" text-white text-center text-xl px-24 py-3">Back</span>
            </button>
          </Link>
        </div>
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
