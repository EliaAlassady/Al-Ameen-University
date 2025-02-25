import Colleges from "../components/colleges";
import Footer from "../components/footer";
import Header from "../components/header";

export default function CollegesScreen() {
    return (
        <>
            <Header title={'الكليات'} />
            <Colleges minH={'min-h-150'}/>
            <Footer />
        </>
    )
}