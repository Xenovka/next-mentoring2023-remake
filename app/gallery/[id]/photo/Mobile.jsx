"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";
import Link from "next/link";

export default function Mobile({ gallery }) {
  const path = usePathname();
  const id = path.split("/")[2];

  return (
    <div className="sm:px-4 py-8 w-full h-screen">
      <div className="flex justify-center mx-auto gap-8">
        <div className="my-auto w-24 relative">
          <Link href={"/gallery"}>
            <Image
              src="/assets/pagetitle-mobile.svg"
              className="absolute -z-10 top-2 left-1/2 -translate-x-1/2 -translate-y-1/2 "
              alt="Image"
              width={300}
              height={300}
            />
            <h1 className="text-white whitespace-nowrap absolute left-[45%] -translate-x-1/2 -translate-y-1/2 text-md">
              Gallery
            </h1>
          </Link>
        </div>
        <div className="my-auto w-28">
          <Image src="/assets/mentoring-logo.svg" className="mx-auto my-auto" alt="Image" width={70} height={70} />
        </div>
        <div className="my-auto w-28">
          <Image src="/assets/icons/icon-gear.png" className="mx-auto my-auto" alt="Image" width={45} height={45} />
        </div>
      </div>
      <div className="flex justify-center mx-auto gap-4 mt-14">
        <Link className="relative w-40" href={`/gallery/${id}/photo`}>
          <Image src="/assets/placeholder-long.svg" alt="Image" width={400} height={400} />
          <h1 className="absolute bottom-1/3 right-6 text-white italic text-xl">Photo</h1>
        </Link>
        <Link className="relative w-40" href={`/gallery/${id}/video`}>
          <Image src="/assets/placeholder-long.svg" alt="Image" width={400} height={400} className="scale-x-[-1]" />
          <h1 className="absolute bottom-1/3 left-4 text-white italic text-xl">Video</h1>
        </Link>
      </div>
      <div className="flex flex-col justify-center  text-white  mx-auto">
        <div className="flex flex-wrap gap-4 justify-center my-5 flex-grow">
          {gallery[Number(id)].photos.map((image, index) => (
            // <div className="w-[15dvw]  aspect-[4/3] relative" key={index}>
            <div className="relative md:w-72 md:h-44 w-52 h-36" key={index}>
              <Image src={image} className="mx-auto object-center object-contain" alt="Image" fill quality={100} />
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-10 pb-4">
        <h1 className="text-sm italic text-[#9BCDEC] text-center">copyright © 2023 Mentoring UMN</h1>
      </div>
    </div>
  );
}
