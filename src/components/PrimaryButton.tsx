import Link from "next/link"

const PrimaryButton = ({
    text,
    href
}: {
    text: string,
    href?: string
}) => {
    return (
        <div className="cursor-pointer bg-blue-600 text-white hover:bg-blue-700 transition-all font-medium rounded-sm md:text-sm text-xs px-4 py-2.5">
            {href ?
                <Link href={href}>
                    {text}
                </Link>
                :
                <span>{text}</span>
            }
        </div>
    )
}

export default PrimaryButton