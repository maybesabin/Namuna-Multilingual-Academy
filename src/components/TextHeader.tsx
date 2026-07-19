
const TextHeader = ({
    caption,
    title,
    position = "left"
}: { caption: string; title: string; position?: "left" | "right" | "center" }) => {
    return (
        <div className={`flex flex-col items-${position} text-${position} w-full`}>
            <h4 className="tracking-wider font-semibold text-blue-800 md:text-base text-sm uppercase mb-2">
                {caption}
            </h4>
            <div className="w-fit">
                <h2 className="font-serif xl:text-5xl md:text-4xl text-3xl font-bold">
                    {title}
                </h2>
                <div className={`h-1 w-1/5 bg-blue-800 mt-2 ${position === "right" ? "lg:ml-auto" : position === "center" ? "mx-auto" : ""}`}></div>
            </div>
        </div>
    )
}

export default TextHeader