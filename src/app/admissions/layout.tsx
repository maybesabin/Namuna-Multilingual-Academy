import Hero from "@/components/Hero"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Hero
                title="About Us"
                description="Discover our story, our mission, and what sets us apart. We strive to create value and bring ideas to life through everything we do."
            />
            <div className="w-full flex items-center justify-center mt-12">
                <div className="xl:w-340 w-full md:px-6 px-3 flex flex-col items-center lg:gap-36 gap-12">
                    {children}
                </div>
            </div>
        </>
    )
}

export default layout