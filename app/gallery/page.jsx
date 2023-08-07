"use client";

import Mobile from "./_components/gallery-mobile";
import Desktop from "./_components/gallery-desktop";
import useCheckMobileScreen from "./_hooks/useCheckMobileScreen";

export default function GallerySelect() {
  const isMobile = useCheckMobileScreen();
  return <>{isMobile ? <Mobile /> : <Desktop />}</>;
}
