import { statistics } from '../constants/statistics';

export default function Statistics() {
  return (
    <div className="p-8 min-h-100 flex justify-center items-center">
      <div className="flex flex-wrap justify-center gap-6">
        {statistics.map((e, index) => (
          <div
            key={index}
            className="relative bg-white text-[#202020] 
           w-[140px] h-[140px] rounded-full
           flex flex-col items-center justify-center 
           font-bold text-xl shadow-lg
           mx-[calc(50% - 75px - 0.75rem)]
           sm:mx-0
           transform transition-all duration-300 ease-in-out 
           hover:scale-105 hover:shadow-xl hover:bg-blue-50
           hover:-translate-y-2
           active:scale-105 active:shadow-xl active:bg-blue-50 active:-translate-y-2"
          >
            <span className="transform transition-transform duration-300 hover:rotate-12 active:rotate-12">
              {<e.Icon className="text-blue-500 size-10" />}
            </span>
            <span className='font-bold text-center text-[18px] md:text-xl'>{e.title}</span>
            <span className='text-[16px] font-semibold'>{e.number}</span>
          </div>
        ))}
      </div>
    </div>
  )
}