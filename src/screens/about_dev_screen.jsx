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



export default function AboutDevelopmentTeamScreen() {
    return (
        <>
            <Header title={'حول فريق العمل'} />
            <div className=" flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto mt-10">
                <InfoCardItem Icon={FaGithub} title={'Git Hub'} subTitle={''} />
                <InfoCardItem Icon={RiInstagramFill} title={'Instagram'} subTitle={''} />
                <InfoCardItem Icon={FaSquareXTwitter} title={'X'} subTitle={''} />
                <InfoCardItem Icon={BsTelegram} title={'Telegram'} subTitle={''} />
                <InfoCardItem Icon={IoLogoWhatsapp} title={'WhatsApp'} subTitle={''} />
                <InfoCardItem Icon={MdEmail} title={'Email'} subTitle={'eliaalassady@gmail.com'} />
                <InfoCardItem Icon={FaPhone} title={'Phone Number'} subTitle={'07715611622'} />
            </div>
            <Footer />
        </>
    )
}