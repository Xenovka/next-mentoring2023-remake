import Footer from "@/components/footer";
import DivisionContent from "@/app/divisi/_components/div-content";
import DivisionSwiper from "@/app/divisi/_components/div-swiper";
import DivisionHeader from "./_components/div-header";

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
