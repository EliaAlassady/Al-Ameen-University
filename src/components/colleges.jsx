import { colleges } from '../constants/colleges';

export default function Colleges({ minH }) {
    return (
        <div className={`${minH} p-8 flex justify-center items-center `} >
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                {colleges.map((e, index) => (
                    <div
                        key={index}
                        className="relative cursor-pointer bg-white text-[#202020]
              w-40
              h-[150px]
              sm:h-[250px]
              sm:w-60
              md:w-[calc(33.333%-1.5rem)] 
              lg:w-[calc(25%-1.5rem)] 
              xl:w-[calc(20%-3.0rem)] 
              flex flex-col clip-custom gap-2 items-center 
              justify-center font-bold text-xl
              transition-all duration-300 ease-in-out
              hover:-translate-y-2 hover:translate-x-2
              active:-translate-y-2 active:translate-x-2"
                    >
                        <span>{<e.Icon className="text-blue-500 size-8 sm:size-10" />}</span>
                        <span className='font-bold text-center text-[16px] px-10 sm:text-xl'>{e.title}</span>
                    </div>
                ))}
            </div>
        </div >
    )
}