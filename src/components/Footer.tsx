"use client"

import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react"
import Link from "next/link"
import Separator from "./Separator"

const Footer = () => {

    const footerItems = [
        {
            title: "About Us",
            links: [
                { title: "Home", href: "/" },
                { title: "About Us", href: "/about" },
                { title: "Academics", href: "/academics" },
                { title: "Contact", href: "/contact" },
            ]
        },
        {
            title: "Links",
            links: [
                { title: "Help Center", href: "/contact" },
                { title: "Gallery", href: "/gallery" },
                { title: "FAQs", href: "/academics/faqs" },
            ]
        }
    ]

    return (
        <div className="w-full flex items-center justify-center md:py-10 py-8 bg-neutral-100/60 mt-12">
            <div className="xl:w-340 w-full md:px-6 px-3 flex flex-col items-center gap-6">
                <div className="grid xl:grid-cols-4 lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-6">

                    {/* Introduction */}
                    <div className="w-full space-y-6">
                        <h4 className="md:text-base text-sm font-medium">Namuna Multilingual Academy</h4>
                        <p className="text-neutral-500 md:text-sm text-xs">
                            Providing quality education and fostering a supportive learning environment since 2015.
                        </p>
                        <div className="text-blue-600 flex items-center gap-2">
                            <MapPin className="h-3 w-3" />
                            <span className="text-neutral-500 md:text-sm text-xs">Ghorahi, Dang</span>
                        </div>
                        <div className="text-blue-600 flex items-center gap-2">
                            <Phone className="h-3 w-3" />
                            <span className="text-neutral-500 md:text-sm text-xs">+977 9846569612</span>
                        </div>
                        <div className="text-blue-600 flex items-center gap-2">
                            <Mail className="h-3 w-3" />
                            <span className="text-neutral-500 md:text-sm text-xs">info@nma.edu.np</span>
                        </div>
                    </div>


                    {/* Links */}
                    {footerItems.map((item, idx) => (
                        <div
                            className={`space-y-4 w-full ${item.title == "About Us" && "lg:ml-24"}`}
                            key={idx}
                        >
                            <h4 className="md:text-base text-sm font-medium">{item.title}</h4>
                            {item.links.map((link, idx) => (
                                <Link
                                    key={idx}
                                    className="text-neutral-500 hover:text-black transition-all block md:text-sm text-xs"
                                    href={link.href}
                                >
                                    {link.title}
                                </Link>
                            ))}
                        </div>
                    ))}

                    {/* Newsletter */}
                    <div className="w-full space-y-4">
                        <h4 className="md:text-base text-sm font-medium">Stay Connected</h4>
                        <p className="text-neutral-500 md:text-sm text-xs">
                            Subscribe to our newsletter for updates on events and announcements.
                        </p>
                        <form
                            onSubmit={(e) => e.preventDefault()}
                            className="border border-blue-200 rounded-md flex items-center justify-between"
                        >
                            <input
                                required
                                type="email"
                                name="email"
                                className="outline-none border-none pl-2 md:text-sm text-xs"
                                placeholder="Your email address"
                            />
                            <button
                                className="bg-blue-600 text-white rounded-md rounded-l-none py-3 px-4 md:text-sm text-xs"
                                type="submit"
                            >
                                Subscribe
                            </button>
                        </form>
                        <h5 className="md:text-sm text-xs font-medium">Follow Us</h5>
                        <div className="flex items-center gap-2">
                            <Facebook className="h-8 w-8 bg-blue-100 rounded-full text-blue-600 p-1.5" />
                            <Instagram className="h-8 w-8 bg-blue-100 rounded-full text-blue-600 p-1.5" />
                        </div>
                    </div>
                </div>
                <Separator />
                <div className="w-full flex items-center justify-between text-xs">
                    <h6>&copy; {new Date().getFullYear()} - All rights reserved -&nbsp;
                        <span className="font-medium">Namuna Multilingual Academy</span>
                    </h6>
                    <h6>Website Powered By:&nbsp;
                        <a href="https://sabinhamal.com.np" target="_blank" className="font-medium">Sabin Hamal</a>
                    </h6>
                </div>
            </div>
        </div>
    )
}

export default Footer