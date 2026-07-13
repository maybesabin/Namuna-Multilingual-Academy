import LatestNews from "./LatestNews"
import LatestNotice from "./LatestNotice"

const Notice = () => {
    return (
        <div className="w-full flex items-center justify-center">
            <div className="flex lg:flex-row flex-col items-start xl:w-340 gap-12 w-full md:px-6 px-3">
                <LatestNotice />
                <LatestNews />
            </div>
        </div>
    )
}

export default Notice