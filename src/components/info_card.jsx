export default function InfoCardItem({ Icon, title, subTitle }) {
    return (
        <div className="perspective-1000 bg-white cursor-pointer
                             w-[calc(100%-1.5rem)]
                             sm:w-[calc(50%-1.5rem)]
                             md:w-[calc(50%-1.5rem)]
                             lg:w-[calc(33.333%-1.5rem)]
                             xl:w-[calc(25%-1.5rem)]
                             h-[300px] rounded-xl
                             transform transition-all duration-300 ease-in-out
                             hover:scale-105 hover:shadow-xl hover:bg-blue-50
                             hover:-translate-y-2
                             active:scale-105 active:shadow-xl active:bg-blue-50 active:-translate-y-2" >
            <div className=" h-full flex flex-col items-center justify-center gap-3">
                <span> <Icon className=" text-blue-500 size-10" /> </span>
                <h1 className=" font-bold text-3xl text-[#202020]">{title}</h1>
                <p className="  font-semibold text-xl text-center text-gray-500">{subTitle}</p>
            </div>
        </div>
    )
}