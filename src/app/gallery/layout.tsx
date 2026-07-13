import { ReactNode } from "react"

const GalleryLayout = ({ children }: { children: ReactNode }) => {
    return (
        <div className="w-full flex items-center justify-center mt-12">
            <div className="xl:w-340 w-full md:px-6 px-3 flex flex-col items-start gap-6">
                {children}
            </div>
        </div>
    )
}

export default GalleryLayout