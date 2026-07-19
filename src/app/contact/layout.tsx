import Container from "@/components/Container"
import Hero from "@/components/Hero"
import { ReactNode } from "react"

const ContactLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>

            <Hero
                title="Contact Us"
                description="Get in touch with us for questions, support, or feedback. We're here to help and look forward to hearing from you."
            />

            <Container className="items-start lg:gap-6 gap-6">
                {children}
            </Container>
        </>
    )
}

export default ContactLayout