import Image from "next/image";
import EventList from "./gallery-eventlist";
import Footer from "@/components/footer";
import { GALLERY } from "../_data/gallery";

export default function Mobile() {
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
            Gallery
          </h1>
        </div>
        <div className="my-auto w-28">
          <Image src="/assets/mentoring-logo.svg" className="mx-auto my-auto" alt="Image" width={70} height={70} />
        </div>
        <div className="my-auto w-28">
          <Image src="/assets/icons/icon-gear.png" className="mx-auto my-auto" alt="Image" width={45} height={45} />
        </div>
      </div>

      <div className="flex flex-col justify-center mt-5 text-white max-w-md mx-auto">
        {GALLERY.map((item, index) => (
          <EventList
            isMobile={true}
            title={item.title}
            img={item.image}
            id={item.id}
            key={index}
          />
        ))}
        {/* <EventList isMobile={true} img="/assets/squareholder.png" title="Pembekalan 1" id="1" key={1} />
        <EventList isMobile={true} img="/assets/squareholder.png" title="Pembekalan 1" id="1" key={1} />
        <EventList isMobile={true} img="/assets/squareholder.png" title="Pembekalan 1" id="1" key={1} /> */}
      </div>

      <Footer />
    </div>
  );
}
