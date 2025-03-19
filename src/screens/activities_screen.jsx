import Activites from "../components/activites";
import Footer from "../components/footer";
import Header from "../components/header";
import { useLocation } from "react-router-dom";

export default function ActivitiesScreen() {
    const location = useLocation();
    const path = location.pathname;
    return (
        <>
            <Header title={path === '/student_activities' ? 'نشاطات الطلبة' : 'نشاطات الجامعة'} />
            <Activites type={path === '/student_activities' ? 'Students' : path === '/university_activities' ? 'University' : 'Department'} />
            <Footer />
        </>
    )
}