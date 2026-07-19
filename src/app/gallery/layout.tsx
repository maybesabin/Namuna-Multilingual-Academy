import Container from "@/components/Container"
import Hero from "@/components/Hero"
import { ReactNode } from "react"

const GalleryLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Hero
                title="Gallery"
                description="Explore memorable moments from our classrooms, events, and student life that showcase the spirit of our school."
            />

            <Container>
                {children}
            </Container>
        </>
    )
}

export default GalleryLayout