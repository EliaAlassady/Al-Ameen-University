import Header from "../components/header";
import owner from '../assets/owner.jpg';
import coOwner from '../assets/co-owner.jpg';
import structural from '../assets/structural.jpg';
import Footer from "../components/footer";
import AboutItem from "../components/about_item";
import { motion } from "framer-motion";
import AcademicPrograms from "../components/programs";
import MissionVision from "../components/mission_vision";

export default function AboutScreen() {
    const fadeIn = {
        initial: { opacity: 0, y: 50 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const staggerContainer = {
        animate: {
            transition: {
                staggerChildren: 0.2
            }
        }
    };
    return (
        <>
            <Header title={'حول الجامعة'} />

            <motion.article
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row items-center gap-8 mb-20 justify-center mx-10 mt-10"
            >
                <motion.img
                    variants={fadeIn}
                    src={owner}
                    alt="رئيس الجامعة"
                    className="w-64 h-64 rounded-full object-cover shadow-xl lg:order-1"
                />

                <motion.div variants={fadeIn} className="max-w-5xl flex flex-col items-end">
                    <h2 className="text-2xl md:text-3xl font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">كلمة رئيس الجامعة</h2>
                    <p className="text-gray-600 leading-relaxed text-lg text-right">
                        جامعة الامين من الجامعات الفتية تاسست سنة ٢٠١٧..وهي تسعى الى ان تكون من الجامعات العراقية وتحقيق التميز في التعليم العالي والبحث العلمي وخدمة المجتمع ايمانا منا بان الجامعة مصدر اشعاع فكري وحضاري و هي اداة ازدهار للمجتمع لان المجتمع في تطوره يحتاج لنتاج الجامعة بما تقدمه من ملاكات اكاديمية وعلمية فلم تعد وظيفة الجامعة مجرد تهياة الافراد المؤهلين لقيادة شؤون البلاد وانما تهياة الانسان لمواجهة التغييرات السريعة وتحقيق التنمية بتسخير الامكانات المادية والبشرية وادارتها بشكل يحقق اهداف الجامعة عن طريق تقديم تعليم اكاديمي عالي الجودة يلبي متطلبات سوق العمل والمساهمة في التنمية الاقتصادية والاجتماعية وتقديمها مجموعة متنوعة من البرامج الاكاديمية في مختلف المجالات: العلوم الطبيعية والاجتماعية والطبية والهندسية فضلا عن مجموعة من البرامج والانشطة منها:تقديم خدمات التعلبم والبحث العلمي للمجتمع عن طريق تحديث وتطوير بيئة البحث العلمي في الجامعة وتنظيم الانشطة الثقافية والفنية والرياضية والاجتماعيةوتقديم المساعدات الانسانية للمجتمع وتلتزم الجامعة بمعاير الجودة في حقولها المتعددة : جودة التدريسيين وجودة المناهج وجودة الطلبة وجودة البنية التحتية للجامعة وجودة الادارة والتخطيط وخلق مناخ مؤسسي واكاديمي يشجع على فكرة العمل الجماعي وروح فريق العمل وتنمية القدرة التنافسية في مجال التعليم والبحث بين الجامعات العراقية والعربية وتفعيل المشاركة الفعالة في الندوات والمؤتمرات المحلية والدولية عن طريق التوامة ومذكرات التفاهم والاتفاقيات الثنائيةوبذلك تمكن الجامعة من تبؤ مكانة رائدة سواء على المستوى المحلي والعربي والدولي
                    </p>
                </motion.div>
            </motion.article>

            <motion.article
                variants={staggerContainer}
                initial="initial"
                whileInView="animate"
                viewport={{ once: true }}
                className="flex flex-col lg:flex-row-reverse justify-center items-center gap-8 mx-10 mb-10"
            >
                <motion.img
                    variants={fadeIn}
                    src={coOwner}
                    alt="مساعد رئيس الجامعة"
                    className="w-64 h-64 rounded-full object-cover shadow-xl"
                />

                <motion.div variants={fadeIn} className="max-w-2xl flex flex-col items-end">
                    <h2 className="text-2xl md:text-3xl text-center font-semibold text-gray-800 mb-4 border-b-2 border-blue-500 pb-2">كلمة مساعد الرئيس للشؤون الإدارية</h2>
                    <p className="text-gray-600 leading-relaxed text-lg text-right">
                        يشكل التعليم رافدا أساسيا من روافد بناء المجتمع الرصين ولذلك اهتمت وزارة التعليم العالي والبحث العلمي بالجوانب الاكاديميةالتي من شأنها الارتقاء بالمستوى العلمي للطالب من خلال المناهج المعاصرة وتوفير البيئة المثالية لذلك وللتعليم الاهلي الدور الفاعل والاساسي في استيعاب عدد كبير من ابنائنا الطلبة و توفير البيئة الدراسية المناسبة حيث تتضمن الجوانب المعنوية و المادية التي تتمثل في المنشأت والقاعات والمختبرات الحديثة فضلآ عن تحديث البرامج والمناهج التي تستخدم وماوصل اليه العالم المتقدم..... ونتوقع مستقبلا زاهرا للتعليم الاهلي يوازي او يفوق دول كثيرة في حيطنا الإقليمي على الاقل ..... والله ولي التوفيق الدكتور مجيد جابر الموسوي
                    </p>
                </motion.div>
            </motion.article>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'
            >
                <span className='border-b-2 border-blue-500 text-3xl mx-4 text-center sm:text-3xl md:text-4xl'>
                    البرامج الأكاديمية
                </span>
            </motion.h1>

            <AcademicPrograms />

            <MissionVision />

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'
            >
                <span className='border-b-2 border-blue-500 text-3xl mx-4 text-center sm:text-3xl md:text-4xl'>
                    هيكلية الجامعة
                </span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col xl:flex-row items-center justify-evenly mt-10"
            >
                <motion.img
                    initial={{ opacity: 0, scale: 0.9 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    viewport={{ once: true }}
                    src={structural}
                    alt="University Structure"
                    className="px-10 mt-10 mx-50 xl:px-0 rounded-2xl w-screen"
                />
            </motion.div>

            <Footer />
        </>
    );
}
