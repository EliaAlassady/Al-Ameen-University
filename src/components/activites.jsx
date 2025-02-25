import { useState } from 'react';
import { activites } from '../constants/activites';
import { Link } from 'react-router-dom';

export default function Activites() {
    const [activeIndex, setActiveIndex] = useState(null);

    const handleItemClick = (index) => {
        setActiveIndex(activeIndex === index ? null : index);
    };

    return (
        <div className="p-8 min-h-200 flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                {activites.map((e, index) => (
                    <div
                        key={index}
                        onClick={() => handleItemClick(index)}
                        className="relative cursor-pointer bg-white text-[#202020] 
              w-[calc(100%-1.5rem)]
              sm:w-[calc(50%-1.5rem)]
              md:w-[calc(33.333%-1.5rem)]
              lg:w-[calc(33%-1.5rem)]
              xl:w-[calc(25%-1.5rem)]
              h-[300px] flex items-center justify-center 
              font-bold text-xl shadow-lg overflow-hidden group
              transform transition-all duration-300 ease-in-out"
                    >
                        <img
                            src={e.image}
                            alt=""
                            className="absolute inset-0 w-full h-full object-cover"
                            loading="lazy"
                        />

                        <div className="absolute inset-0 overflow-hidden">
                            <div className={`absolute -bottom-20 w-full h-20 
                  bg-[radial-gradient(circle_at_center,#3b82f6_0%,transparent_100%)] 
                  opacity-0 group-hover:opacity-100 group-hover:-translate-y-20 
                  transition-all duration-500 ${activeIndex === index ? '!opacity-100 -translate-y-20' : ''}`}></div>
                        </div>

                        <div className={`absolute bottom-0 left-0 right-0 text-center 
                opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-200 ${activeIndex === index ? '!opacity-100' : ''}`}>
                            <h1 className='text-white text-sm px-2 line-clamp-2'>{e.title}</h1>
                            <Link
                                to={e.detailsLink}
                                onClick={(event) => event.stopPropagation()}
                                className="inline-block text-gray-200 text-sm px-4 py-2"
                            >
                                عرض التفاصيل
                            </Link>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}