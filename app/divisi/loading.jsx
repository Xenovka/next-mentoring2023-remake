import Image from "next/image";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-screen w-screen">
      <Image src="/assets/zachery/zach-wave.gif" alt="Zach Loading Screen" height={426} width={426} />
      <h3 className="text-[40px] text-center font-bold italic text-white -mt-7">Now Loading ...</h3>
      <p className="text-center text-white font-bold italic">Pro-Tip: A journey is about to begin. Prepare yourself!</p>
    </div>
  );
}
