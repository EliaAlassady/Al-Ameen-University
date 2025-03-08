import Footer from "../components/footer";
import Header from "../components/header";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import InfoCardItem from "../components/info_card";
import ContactForm from "../components/contact_form";
import UniversityLocation from "../components/university_location";
import { motion } from "framer-motion";

export default function ContactScreen() {
    return (
        <>

            <Header title={'اتصل بنا'} />

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto mt-10"
            >
                <InfoCardItem Icon={FaPhone} title={'رقم الهاتف'} subTitle={'07715611622'} />
                <InfoCardItem Icon={MdEmail} title={'البريد الالكتروني'} subTitle={'eliaalassady@gmail.com'} />
                <InfoCardItem Icon={FaLocationDot} title={'العنوان'} subTitle={'بغداد - الوزيرية - خلف السفارة التركية'} />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
                className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'
            >
                <span className='border-b-2 border-blue-500 text-xl sm:text-3xl md:text-4xl'>
                    يمكنك مراسلتنا في حال وجود أي استفسار
                </span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                <ContactForm title={''} text={'الرسالة'} />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.8 }}
                className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'
            >
                <span className='border-b-2 border-blue-500 text-2xl sm:text-3xl md:text-4xl'>
                    موقع الجامعة
                </span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7, delay: 1 }}
            >
                <UniversityLocation />
            </motion.div>


            <Footer />
        </>
    );
}
