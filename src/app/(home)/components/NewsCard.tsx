import Image from "next/image";

interface NewsCardProps {
    image: string;
    category: string;
    date: string;
    title: string;
    description: string;
}

const NewsCard = ({
    image,
    category,
    date,
    title,
    description,
}: NewsCardProps) => {
    return (
        <article className="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl">
            <div className="relative h-56">
                <Image
                    src={image}
                    alt={title}
                    fill
                    className="object-cover"
                />
            </div>

            <div className="md:p-6 p-4">
                <div className="mb-4 flex items-center justify-between">
                    <span className="rounded-md bg-blue-700 px-3 py-1 text-xs font-medium text-white">
                        {category}
                    </span>

                    <span className="md:text-sm text-xs text-slate-500">
                        {date}
                    </span>
                </div>

                <h3 className="md:text-xl text-sm font-semibold text-slate-900 transition-colors hover:text-blue-700">
                    {title}
                </h3>

                <p className="mt-3 text-slate-600 md:leading-7 md:text-sm text-xs">
                    {description}
                </p>
            </div>
        </article>
    );
};

export default NewsCard;