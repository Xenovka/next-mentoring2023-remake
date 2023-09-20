"use client";

import { useEffect, useState } from "react";
import useCheckMobileScreen from "../../_hooks/useCheckMobileScreen";

import Mobile from "./Mobile";
import Desktop from "./Desktop";
import { GALLERY } from "../../_data/gallery";

// export const getServerSideProps = async ({ query }) => {
//   const res = GALLERY.find((v) => v.id === Number(query.id))?.videos;
//   if (!res) {
//     return {
//       notFound: true
//     };
//   }
//   return {
//     props: {
//       videos: res
//     }
//   };
// };

export default function VideoGallery({ videos }) {
  const [hasMounted, setHasMounted] = useState(false);
  const isMobile = useCheckMobileScreen();

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) {
    return null;
  }

  return <>{isMobile ? <Mobile gallery={GALLERY} /> : <Desktop gallery={GALLERY} />}</>;
}
