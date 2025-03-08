import { motion } from 'framer-motion';
import Intro from '../components/intro';
import Statistics from '../components/statistics';
import ElectronicPortals from '../components/electronic_portals';
import Colleges from '../components/colleges';
import Activites from '../components/activites';
import News from '../components/news';
import Ads from '../components/ads';
import Album from '../components/album';
import Footer from '../components/footer';

export default function HomeScreen() {

    return (
        <>
            <Intro />

            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, ease: "easeInOut" }}
                className="sm:scale-95 md:scale-100"
            >
                <Statistics />
            </motion.div>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeInOut" }}
                className="sm:scale-90 md:scale-100"
            >
                <ElectronicPortals />
            </motion.div>

            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-2'>
                <span className=' border-b-2 border-blue-500'>الكليات</span>
            </h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="sm:scale-90 md:scale-100"
            >
                <Colleges minH={'min-h-200'} />
            </motion.div>

            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5'>
                <span className=' border-b-2 border-blue-500'>النشاطات</span>
            </h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="sm:scale-90 md:scale-100"
            >
                <Activites />
            </motion.div>

            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5'>
                <span className=' border-b-2 border-blue-500'>الاخبار</span>
            </h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.2, ease: "easeOut" }}
                className="sm:scale-90 md:scale-100"
            >
                <News />
            </motion.div>

            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5'>
                <span className=' border-b-2 border-blue-500'>الاعلانات</span>
            </h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="sm:scale-90 md:scale-100"
            >
                <Ads />
            </motion.div>

            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5'>
                <span className=' border-b-2 border-blue-500'>البوم الصور</span>
            </h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.3, ease: "easeInOut" }}
                className="sm:scale-90 md:scale-100"
            >
                <Album />
            </motion.div>

            <Footer />

        </>
    );
}
