import { electronicPortals } from '../constants/electronic_portals';

export default function ElectronicPortals() {
    return (
        <div className="p-8 min-h-200 flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                {electronicPortals.map((e, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer bg-white text-[#202020] 
                        h-[200px] flex items-end justify-center font-bold text-xl shadow-lg 
                        transform transition-all duration-300 ease-[cubic-bezier(0.4,0,0.2,1)] 
                        hover:scale-[1.03] hover:shadow-xl hover:z-20 rounded-xl overflow-hidden
                        hover:before:absolute hover:before:inset-0 hover:before:bg-gradient-to-t 
                        hover:before:from-black/40 hover:before:via-black/20 hover:before:to-transparent
                        active:scale-[1.03] active:shadow-xl active:z-20 
                        active:before:absolute active:before:inset-0 active:before:bg-gradient-to-t 
                        active:before:from-black/40 active:before:via-black/20 active:before:to-transparent
                        w-[calc(100%-1.5rem)]
                        sm:w-[calc(50%-1.5rem)]
                        md:w-[calc(33.333%-1.5rem)]
                        lg:w-[calc(25%-1.5rem)]
                        xl:w-[300px]"
                    >
                        <span className='p-4 relative z-10 transition-all duration-300 text-center group-hover:text-white'>
                            {e.title}
                        </span>
                    </div>
                ))}
            </div>
        </div>
    )
}