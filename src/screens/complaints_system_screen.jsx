import ContactForm from "../components/contact_form";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ComplaintsSystemScreen() {
    return (
        <>
            <Header title={'نظام الشكاوي'} />
            <ContactForm title={''} text={'تفاصيل الشكوى'} />
            <Footer />
        </>
    )
}