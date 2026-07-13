"use client"

import { Calendar, Mail, MapPin, Phone } from "lucide-react";
import { useEffect, useState } from "react";

const Header = () => {
    const [formattedDate, setFormattedDate] = useState<string>("");

    useEffect(() => {
        const date = new Intl.DateTimeFormat("en-GB", {
            weekday: "long",
            day: "numeric",
            month: "long",
            year: "numeric",
        }).format(new Date());
        setFormattedDate(date);
    }, []);

    const headerItems = [
        { icon: MapPin, text: "Ghorahi-16, Saniambapur, Sarra, Dang" },
        { icon: Mail, text: "info@rec.edu.np" },
        { icon: Phone, text: "+977 9829323223" },
    ]

    return (
        <div className="w-full flex items-center justify-between md:py-3.5 py-2.5 bg-(--primary-blue) text-white md:px-6 px-3 text-xs">
            <div className="md:flex hidden items-center gap-1.5">
                <Calendar className="h-3.5 w-3.5" />
                <span className="font-light">{formattedDate}</span>
            </div>

            <div className="flex items-center gap-2 md:w-auto w-full">
                <ol className="md:flex hidden items-center justify-center md:gap-6 gap-3">
                    {headerItems.map((item, idx) => (
                        <li
                            className="flex items-center gap-1.5"
                            key={idx}
                        >
                            <item.icon className="h-3.5 w-3.5" />
                            {item.text}
                        </li>
                    ))}
                </ol>
                <ol className="md:hidden flex items-center justify-between w-full md:gap-6 gap-3">
                    {headerItems.slice(1, 3).map((item, idx) => (
                        <li
                            className="flex items-center gap-1.5"
                            key={idx}
                        >
                            <item.icon className="h-3.5 w-3.5" />
                            {item.text}
                        </li>
                    ))}
                </ol>
            </div>
        </div>
    );
};

export default Header;