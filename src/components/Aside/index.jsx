import HomeIcon from "@/icons/home";
import Btn from "./btn";
import Boy from "@/icons/boy";
import Resume from "@/icons/resume";
import Course from "@/icons/course";
import Contact from "@/icons/contact";
import Heart from "@/icons/heart";
import Copy from "@/icons/cpoy";
import Instagram from "@/icons/instagram";
import Telegram from "@/icons/telegram";
import Whatsapp from "@/icons/Whtasapp";

const Aside = ({ setContent, content }) => {
    return (
        <div className="w-full h-full bg-gray-600 p-4">
            <div className="w-full h-[150px] bg-purple-600 rounded-lg"><img src="/images/mine.png" alt="" className="w-full h-full rounded-lg" /></div>

            <div className="w-full text-white flex flex-col items-center mt-4">
                <h1>(( محمد پورحسین ))</h1>
                <h1>برنامه نویس فرانت اند</h1>

                <div className="w-full h-8 flex justify-center items-center gap-x-4 my-4">
                    <div className="w-6 h-6"><Instagram /></div>
                    <div className="w-6 h-6"><Telegram /></div>
                    <div className="w-6 h-6"><Whatsapp /></div>
                    <div className="w-6 h-6"><img src="/images/eitta.png" alt="eitta" className="rounded-md" /></div>
                </div>
            </div>

            <div className="w-full border-t-[1px] border-t-white py-4 flex flex-col gap-y-4">
                <Btn setContent={setContent} icon={<HomeIcon />} contentType={"home"} content={content} title={"صفحه اصلی"} />
                <Btn setContent={setContent} icon={<Boy />} contentType={"aboutMe"} content={content} title={"درباره من"} />
                <Btn setContent={setContent} icon={<Resume />} contentType={"resume"} content={content} title={"رزومه من"} />
                <Btn setContent={setContent} icon={<Course />} contentType={"course"} content={content} title={"دوره های من"} />
                <Btn setContent={setContent} icon={<Contact />} contentType={"contactMe"} content={content} title={"تماس با من"} />
            </div>

            <div className="w-full flex flex-col gap-y-4 items-center">
                <div className="flex justify-center items-center gap-x-2">
                    <span className="text-white">طراحی شده با</span>
                    <div className="w-6 h-6 text-red-600"><Heart /></div>
                </div>

                <div className="flex justify-center items-center gap-x-2">
                    <span className="text-white">کپی رایت 1403</span>
                    <div className="w-6 h-6 text-white"><Copy /></div>
                </div>
            </div>
        </div>
    );
}

export default Aside;