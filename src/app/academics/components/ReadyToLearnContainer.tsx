import Link from "next/link";
import {
    ArrowRight,
    BookOpen,
    Phone,
} from "lucide-react";

const ReadyToLearnContainer = () => {
    return (
        <section className="mx-auto w-full">
            <div className="relative overflow-hidden rounded-3xl bg-linear-to-r from-blue-700 to-blue-900 px-8 py-16 lg:px-16">
                {/* Background Decoration */}

                <div className="absolute -right-20 -top-20 h-72 w-72 rounded-full bg-white/5" />

                <div className="absolute -bottom-28 left-1/2 h-72 w-72 rounded-full bg-white/5" />

                {/* Content */}

                <div className="relative grid items-center gap-12 lg:grid-cols-2">
                    <div>
                        <p className="md:text-sm text-xs font-semibold uppercase tracking-widest text-blue-100">
                            Admissions Open
                        </p>

                        <h2 className="mt-4 md:text-4xl text-3xl font-bold text-white lg:text-5xl">
                            Ready to Begin
                            <br />
                            Your Child's Journey?
                        </h2>

                        <p className="mt-6 max-w-xl md:text-lg text-sm md:leading-8 text-blue-100">
                            Join Namuna Multilingual Academy and give your child
                            the opportunity to learn, grow, and thrive in a
                            supportive multilingual environment.
                        </p>

                        <div className="mt-10 flex flex-wrap gap-4">
                            <Link
                                href="/admissions"
                                className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-4 font-semibold text-blue-700 transition hover:bg-blue-50 md:text-lg text-sm"
                            >
                                Apply Now

                                <ArrowRight size={16} />
                            </Link>

                            <Link
                                href="/contact"
                                className="inline-flex items-center gap-2 rounded-xl border border-white/20 bg-white/10 px-6 py-4 font-semibold text-white backdrop-blur transition hover:bg-white/20 md:text-lg text-sm"
                            >
                                Contact Us

                                <Phone size={16} />
                            </Link>
                        </div>
                    </div>

                    {/* Right */}
                    <div className="hidden justify-center lg:flex">
                        <div className="flex h-56 w-56 items-center justify-center rounded-full bg-white/10">
                            <BookOpen className="h-28 w-28 text-white/90" />
                        </div>
                    </div>
                </div>
            </div>
        </section >
    );
};

export default ReadyToLearnContainer;