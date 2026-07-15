import Hero from "@/components/Hero"
import { ReactNode } from "react"

const ContactLayout = ({ children }: { children: ReactNode }) => {
    return (
        <>

            <Hero
                title="Contact Us"
                description="Get in touch with us for questions, support, or feedback. We're here to help and look forward to hearing from you."
            />

            <div className="w-full flex items-center justify-center mt-12">
                <div className="xl:w-340 w-full md:px-6 px-3 flex flex-col items-start gap-6">
                    {children}
                </div>
            </div>
        </>
    )
}

export default ContactLayout