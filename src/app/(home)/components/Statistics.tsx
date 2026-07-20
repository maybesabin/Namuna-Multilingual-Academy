import {
    Users,
    School,
    LucideIcon,
    BookOpen,
    HeartHandshake,
} from "lucide-react";

interface StatCardProps {
    icon: LucideIcon;
    value: string;
    title: string;
    description: string;
}

const StatCard = ({
    icon: Icon,
    value,
    title,
    description,
}: StatCardProps) => {
    return (
        <div className="flex items-center gap-5">
            <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full bg-white/10">
                <Icon className="h-8 w-8 text-white" />
            </div>

            <div>
                <h3 className="text-3xl font-bold text-white">
                    {value}
                </h3>

                <p className="mt-1 text-sm font-semibold text-white">
                    {title}
                </p>

                <p className="mt-1 text-sm text-blue-100">
                    {description}
                </p>
            </div>
        </div>
    );
};

const stats = [
    {
        value: "10+",
        title: "Programs",
        description: "Academic & co-curricular programs",
        icon: BookOpen,
    },
    {
        value: "80+",
        title: "Teachers",
        description: "Qualified & experienced",
        icon: Users,
    },
    {
        value: "2+",
        title: "Years of Excellence",
        description: "Delivering quality education",
        icon: School,
    },
    {
        value: "98%",
        title: "Parent Satisfaction",
        description: "Trusted by families every year",
        icon: HeartHandshake,
    },
];

const Statistics = () => {
    return (
        <section className="md:block hidden mx-auto w-full">
            <div className="rounded-3xl bg-linear-to-b from-blue-600 to-blue-800 p-12">
                <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
                    {stats.map((stat) => (
                        <StatCard
                            key={stat.title}
                            {...stat}
                        />
                    ))}
                </div>
            </div>
        </section >
    );
};

export default Statistics;