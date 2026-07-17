import Hero from "@/components/Hero"
import { ReactNode } from "react"

const GalleryLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Hero
                title="Gallery"
                description="Explore memorable moments from our classrooms, events, and student life that showcase the spirit of our school."
            />

            <div className="w-full flex items-center justify-center">
                <div className="xl:w-340 w-full md:px-6 px-3 flex flex-col items-start gap-6">
                    {children}
                </div>
            </div>
        </>
    )
}

export default GalleryLayout