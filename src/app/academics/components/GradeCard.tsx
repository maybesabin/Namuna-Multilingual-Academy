import { LucideIcon } from "lucide-react";

interface GradeCardProps {
    icon: LucideIcon;
    title: string;
    subtitle: string;
}

const GradeCard = ({
    icon: Icon,
    title,
    subtitle,
}: GradeCardProps) => {
    return (
        <div className="group flex flex-col items-center rounded-2xl border border-slate-200 bg-white p-6 transition-all duration-300 hover:-translate-y-1 hover:border-blue-200 hover:shadow-lg">
            <div className="flex md:size-16 size-14 items-center justify-center rounded-full bg-blue-50 transition-colors duration-300 group-hover:bg-blue-600">
                <Icon className="md:size-8 size-6 text-blue-600 transition-colors duration-300 group-hover:text-white" />
            </div>

            <h3 className="mt-5 md:text-lg text-sm font-semibold text-slate-900">
                {title}
            </h3>

            <p className="mt-2 md:text-sm text-xs text-slate-500 text-center">
                {subtitle}
            </p>
        </div>
    );
};

export default GradeCard;