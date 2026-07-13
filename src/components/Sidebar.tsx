import Image from "next/image"
import logo from "../../public/logo.jpeg"
import { Facebook, Instagram, Mail, MapPin, Phone, X, Youtube } from "lucide-react"
import { SetStateAction } from "react"

interface PropsType {
    showSidebar: boolean
    setShowSidebar: React.Dispatch<SetStateAction<boolean>>
}

const Sidebar = ({
    showSidebar,
    setShowSidebar
}: PropsType) => {

    const contactItems = [
        { icon: MapPin, text: "Ghorahi-16, Saniambapur, Sarra, Dang" },
        { icon: Mail, text: "info@rec.edu.np" },
        { icon: Phone, text: "+977 9829323223" },
    ]
    const socialItems = [
        { icon: Facebook, href: "www.facebook.com" },
        { icon: Instagram, href: "www.instagram.com" },
        { icon: Youtube, href: "www.youtube.com" },
    ]

    return (
        <div className={`${showSidebar ? "visible right-0 blur-none" : "invisible -right-full blur-md"} min-h-svh fixed top-0 xl:w-108 md:w-96 transition-all duration-500 ease-in-out shadow-lg bg-white p-6 z-50 md:flex flex-col items-start gap-4 hidden`}>

            <div className="w-full flex items-center justify-between">
                <div className="flex items-center gap-2">
                    <Image
                        width={600}
                        height={600}
                        className="h-14 w-14 object-cover rounded-md border border-neutral-200"
                        src={logo}
                        alt="Namuna Multilingual Academy logo"
                    />
                    <div className="flex flex-col items-start">
                        <h5 className="font-semibold text-blue-600 md:text-xl text-base">Namuna</h5>
                        <h4 className="md:text-sm text-xs -mt-1 text-neutral-600">
                            Multilingual Academy
                        </h4>
                    </div>
                </div>
                <X
                    onClick={() => setShowSidebar(false)}
                    className="h-8 w-8 text-neutral-400 cursor-pointer hover:text-neutral-600"
                />
            </div>
            <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901387.4223294647!2d81.76062546510204!3d28.053662226540087!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39943d1035fcc47b%3A0x8e11a9b5adb38a9f!2sN.C%20Namuna%20English%20School!5e0!3m2!1sen!2snp!4v1746857025416!5m2!1sen!2snp" className="border-0 w-full h-64" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            <h3 className="font-medium lg:text-lg text-base text-blue-600">Get In Touch</h3>

            {contactItems.map((item, idx) => (
                <div key={idx} className="flex items-center gap-2 -mt-1">
                    <item.icon className="h-3.5 w-3.5 text-blue-600" />
                    <span className="text-sm text-neutral-600">{item.text}</span>
                </div>
            ))}

            <h3 className="font-medium lg:text-lg text-base text-blue-600">Follow Us</h3>

            <div className="flex items-center gap-2 -mt-1">
                {socialItems.map((item, idx) => (
                    <a
                        target="_blank"
                        href={item.href}
                        key={idx}
                        className="h-10 w-10 border border-white hover:bg-transparent hover:text-black hover:border-neutral-200 transition-all bg-blue-600 text-white flex items-center justify-center rounded-sm">
                        <item.icon className="w-5 h-5" />
                    </a>
                ))}
            </div>
        </div>
    )
}

export default Sidebar