import { GalleryImage } from "@/data/gallery";
import Image from "next/image";

interface Props {
    image: GalleryImage;
    span: string;
}

const GalleryCard = ({ image, span }: Props) => {

    return (
        <div
            className={`group relative overflow-hidden rounded-3xl ${span}`}
        >
            <Image
                width={500}
                height={500}
                src={image.image}
                alt={image.title}
                className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />

            <div className="absolute inset-0 bg-linear-to-t from-black/60 via-transparent to-transparent opacity-0 transition group-hover:opacity-100" />

            <div className="absolute bottom-5 left-5 translate-y-4 text-white opacity-0 transition duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                <p className="font-semibold">{image.title}</p>
            </div>
        </div>
    );
};

export default GalleryCard;