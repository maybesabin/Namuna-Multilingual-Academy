import AdmissionStepCard from "./AdmissionStepCard"
import {
    User,
    CircleCheckBig,
    SearchCheck,
    BadgeCheck,
} from "lucide-react";


const AdmissionStepContainer = () => {
    const steps = [
        {
            title: "Application",
            description:
                "Fill out the student's and guardian's personal details including the academic information of the student. ",
            icon: User,
        },
        {
            title: "Submit",
            description:
                "Check all the information provided, confirm its accuracy, and submit the admission application for review.",
            icon: CircleCheckBig,
        },
        {
            step: 3,
            title: "Review",
            description: "Our team reviews your application and information before processing.",
            icon: SearchCheck,
        },
        {
            step: 4,
            title: "Confirmation",
            description: "Receive your admission decision and enrollment details.",
            icon: BadgeCheck,
        },
    ];

    return (
        <div className="lg:mt-12 mt-8 lg:mb-20 mb-16 grid lg:grid-cols-4 md:grid-cols-2 grid-cols-1 md:gap-4">
            {steps.map((step, idx) => (
                <AdmissionStepCard
                    key={idx}
                    step={idx + 1}
                    {...step}
                />
            ))}
        </div>
    )
}

export default AdmissionStepContainer