import { useLocation } from "react-router-dom";
import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

export default function NewsScreen() {
    const location = useLocation();
    const path = location.pathname;
    return (
        <>
            <Header title={path === '/student_news' ? 'اخبار الطلبة' : 'اخبار الجامعة'} />
            <News />
            <Footer />
        </>
    )
}