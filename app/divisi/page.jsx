import Footer from "@/components/footer";
import DivisionContent from "@/app/divisi/_components/division-content";
import DivisionSwiper from "@/app/divisi/_components/division-swiper";
import DivisionHeader from "@/app/divisi/components/division-header";

import { DivisionContextProvider } from "@/app/divisi/_context/division-context";

async function getData() {
  const response = await fetch(process.env.NEXT_PUBLIC_API_URL);
  const body = response.json();

  return body;
}

// Fetch data from API asycronously
const divisionData = await getData();

export default async function Divisi() {
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
