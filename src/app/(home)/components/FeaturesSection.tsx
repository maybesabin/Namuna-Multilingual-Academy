import FeatureCard from "./FeatureCard";
import shield from "../../../assets/shield.png"
import books from "../../../assets/stack-of-books.png"
import teacher from "../../../assets/teacher.png"
import trophy from "../../../assets/trophy-star.png"

const features = [
    {
        title: "Quality Education",
        description:
            "We deliver a well-rounded curriculum that empowers students to excel.",
        icon: books,
    },
    {
        title: "Experienced Faculty",
        description:
            "Our passionate teachers inspire and guide students every step of the way.",
        icon: teacher,
    },
    {
        title: "Holistic Development",
        description:
            "We focus on academics, sports, arts, and character building.",
        icon: trophy,
    },
    {
        title: "Safe & Supportive",
        description:
            "A secure and inclusive environment where every child feels valued.",
        icon: shield,
    },
];

const FeaturesSection = () => {
    return (
        <section className="mx-auto w-full">
            <div className="grid divide-y divide-slate-200 md:grid-cols-2 md:divide-x md:divide-y-0 xl:grid-cols-4">
                {features.map((feature) => (
                    <FeatureCard
                        key={feature.title}
                        {...feature}
                    />
                ))}
            </div>
        </section>
    );
};

export default FeaturesSection;