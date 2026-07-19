"use client"

import principal from "../../../../public/principal.jpg"
import logo from "../../../../public/logo.jpeg"
import { CheckCircle, Users } from "lucide-react"
import Image from "next/image"
import placeholder from "../../../../public/placeholder.png"

const AboutUs = () => {
    const facilities = [
        { title: "Innovative Learning", description: "State-of-the-art facilities and interactive methods" },
        { title: "Expert Educators", description: "Highly qualified faculty with industry experience" },
        { title: "Supportive Environment", description: "Nurturing atmosphere that promotes growth and well-being" }
    ]
    return (
        <div className="w-full flex items-center justify-center">
            <div className="xl:w-340 w-full md:px-6 px-3 flex lg:flex-row flex-col lg:items-center items-start lg:gap-12 gap-6">
                <div className="lg:w-1/2 w-full flex flex-col items-start gap-4 lg:border border-neutral-100 rounded-lg relative">
                    <div className="flex items-center gap-2 lg:px-5 pt-4">
                        <Image
                            width={600}
                            height={500}
                            className="md:size-14 size-12"
                            src={logo.src}
                            alt={placeholder.src}
                        />
                        <div className="flex flex-col items-start">
                            <h3 className="font-semibold md:text-lg text-sm">Bishnu Hamal</h3>
                            <p className="md:text-sm text-xs text-blue-600 md:-mt-1">The Principal</p>
                        </div>
                    </div>
                    <div className="w-full lg:px-5">
                        <Image
                            className="w-full md:h-96 h-72 object-cover opacity-85 rounded-t-2xl"
                            src={principal.src}
                            alt="Namuna Multilingual Academy principal"
                            width={600}
                            height={500}
                        />
                    </div>
                </div>

                <div className="lg:w-1/2 w-full flex flex-col items-start md:gap-4 gap-3">
                    <h3 className="tracking-wider text-blue-600 md:text-base text-sm">ABOUT US</h3>
                    <h2 className="xl:text-5xl md:text-4xl text-3xl font-bold text-gray-900">
                        Message&nbsp;from&nbsp;
                        <span className="text-blue-600">Principal</span>
                    </h2>
                    <p className="lg:text-base md:text-sm text-xs text-neutral-600">
                        Dear Parents, Students, and Well-Wishers, I am delighted to share a momentous announcement with the extended Academy family. Since our establishment in 2015, we have been committed to excellence in education and fostering a supportive learning environment.
                    </p>
                    <div className="space-y-6 mt-2">
                        {facilities.map((item) => (
                            <div key={item.title} className="flex items-start gap-3 border p-4 rounded-lg">
                                <CheckCircle className="text-blue-600 md:h-6 h-4 md:w-6 w-4 mt-2" />
                                <div>
                                    <h3 className="font-semibold text-gray-900 md:text-base text-sm">{item.title}</h3>
                                    <p className="text-gray-600 md:text-sm text-xs">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AboutUs