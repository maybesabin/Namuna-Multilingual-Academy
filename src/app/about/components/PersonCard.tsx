import Image from "next/image";

interface PersonCardProps {
    name: string;
    position: string;
    imageUrl: string;
}

const PersonCard = ({ name, position, imageUrl }: PersonCardProps) => {
    return (
        <div className="flex flex-col items-center gap-4 lg:w-96 md:w-56 w-32 text-center">
            <Image
                src={imageUrl}
                alt={name}
                width={200}
                height={200}
                className="rounded-full object-cover lg:size-64 md:size-56 size-32"
            />
            <h3 className="md:text-lg text-sm font-medium">{name}</h3>
            <p className="-mt-4 text-neutral-600 md:text-sm text-xs">({position})</p>
        </div>
    )
}

export default PersonCard