import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { album } from '../constants/album';

export default function Album() {
    const [selectedImage, setSelectedImage] = useState(null);

    return (
        <div className="p-8 min-h-200 flex justify-center items-center">
            <div className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                {album.map((e, index) => (
                    <motion.div
                        key={index}
                        className="relative bg-white text-[#202020] 
            w-35 h-[150px] sm:h-[200px] sm:w-60
            md:w-[calc(33.333%-2.5rem)] lg:w-[calc(25%-2.5rem)] xl:w-[calc(20%-5.0rem)] 
            flex items-center justify-center font-bold text-xl clip-custom2 
            shadow-lg overflow-hidden group transition-all duration-300 
            hover:scale-105 hover:shadow-xl hover:z-20 cursor-pointer"
                        layoutId={`image-${index}`}
                        onClick={() => setSelectedImage(index)}
                    >
                        <img
                            src={e}
                            alt=""
                            decoding="async"
                            style={{ contentVisibility: 'auto' }}
                            className="absolute inset-0 w-full h-full object-cover 
              transition-transform duration-500 group-hover:scale-110 
              transform-gpu"
                            loading="lazy"
                        />
                        <div className="absolute inset-0 bg-black/20 opacity-0 
            group-hover:opacity-100 transition-opacity duration-300" />
                    </motion.div>
                ))}
            </div>

            <AnimatePresence>
                {selectedImage !== null && (
                    <motion.div
                        className="fixed inset-0 bg-black/90 flex items-center justify-center z-50 cursor-pointer"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={() => setSelectedImage(null)}
                    >
                        <motion.div
                            className="relative max-w-[90vw] max-h-[90vh]"
                            layoutId={`image-${selectedImage}`}
                            transition={{ type: 'spring', duration: 0.5 }}
                        >
                            <img
                                src={album[selectedImage]}
                                alt=""
                                className="w-full h-full object-contain"
                            />
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    );
}