"use client";
import { useState } from "react";
import { AppContext } from "./context"

export const ContextProvider = ({ children }) => {
    const [content, setContent] = useState("home");
    const [openSidebar, setOpenSidebar] = useState(false);

    return (
        <AppContext.Provider value={{ content, setContent,openSidebar,setOpenSidebar }}>
            {children}
        </AppContext.Provider>
    )
}