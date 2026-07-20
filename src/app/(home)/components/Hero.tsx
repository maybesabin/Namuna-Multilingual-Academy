import Image from "next/image"
import image from "../../../../public/hero-image.jpg"
import PrimaryButton from "@/components/PrimaryButton"

const Hero = () => {
    return (
        <div className="flex items-center justify-center w-full relative">
            <Image
                style={{ width: '100%', height: '90svh' }}
                className="w-full h-[90svh] object-cover brightness-50"
                src={image}
                alt="Namuna Multilingual Academy"
            />

            <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col items-center gap-4 text-white text-center w-full md:px-6 px-3">
                <h1 className="lg:text-6xl md:text-5xl text-4xl font-semibold">Namuna Multilingual Academy</h1>
                <h3 className="lg:text-xl md:text-lg text-base text-neutral-200 md:w-full w-[85%] -mt-2">
                    Empowering student through quality education and multilingual <br className="md:flex hidden" /> excellence in Nepal
                </h3>
                <div className="flex items-center gap-3">
                    <PrimaryButton href="/about" text="Learn More" />
                    <a href="/contact" className="cursor-pointer bg-white text-black hover:bg-transparent border hover:text-white border-white transition-all font-medium rounded-sm md:text-sm text-xs px-4 py-2.5">
                        Contact Us
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Hero