"use client";

import Desktop from "./Desktop";
import Mobile from "./Mobile";
import { GALLERY } from "../../_data/dummy";
import useCheckMobileScreen from "../../_hooks/useCheckMobileScreen";

// export const getServerSideProps = async ({ query }) => {
//   const res = GALLERY.find((v) => v.id === Number(query.id))?.photos;
//   if (!res) {
//     return {
//       notFound: true
//     };
//   }
//   return {
//     props: {
//       photos: res
//     }
//   };
// };

export default function PhotoGallery({ photos }) {
  const isMobile = useCheckMobileScreen();
  return <>{isMobile ? <Mobile gallery={GALLERY} /> : <Desktop gallery={GALLERY} />}</>;
}
