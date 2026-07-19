import Container from "@/components/Container"
import Hero from "@/components/Hero"
import { ReactNode } from "react"

const AboutLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>
            <Hero
                title="About Us"
                description="Discover our story, our mission, and what sets us apart. We strive to create value and bring ideas to life through everything we do."
            />

            <Container>
                {children}
            </Container>
        </>
    )
}

export default AboutLayout