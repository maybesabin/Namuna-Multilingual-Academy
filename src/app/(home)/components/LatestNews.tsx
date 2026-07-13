
import placeholder from "../../../../public/placeholder.png"
import Link from "next/link"
import Image from "next/image"
import Separator from "@/components/Separator"

const LatestNews = () => {

    const newsActivities = [
        {
            id: 1,
            title: "New Research Findings Published",
            description:
                "Our team has published groundbreaking research on sustainable farming techniques that increase yield by 30%.",
            date: "May 10, 2025",
            image: "",
        },
        {
            id: 2,
            title: "Community Outreach Program Success",
            description: "The recent community outreach program reached over 500 local farmers and provided valuable training.",
            date: "May 5, 2025",
            image: "",
        },
        {
            id: 3,
            title: "Partnership with Agricultural University",
            description: "We've established a new partnership with the State Agricultural University to promote innovation.",
            date: "April 28, 2025",
            image: "",
        },
    ]

    return (
        <div className="flex flex-col items-start gap-4 lg:w-1/2 w-full">
            <h2 className="font-semibold md:text-3xl text-xl text-blue-700">
                Latest News & Activities
            </h2>
            <Separator mt={-7} />
            {newsActivities.map((item) => (
                <div
                    key={item.id}
                    className="p-2 flex items-center gap-5"
                >
                    <Image
                        width={600}
                        height={600}
                        style={{ opacity: `${item.image ? 1 : 0.5}` }}
                        className="md:size-20 size-14 object-cover rounded-lg"
                        src={item.image || placeholder.src}
                        alt={placeholder.src}
                    />
                    <div className="flex flex-col items-center text-blue-600 bg-blue-50 md:px-4 px-3 md:py-2 py-1.5 rounded-md">
                        <span className="md:text-2xl text-lg font-semibold">
                            {item.date.split(" ")[1].replace(",", "")}
                        </span>
                        <span className="text-xs -mt-1">
                            {item.date.split(" ")[0].replace(",", "")}
                        </span>
                    </div>

                    <div className="flex flex-col items-start">
                        <h3 className="font-medium md:text-base text-sm">{item.title}</h3>
                        <p className="text-xs text-neutral-500">{item.description}</p>
                        <Link
                            href={'/'}
                            className="text-blue-700 font-medium hover:text-blue-500 text-xs mt-2"
                        >
                            Read More
                        </Link>
                    </div>
                </div>
            ))
            }
        </div >
    )
}

export default LatestNews