import { galleryImages } from "@/data/gallery";
import GalleryCard from "./GalleryCard";
import { useMemo } from "react";

const basePattern = [
    "md:col-span-2 md:row-span-2",
    "",
    "md:row-span-2",
    "",
    "md:col-span-2",
    "",
    "",
    "md:row-span-2",
    "md:col-span-2",
    "",
];

function shuffle<T>(array: T[]) {
    const copy = [...array];

    for (let i = copy.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [copy[i], copy[j]] = [copy[j], copy[i]];
    }

    return copy;
}

const Gallery = () => {
    const selectedLayout = useMemo(() => shuffle(basePattern), []);

    const getSpan = (index: number) => {
        return selectedLayout[index % selectedLayout.length];
    };

    return (
        <section>
            <div className="mx-auto max-w-7xl px-6">

                <div
                    className="
    mt-14
    grid
    grid-flow-dense
    auto-rows-[220px]
    gap-5
    grid-cols-1
    sm:grid-cols-2
    lg:grid-cols-4
  "
                >
                    {galleryImages.map((image, index) => (
                        <GalleryCard
                            key={image.id}
                            image={image}
                            span={getSpan(index)}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Gallery;