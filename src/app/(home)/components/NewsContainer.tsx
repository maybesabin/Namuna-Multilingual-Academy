import Link from "next/link";
import { ArrowRight } from "lucide-react";

import NewsCard from "./NewsCard";

const news = [
    {
        image: "/tree-plantation.jpg",
        category: "School Program",
        date: "June 5, 2025",
        title: "Tree Plantation Day",
        description:
            "Students and teachers participated in a tree plantation program to promote environmental awareness and a greener future.",
    },
    {
        image: "/green-day.jpg",
        category: "School Event",
        date: "May 22, 2025",
        title: "Green Day Celebration",
        description:
            "Our young learners celebrated Green Day through creative activities, performances, and lessons on protecting the environment.",
    },
    {
        image: "/summer-day-celebration.jpg",
        category: "School Celebration",
        date: "April 18, 2025",
        title: "Summer Day Celebration",
        description:
            "Students welcomed the summer season with fun-filled activities, cultural performances, games, and memorable classroom celebrations.",
    },
];

const NewsContainer = () => {
    return (
        <section className="w-full">

            {/* Header */}
            <div className="mb-10 flex flex-col gap-6 md:mb-14 md:flex-row md:items-end md:justify-between">
                <div>
                    <p className="md:text-sm text-xs font-semibold uppercase tracking-wider text-blue-600">
                        News & Events
                    </p>

                    <h2 className="mt-2 text-3xl font-bold text-slate-900 sm:text-4xl lg:text-5xl">
                        Latest Updates
                    </h2>
                </div>

                <Link
                    href="/news"
                    className="inline-flex w-fit items-center gap-2 font-medium text-blue-700 transition-all hover:gap-3 md:text-sm text-xs"
                >
                    View All News
                    <ArrowRight size={18} />
                </Link>
            </div>

            {/* Cards */}
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
                {news.map((item) => (
                    <NewsCard key={item.title} {...item} />
                ))}
            </div>
        </section>
    );
};

export default NewsContainer;