"use client"

import { ChevronDown } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef } from "react";

const NavbarDropdown = ({
    showDropdown,
    onClose,
}: {
    showDropdown: boolean;
    onClose?: () => void;
}) => {

    const containerRef = useRef<HTMLDivElement | null>(null);

    useEffect(() => {
        function handleOutsideClick(e: MouseEvent) {
            if (!showDropdown) return;
            if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
                onClose?.();
            }
        }

        document.addEventListener("mousedown", handleOutsideClick);
        return () => document.removeEventListener("mousedown", handleOutsideClick);
    }, [showDropdown, onClose]);

    const navbarItems = [
        { title: "Home", href: "/" },
        { title: "About", href: "/about" },
        { title: "Academics", href: "/academics" },
        { title: "Gallery", href: "/gallery" },
        { title: "Notices", href: "/notices" },
        { title: "Contact", href: "/contact" }
    ]

    const pathname = usePathname();

    return (
        <div ref={containerRef} className={`${showDropdown ? "visible opacity-100" : "invisible opacity-0"} transition-all duration-500 ease-in-out lg:hidden absolute z-50 md:top-32.5 top-27 bg-white w-full`}>
            <div className="w-full flex flex-col items-start">
                {navbarItems.map((item, idx) => (
                    <div key={idx} className="w-full">
                        {(() => {
                            const isActive = item.href === "/" ? pathname === "/" : pathname?.startsWith(item.href);
                            return (
                                <Link
                                    href={item.href}
                                    onClick={() => onClose?.()}
                                    className={`flex items-center justify-between w-full transition-all duration-500 ease-in-out transform ${isActive ? "bg-(--primary-blue) text-white" : "text-(--primary-blue)"} ${showDropdown ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-5"} p-3 mb-2`}
                                    style={{ transitionDelay: `${idx * 100}ms` }}
                                >
                                    <span className="text-sm font-medium">
                                        {item.title}
                                    </span>
                                    {isActive && item.title == "Academics" && <ChevronDown className="h-3.5 w-3.5" />}
                                </Link>
                            )
                        })()}
                        <div className="w-full h-px bg-neutral-200 -mt-2"></div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default NavbarDropdown