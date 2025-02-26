import Footer from "../components/footer";
import Header from "../components/header";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";
import InfoCardItem from "../components/info_card";
import ContactForm from "../components/contact_form";
import UniversityLocation from "../components/university_location";



export default function ContactScreen() {
    return (
        <>
            <Header title={'اتصل بنا'} />
            <div className=" flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto mt-10">
                <InfoCardItem Icon={FaPhone} title={'رقم الهاتف'} subTitle={'07715611622'} />
                <InfoCardItem Icon={MdEmail} title={'البريد الالكتروني'} subTitle={'eliaalassady@gmail.com'} />
                <InfoCardItem Icon={FaLocationDot} title={'العنوان'} subTitle={'بغداد - الوزيرية - خلف السفارة التركية'} />
            </div>
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'>
                <span className=' border-b-2 border-blue-500 text-xl sm:text-3xl md:text-4xl '>يمكنك مراسلتنا في حال وجود اي استفسار</span>
            </h1>
            <ContactForm />
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'>
                <span className=' border-b-2 border-blue-500 text-2xl sm:text-3xl md:text-4xl'>موقع الجامعة</span>
            </h1>
            <UniversityLocation />
            <Footer />
        </>
    )
}