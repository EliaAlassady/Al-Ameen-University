import Activites from "../components/activites";
import Footer from "../components/footer";
import Header from "../components/header";

export default function ActivitiesScreen() {
    return (
        <>
            <Header title={'النشاطات'} />
            <Activites />
            <Footer />
        </>
    )
}