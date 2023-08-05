"use client";

import { createContext, useState } from "react";

export const DivisionContext = createContext();

export function DivisionContextProvider({ children }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  return <DivisionContext.Provider value={{ currentIndex, setCurrentIndex }}>{children}</DivisionContext.Provider>;
}
