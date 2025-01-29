"use client";
import { useEffect, useState } from "react";
import Aside from "../aside";
import Home from "../pages/home";
import AboutMe from "../pages/aboutMe";
import ContactMe from "../pages/contactMe";
import Resume from "../pages/resume";
import Course from "../pages/course";
import Hamburger from "@/icons/hamburger";
import Close from "@/icons/close";

const MainPages = () => {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [content, setContent] = useState("home");
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
            <div className={`w-[30%] h-full hidden md:block`}>
                <Aside setContent={setContent} content={content} />
            </div>

            <div onClick={() => setOpenSidebar(false)} className={`z-50 w-full h-full block md:hidden bg-[rgba(0,0,0,0.4)] absolute ${openSidebar ? "right-0" : "right-[-100%]"} top-0 bottom-0 transition-all duration-100`}>
                <div onClick={(e) => e.stopPropagation()} className="w-[70%] h-full absolute">
                    <Aside setContent={setContent} content={content} />
                    <div onClick={() => setOpenSidebar(false)} className="absolute top-2 -left-10 w-10 h-10 bg-white text-purple-700 rounded-full"><Close /></div>
                </div>
            </div>

            <div onClick={() => setOpenSidebar(true)} className="absolute top-4 right-4 w-10 h-10 bg-orange-600 rounded-full p-2 block md:hidden"><Hamburger /></div>

            <div className="w-full h-full">
                {details}
            </div>
        </div>
    );
}

export default MainPages;