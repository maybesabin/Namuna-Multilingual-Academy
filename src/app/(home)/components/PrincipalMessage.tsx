import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import principal from "../../../../public/principal.jpg"

const PrincipalMessage = () => {
    return (
        <section className="mx-auto grid max-w-7xl items-center gap-14 lg:grid-cols-2">
            {/* Left */}
            <div>
                <p className="text-sm font-semibold uppercase tracking-wider text-blue-600">
                    Message From The Principal
                </p>

                <h2 className="mt-3 text-4xl font-bold leading-tight text-slate-900">
                    Inspiring Every Student
                    <br />
                    To Reach Their Potential
                </h2>

                <p className="mt-8 md:text-lg text-sm leading-8 text-slate-600">
                    Welcome to our school, where every student is encouraged to dream
                    big, work hard, and become responsible global citizens. Our mission
                    is to provide a safe, inclusive, and engaging learning environment
                    that nurtures curiosity, creativity, and lifelong learning.
                </p>

                <p className="mt-6 md:text-lg text-sm leading-8 text-slate-600">
                    Together with our dedicated teachers and supportive parents, we are
                    committed to helping every child discover their strengths and build
                    a bright future.
                </p>

                <div className="mt-8">
                    <p className="font-semibold md:text-sm text-xs text-slate-900">
                        Mr. Bishnu Hamal
                    </p>

                    <p className="text-slate-500 md:text-sm text-xs">
                        Principal
                    </p>
                </div>

                <Link
                    href="/about/principal-message"
                    className="mt-6 inline-flex items-center gap-2 rounded-xl border border-blue-700 px-4.5 py-3 font-medium text-blue-700 transition hover:bg-blue-700 hover:text-white md:text-sm text-xs"
                >
                    Learn More
                    <ArrowRight size={18} />
                </Link>
            </div>

            {/* Right */}
            <Image
                loading="eager"
                src={principal}
                alt=""
                width={500}
                height={700}
                className="md:h-140 h-96 w-full rounded-3xl object-cover"
            />
        </section>
    );
};

export default PrincipalMessage;