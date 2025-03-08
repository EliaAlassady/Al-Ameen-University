import Header from "../components/header";
import InfoCardItem from "../components/info_card";
import Footer from "../components/footer";
import { FaGithub } from "react-icons/fa";
import { RiInstagramFill } from "react-icons/ri";
import { FaSquareXTwitter } from "react-icons/fa6";
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import { motion } from "framer-motion";

export default function AboutDevelopmentTeamScreen() {
    return (
        <>
            <Header title={'حول فريق العمل'} />
            <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto mt-10"
            >
                <InfoCardItem Icon={MdEmail} title={'Email'} subTitle={'eliaalassady@gmail.com'} />
                <InfoCardItem Icon={FaGithub} title={'Git Hub'} subTitle={'استكشاف المشاريع البرمجية التي نعمل عليها'} />
                <InfoCardItem Icon={RiInstagramFill} title={'Instagram'} subTitle={'تابعنا للحصول على لمحات من وراء الكواليس'} />
                <InfoCardItem Icon={FaPhone} title={'Phone Number'} subTitle={'07715611622'} />
                <InfoCardItem Icon={FaSquareXTwitter} title={'X'} subTitle={'أحدث التحديثات والتوجهات في الفريق'} />
                <InfoCardItem Icon={BsTelegram} title={'Telegram'} subTitle={'التواصل المباشر مع فريق الدعم'} />
                <InfoCardItem Icon={IoLogoWhatsapp} title={'WhatsApp'} subTitle={'اتصل بنا بسرعة وسهولة'} />
            </motion.div>
            <Footer />
        </>
    )
}