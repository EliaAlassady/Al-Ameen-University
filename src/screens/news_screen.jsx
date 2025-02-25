import Footer from "../components/footer";
import Header from "../components/header";
import News from "../components/news";

export default function NewsScreen() {
    return (
        <>
            <Header title={'الاخبار'} />
            <News />
            <Footer />
        </>
    )
}