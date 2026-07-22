import Container from "@/components/Container"
import Hero from "@/components/Hero"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Hero
                title="Academics"
                description="Discover our engaging curriculum, dedicated teachers, and learning approach designed to help every student grow with confidence and curiosity."
            />

            <Container className="items-start">
                {children}
            </Container>
        </>
    )
}

export default layout