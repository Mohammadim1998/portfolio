"use client";
import { useEffect, useState } from "react";
import Close from "@/icons/close";
import Hamburger from "@/icons/hamburger";
import Home from "../pages/home";
import Aside from "../aside";
import AboutMe from "../pages/aboutMe";
import Resume from "../pages/resume";
import Course from "../pages/course";
import ContactMe from "../pages/contactMe";
import { useAppContext } from "../../../context/context";

const MainPages = () => {
    const { content, openSidebar, setOpenSidebar } = useAppContext();
    const [details, setDetails] = useState();

    useEffect(() => {
        if (content === "home") {
            setDetails(<Home />)
        } else if (content === "aboutMe") {
            setDetails(<AboutMe />)
        } else if (content === "resume") {
            setDetails(<Resume />)
        } else if (content === "course") {
            setDetails(<Course />)
        } else if (content === "contactMe") {
            setDetails(<ContactMe />)
        }
    }, [content]);

    return (
        <div className="relative w-full h-full flex gap-x-1">
            <div onClick={(e) => e.stopPropagation()} className={`shrink-0 z-50 relative h-full ${openSidebar ? "max-md:w-[70%] w-[30%]" : "max-md:w-0 w-[30%] overflow-x-hidden"} `}>
                <Aside />
                <div onClick={() => setOpenSidebar(false)} className="absolute max-md:block hidden top-2 -left-10 w-10 h-10 bg-white text-purple-700 rounded-full"><Close /></div>
            </div>

            <div onClick={() => setOpenSidebar(false)} className={`z-40 w-full max-md:block hidden h-full max-md:bg-[rgba(0,0,0,0.4)] absolute ${openSidebar ? "right-0" : "right-[-100%]"} top-0 bottom-0 transition-all duration-100`}>
            </div>

            {/* <div className={`w-[30%] h-full hidden md:flex`}>
                <Aside />
            </div> */}

            <div onClick={() => setOpenSidebar(true)} className="absolute top-4 right-4 w-10 h-10 bg-orange-600 rounded-full p-2 block md:hidden"><Hamburger /></div>

            <div className="w-full">
                {details}
            </div>
        </div>
    );
}

export default MainPages;