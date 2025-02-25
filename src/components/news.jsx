import { news } from '../constants/news';

export default function News() {
    return (
        <div className="p-8 min-h-200 flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                {news.map((e, index) => (
                    <div
                        key={index}
                        className="relative bg-white text-[#202020] 
              w-[calc(100%-1.5rem)]  // هامش 24px للهواتف
              sm:w-[calc(50%-1.5rem)] // شاشتين في الصف
              md:w-[calc(33.333%-1.5rem)] // 3 عناصر
              lg:w-[calc(33.333%-1.5rem)] // 3 عناصر لشاشات LG
              xl:w-[calc(25%-1.5rem)] // 4 عناصر لشاشات XL
              h-[500px] flex flex-col items-center 
              font-bold text-xl shadow-lg
              transition-all duration-300 hover:shadow-xl"
                    >
                        <div className='w-full h-80 bg-blue-100 relative'>
                            <img
                                loading='lazy'
                                src={e.image}
                                alt=""
                                className='absolute inset-0 w-full h-full object-cover z-10'
                            />
                            <div className="absolute bottom-0 w-full h-20 bg-white clip-sharp z-20"></div>
                        </div>

                        <div className='h-full flex flex-col items-center justify-between p-4'>
                            <div className='flex flex-col items-center w-full'>
                                <span className='font-bold px-2 text-center line-clamp-2 w-full'>
                                    {e.title}
                                </span>
                                <span className='p-3 text-[16px] text-gray-600 font-semibold text-right line-clamp-4'>
                                    {e.description}
                                </span>
                            </div>

                            <button className='border-blue-500 border-2 px-6 py-3 m-4 
                  hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white transition-colors 
                  duration-300 cursor-pointer rounded-lg'>
                                عرض المزيد
                            </button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}