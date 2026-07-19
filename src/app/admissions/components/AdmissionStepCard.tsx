import { LucideIcon } from "lucide-react";

interface AdmissionStepCardProps {
    step: number;
    title: string;
    description: string;
    icon: LucideIcon;
}

const AdmissionStepCard = ({
    step,
    title,
    description,
    icon: Icon,
}: AdmissionStepCardProps) => {
    return (
        <div className="relative md:rounded-2xl border border-slate-200 bg-white p-5">
            {/* Step Number */}
            <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-blue-600 text-sm font-semibold text-white">
                    {step}
                </div>
            </div>

            <div className="mt-4 flex flex-col items-center text-center">
                <div className="mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-blue-50">
                    <Icon className="h-8 w-8 text-blue-600" />
                </div>

                <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default AdmissionStepCard;