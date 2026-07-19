import Container from "@/components/Container"
import Hero from "@/components/Hero"

const layout = ({ children }: { children: React.ReactNode }) => {
    return (
        <>
            <Hero
                title="Admissions"
                description="Take the first step toward a bright future. Explore our admission process, requirements, and apply with ease."
            />

            <Container className="items-start">
                {children}
            </Container>
        </>
    )
}

export default layout