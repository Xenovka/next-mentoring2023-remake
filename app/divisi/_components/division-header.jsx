import Link from "next/link";
import Image from "next/image";

export default function DivisionHeader() {
  return (
    <div className="w-auto h-auto mt-14 align-middle flex justify-center relative">
      <Link href="/">
        <Image src="/assets/mentoring-logo.svg" width={94} height={74} alt="logo" priority />
      </Link>
      <div className="w-[180px] h-6 absolute top-[15%] left-[12%]">
        <Link href="/">
          <div className="w-full h-full relative">
            <div className="btn-back-border"></div>
            <p className="text-white text-2xl font-bold italic absolute -top-1/2 left-[10%]">Character</p>
          </div>
        </Link>
      </div>
    </div>
  );
}
