import { cn } from "@/lib/utils";

const Container = ({ children, className }: { children: React.ReactNode; className?: string }) => {
    return (
        <div className="w-full flex items-center justify-center mt-12">
            <div className={cn("xl:w-340 w-full md:px-6 px-3 flex flex-col items-center lg:gap-36 gap-12", className)}>
                {children}
            </div>
        </div>
    )
}

export default Container