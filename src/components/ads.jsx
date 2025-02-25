import { useState } from 'react';
import { ads } from '../constants/ads';
import { BsFillCalendarDateFill } from "react-icons/bs";
import { Link } from 'react-router-dom';

export default function Ads() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleCardClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="p-8 min-h-200 flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                {ads.map((e, index) => (
                    <div
                        key={index}
                        onClick={() => handleCardClick(index)}
                        className="perspective-1000 cursor-pointer
          w-[calc(100%-1.5rem)]
          sm:w-[calc(50%-1.5rem)]
          md:w-[calc(50%-1.5rem)]
          lg:w-[calc(33.333%-1.5rem)]
          xl:w-[calc(25%-1.5rem)] 
          h-[300px]"
                    >
                        <div className={`relative w-full h-full transition-transform duration-500 transform-style-preserve-3d 
              hover:rotate-y-180 ${activeIndex === index ? 'rotate-y-180' : ''}`}>
                            <div className="absolute bg-white w-full h-full flex flex-col items-center justify-center shadow-lg backface-hidden rounded-lg overflow-hidden">
                                <img
                                    src={e.image}
                                    alt=""
                                    className="w-full h-full object-cover"
                                    loading="lazy"
                                />
                            </div>

                            <div className="absolute bg-white w-full h-full flex flex-col items-center gap-3 p-6 backface-hidden rotate-y-180 rounded-lg">
                                <div className='flex items-center gap-4'>
                                    <span className='text-blue-500 font-bold text-xl'>{e.date}</span>
                                    <BsFillCalendarDateFill className='text-blue-500 size-5' />
                                </div>
                                <h1 className='text-center px-2 text-[#202020] font-bold text-xl line-clamp-2'>
                                    {e.title}
                                </h1>
                                <p className='text-right px-2 text-gray-600 line-clamp-3'>
                                    {e.description}
                                </p>
                                <Link
                                    to={e.detailsLink}
                                    onClick={(event) => event.stopPropagation()}
                                    className='border-blue-500 border-2 px-6 py-3 mt-2
              hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white transition-all
              duration-300 cursor-pointer rounded-lg'
                                >
                                    عرض المزيد
                                </Link>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}