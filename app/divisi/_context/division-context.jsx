"use client";

import { createContext, useState, useEffect } from "react";

// Creating context
export const DivisionContext = createContext();

export function DivisionContextProvider({ children }) {
    const [currentIndex, setCurrentIndex] = useState(0);

    return (
        // Providing context
        <DivisionContext.Provider value={{ currentIndex, setCurrentIndex }}>{children}</DivisionContext.Provider>
    );
}
