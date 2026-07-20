import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface FeatureCardProps {
    icon: StaticImport;
    title: string;
    description: string;
}

const FeatureCard = ({
    icon,
    title,
    description,
}: FeatureCardProps) => {
    return (
        <div className="flex items-start gap-6 p-6">
            <Image
                alt=""
                src={icon}
                height={900}
                width={900}
                className="h-12 w-12"
            />

            <div>
                <h3 className="text-lg font-semibold text-slate-900">
                    {title}
                </h3>

                <p className="mt-2 text-sm leading-7 text-slate-600">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default FeatureCard;