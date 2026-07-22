import {
    Baby,
    Blocks,
    BookOpen,
    Pencil,
    Backpack,
    GraduationCap,
} from "lucide-react";

import TextHeader from "@/components/TextHeader";
import GradeCard from "./GradeCard";

const grades = [
    {
        title: "Nursery",
        subtitle: "Age 3+",
        icon: Baby,
    },
    {
        title: "LKG",
        subtitle: "Age 4+",
        icon: Blocks,
    },
    {
        title: "UKG",
        subtitle: "Age 5+",
        icon: BookOpen,
    },
    {
        title: "Grade 1",
        subtitle: "Building Foundations",
        icon: Pencil,
    },
    {
        title: "Grade 2",
        subtitle: "Learning with Confidence",
        icon: Backpack,
    },
    {
        title: "Grades 3",
        subtitle: "Growing & Exploring",
        icon: GraduationCap,
    },
];

const GradesContainer = () => {
    return (
        <section className="mx-auto w-full">
            <TextHeader
                caption="Our Programs"
                title="Grades We Offer"
                position="left"
            />

            <div className="md:mt-14 mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-6">
                {grades.map((grade) => (
                    <GradeCard
                        key={grade.title}
                        {...grade}
                    />
                ))}
            </div>
        </section >
    );
};

export default GradesContainer;