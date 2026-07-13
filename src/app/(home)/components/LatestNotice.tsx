import Separator from "@/components/Separator";
import { Calendar } from "lucide-react";

import Link from "next/link";

const LatestNotice = () => {

    const notices = [
        { title: "Field visit to Central Research Facility", date: "May 15, 2025" },
        { title: "Annual Sports Day Celebration", date: "June 10, 2025" },
        { title: "Parent-Teacher Meeting", date: "July 5, 2025" }
    ];

    return (
        <div className="flex flex-col items-start gap-4 lg:w-1/2 w-full">
            <h2 className="font-semibold md:text-3xl text-xl text-blue-700">
                Latest Notices
            </h2>
            <Separator mt={-7} />
            {notices.map((notice, idx) => (
                <Link
                    href={'/'}
                    key={idx}
                    className="w-full flex items-center justify-between px-3 py-2 group hover:bg-neutral-100 rounded-lg"
                >
                    <span className="md:text-sm text-xs text-neutral-600 group-hover:text-black cursor-pointer">{notice.title}</span>
                    <div className="mb-1.5 flex items-center gap-2 rounded-full border border-blue-200 px-2 py-1 text-blue-600">
                        <Calendar className="size-3.5" />
                        <span className="text-xs font-medium">{notice.date}</span>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default LatestNotice