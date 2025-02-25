import { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import logo from '../assets/logo.webp'

export default function Intro() {
    const texts = [
        "نقدم تعليمًا متميزًا يشكل مستقبلًا أفضل",
        "تعلم مع أفضل الأساتذة في بيئة متميزة",
        "نساعدك على تحقيق طموحاتك الأكاديمية",
        "تعليم حديث وتقنيات متطورة لمستقبل مشرق"
    ];

    const [index, setIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setIndex((prevIndex) => (prevIndex + 1) % texts.length);
        }, 3000);

        return () => clearInterval(interval);
    }, []);
    return (
        <div className="relative w-full h-screen bg-blue-500 text-white flex flex-col md:flex-row items-center justify-center md:justify-evenly ">
            <img src={logo} className='size-60 sm:size-80 md:size-70 lg:size-100' alt="" loading='lazy' />
            <div className='w-80 sm:w-130 md:w-120 lg:w-170 flex flex-col items-end px-2 py-8 '>
                <h1 className='text-2xl sm:text-4xl md:text-5xl lg:text-7xl font-bold'>جامعة الامين</h1>
                <div className='flex flex-col items-start w-full'>
                    <motion.p
                        key={index}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.5 }}
                        className="text-[16px] sm:text-xl md:text-2xl lg:text-3xl py-8 text-center font-semibold text-white"
                    >
                        {texts[index]}
                    </motion.p>
                    <div className='flex gap-5 items-center w-full justify-center'>
                        <div className="flex gap-4">
                            <motion.button
                                className="bg-white text-black px-6 py-3 rounded-xl cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                حول الجامعة
                            </motion.button>

                            <motion.button
                                className="border-white border-2 px-6 py-3 rounded-xl cursor-pointer"
                                whileHover={{ scale: 1.1 }}
                                whileTap={{ scale: 0.9 }}
                            >
                                الاتصال بنا
                            </motion.button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="absolute bottom-0 left-0 w-full h-40 bg-[#e9e9e9] clip-sharp"></div>
        </div>
    )
}