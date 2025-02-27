import AboutItem from "../components/about_item";
import Footer from "../components/footer";
import Header from "../components/header";
import eds from '../assets/eds.webp'

export default function ContinuingEducationScreen() {
    return (
        <>
            <Header title={'قسم التعليم المستمر'} />
            <AboutItem img={eds} text={'قسم التعليم المستمر في جامعة الأمين هو وحدة متخصصة تهدف إلى تقديم برامج تعليمية وتدريبية متقدمة للمجتمع خارج الإطار التقليدي للتعليم الجامعي. يسعى القسم إلى تلبية احتياجات الأفراد والشركات والمؤسسات من خلال توفير دورات تدريبية، وورش عمل، وشهادات مهنية في مختلف المجالات، بما في ذلك التكنولوجيا، وإدارة الأعمال، والتنمية الشخصية'} />
            <Footer />
        </>
    )
}