const Btn = ({ setContent, contentType, title, content, icon }) => {
    return (
        <div
            onClick={() => {
                setContent(contentType);
            }}
            className={`w-full h-10 flex justify-center items-center gap-x-2 cursor-pointer bg-[rgba(255,255,255,0.3)] rounded-md ${contentType == content ? "text-purple-700" : "text-white hover:text-purple-700"} transition-all duration-300`}
        >
            <div className="w-6 h-6">{icon}</div>
            <span className="">{title}</span>
        </div>
    );
}

export default Btn;