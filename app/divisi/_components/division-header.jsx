import Link from "next/link";
import Image from "next/image";

export default function DivisionHeader() {
    return (
        <div className="mt-14 max-sm:mr-14 align-middle flex justify-center max-sm:justify-end relative">
            <Link href="/">
                <Image src="/assets/mentoring-logo.svg" width={94} height={74} alt="logo" priority />
            </Link>
            <div className="max-sm:w-[130px] w-[180px] h-6 absolute top-[15%] left-[12%]">
                <Link href="/">
                    <div className="w-full h-full relative">
                        <div className="btn-back-border"></div>
                        <p className="text-white max-sm:text-xl text-2xl font-bold italic absolute -top-1/2 left-[10%]">
                            Character
                        </p>
                    </div>
                </Link>
            </div>
        </div>
    );
}
