export default function Header({ title }) {
    return (
        <div className="relative w-full h-60 bg-blue-500 text-white flex flex-col md:flex-row items-center justify-evenly ">
            <h1 className=" text-4xl font-bold">{title}</h1>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-[#e9e9e9] clip-sharp"></div>
        </div>
    )
}