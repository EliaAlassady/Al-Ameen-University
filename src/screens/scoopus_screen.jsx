import Footer from "../components/footer";
import Header from "../components/header";
import InfoCardItem from "../components/info_card";
import { FaBookReader } from "react-icons/fa";

export default function ScoopUsScreen() {
    return (
        <>
            <Header title={'مجلات'} />
            <div className=" flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto mt-10">
                <InfoCardItem Icon={FaBookReader} title={'ORCID'} subTitle={'زيارة الصفحة'} path={'https://orcid.org/'} />
                <InfoCardItem Icon={FaBookReader} title={'EI Compendex'} subTitle={'زيارة الصفحة'} path={'https://www.engineeringvillage.com/'} />
                <InfoCardItem Icon={FaBookReader} title={'Iraqi Academic Journals'} subTitle={'زيارة الصفحة'} path={'https://www.iasj.net/iasj/journals'} />
                <InfoCardItem Icon={FaBookReader} title={'PubMed'} subTitle={'زيارة الصفحة'} path={'https://pubmed.ncbi.nlm.nih.gov/'} />
                <InfoCardItem Icon={FaBookReader} title={'Clarivate Analytics'} subTitle={'زيارة الصفحة'} path={'https://mjl.clarivate.com/home?PC=K'} />
                <InfoCardItem Icon={FaBookReader} title={'Google Scholar'} subTitle={'زيارة الصفحة'} path={'https://scholar.google.com/'} />
                <InfoCardItem Icon={FaBookReader} title={'SAGE Journals'} subTitle={'زيارة الصفحة'} path={'https://journals.sagepub.com/'} />
                <InfoCardItem Icon={FaBookReader} title={'IEEE Xplore'} subTitle={'زيارة الصفحة'} path={'https://ieeexplore.ieee.org/'} />
                <InfoCardItem Icon={FaBookReader} title={'Oxford Academic'} subTitle={'زيارة الصفحة'} path={'https://academic.oup.com/journals'} />
                <InfoCardItem Icon={FaBookReader} title={'Wiley'} subTitle={'زيارة الصفحة'} path={'https://www.wiley.com/'} />
                <InfoCardItem Icon={FaBookReader} title={'Elsevier'} subTitle={'زيارة الصفحة'} path={'https://www.elsevier.com/'} />
                <InfoCardItem Icon={FaBookReader} title={'Springer'} subTitle={'زيارة الصفحة'} path={'https://www.springer.com/'} />
                <InfoCardItem Icon={FaBookReader} title={'CrossRef'} subTitle={'زيارة الصفحة'} path={'https://www.crossref.org/'} />
                <InfoCardItem Icon={FaBookReader} title={'Kudos'} subTitle={'زيارة الصفحة'} path={'https://www.growkudos.com/'} />
                <InfoCardItem Icon={FaBookReader} title={'ResearchGate'} subTitle={'زيارة الصفحة'} path={'https://www.researchgate.net/'} />
                <InfoCardItem Icon={FaBookReader} title={'Mendeley'} subTitle={'زيارة الصفحة'} path={'https://www.mendeley.com/'} />
                <InfoCardItem Icon={FaBookReader} title={'Semantic Scholar'} subTitle={'زيارة الصفحة'} path={'https://www.semanticscholar.org/'} />
                <InfoCardItem Icon={FaBookReader} title={'DBLP'} subTitle={'زيارة الصفحة'} path={'https://dblp.org/'} />
            </div>
            <Footer />
        </>
    )
}