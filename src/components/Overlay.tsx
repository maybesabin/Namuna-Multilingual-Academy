const Overlay = ({ dependency, onClick }: { dependency: boolean; onClick?: () => void }) => {
    return (
        <div
            onClick={onClick}
            className={`z-40 bg-black fixed inset-0 ${dependency ? "opacity-30 visible" : "opacity-0 invisible"} transition-all duration-300 ease-in-out`}
        />
    )
}

export default Overlay