import Intro from '../components/intro';
import Statistics from '../components/statistics';
import ElectronicPortals from '../components/electronic_portals';
import Colleges from '../components/colleges';
import Activites from '../components/activites';
import News from '../components/news';
import Ads from '../components/ads';
import Album from '../components/album';
import Footer from '../components/footer';


export default function HomeScreen() {

    return (
        <>
            <Intro />
            <Statistics />
            <ElectronicPortals />

            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-2'>
                <span className=' border-b-2 border-blue-500'>الكليات</span>
            </h1>
            <Colleges minH={'min-h-200'} />

            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5'>
                <span className=' border-b-2 border-blue-500'>النشاطات</span>
            </h1>
            <Activites />


            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5'>
                <span className=' border-b-2 border-blue-500'>الاخبار</span>
            </h1>
            <News />



            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5'>
                <span className=' border-b-2 border-blue-500'>الاعلانات</span>
            </h1>
            <Ads />

            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5'>
                <span className=' border-b-2 border-blue-500'>البوم الصور</span>
            </h1>
            <Album />

            <Footer />
        </>
    );
}
