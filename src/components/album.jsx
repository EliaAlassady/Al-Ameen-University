import { album } from '../constants/album'

export default function Album() {
    return (
        <div className="p-8 min-h-200 flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto">

                {album.map((e, index) => (
                    <div
                        key={index}
                        className="relative bg-white text-[#202020]
                        w-35  
                        h-[150px]  
                        sm:h-[200px]
              sm:w-60
              md:w-[calc(33.333%-2.5rem)] 
              lg:w-[calc(25%-2.5rem)] 
              xl:w-[calc(20%-5.0rem)]   
              flex items-center justify-center font-bold text-xl clip-custom2 
              shadow-lg overflow-hidden group transition-all duration-300 
              hover:scale-105 hover:shadow-xl hover:z-20 active:scale-105 active:shadow-xl active:z-20 transform-gpu"
                    >
                        <img
                            src={e}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover 
                transition-transform duration-500 group-hover:scale-110 group-active:scale-110 
                transform-gpu"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 bg-black/20 opacity-0 
                group-hover:opacity-100 transition-opacity duration-300" />
                    </div>
                ))}
            </div>
        </div>
    )
}