import Footer from "@/components/footer";
import DivisionContent from "@/app/divisi/_components/division-content";
import DivisionSwiper from "@/app/divisi/_components/division-swiper";
import DivisionHeader from "@/app/divisi/_components/division-header";

import { DivisionContextProvider } from "@/app/divisi/_context/division-context";
import divisi from "@/model/divisi.json"

export default async function Divisi() {
  // async function getData() {
  //   const response = await fetch(`${ENDPOINT}/api`, {
  //     method: "GET"
  //   });

  //   return await response.json();
  // }

  const divisionData = divisi

  return (
    <>
      {/* Wrap division with context provider so the the children components can access the context value */}
      <DivisionContextProvider>
        <DivisionHeader />
        {divisionData && (
          <div>
            <DivisionSwiper divisionData={divisionData.data} />
            <DivisionContent divisionData={divisionData.data} />
            <Footer />
          </div>
        )}
      </DivisionContextProvider>
    </>
  );
}
