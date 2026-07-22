import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import students from "../../../../public/grade1-students.jpg"
import TextHeader from "@/components/TextHeader";

const curriculum = [
    "English Language",
    "Nepali Language",
    "Mathematics",
    "Science",
    "Social Studies",
    "Computer Basics",
    "Creative Arts",
    "Physical Education",
];

const LearningContainer = () => {
    return (
        <section className="mx-auto w-full">
            <div className="grid items-start gap-16 lg:grid-cols-2">
                {/* Content */}

                <div>
                    <TextHeader
                        caption="Our Curriculum"
                        title="Learning That Lasts"
                        position="left"
                    />

                    <div className="md:mt-10 mt-6 grid gap-4 sm:grid-cols-2">
                        {curriculum.map((item) => (
                            <div
                                key={item}
                                className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white p-4"
                            >
                                <CheckCircle2 className="md:size-5 size-4 shrink-0 text-blue-600" />

                                <span className="font-medium lg:text-lg md:text-sm text-xs text-slate-700">
                                    {item}
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Image */}
                <Image
                    src={students.src}
                    alt="Students Learning"
                    width={700}
                    height={550}
                    className="h-full w-full object-cover rounded-3xl"
                />
            </div >
        </section >
    );
};

export default LearningContainer;