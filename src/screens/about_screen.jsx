import Header from "../components/header";
import owner from '../assets/owner.jpg';
import coOwner from '../assets/co-owner.jpg';
import structural from '../assets/structural.jpg';
import Footer from "../components/footer";
import AboutItem from "../components/about_item";
import { motion } from "framer-motion";

export default function AboutScreen() {
    return (
        <>
            <Header title={'حول الجامعة'} />

            <motion.h1
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
                className="flex mx-auto max-w-300 text-xl mt-10 px-5 text-[#202020] text-right"
            >
               تتطلع جامعة الامين أن تكون صرحاً علمياً رائداً بما يتناسب ومواكبة التطورات العالمية في جودة التعليم العالي والبحث العلمي وفي خدمة المجتمع العراقي والإقليمي العالمي. تسعى جامعة الامين الى إعــداد مخرجات علمية مؤهلة فــي الاختصاصات العلمية كافة وفق استراتيجية الجامعة، وتعزيز جودة التعليم العالي وفق المعايير العالمية، ودعم البحث العلمي بما يضمن تحقيق التنمية المستدامة، وتوفير مناخ اكاديمي محفز للإبداع والتطور المنشود
            </motion.h1>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'
            >
                <span className='border-b-2 border-blue-500 text-3xl md:text-4xl'>كلمة رئيس الجامعة</span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
            >
                <AboutItem
                    text={'يشكل التعليم رافدا أساسيا من روافد بناء المجتمع الرصين ولذلك اهتمت وزارة التعليم العالي والبحث العلمي بالجوانب الاكاديميةالتي من شأنها الارتقاء بالمستوى العلمي للطالب من خلال المناهج المعاصرة وتوفير البيئة المثالية لذلك وللتعليم الاهلي الدور الفاعل والاساسي في استيعاب عدد كبير من ابنائنا الطلبة و توفير البيئة الدراسية المناسبة حيث تتضمن الجوانب المعنوية و المادية التي تتمثل في المنشأت والقاعات والمختبرات الحديثة فضلآ عن تحديث البرامج والمناهج التي تستخدم وماوصل اليه العالم المتقدم..... ونتوقع مستقبلا زاهرا للتعليم الاهلي يوازي او يفوق دول كثيرة في حيطنا الإقليمي على الاقل ..... والله ولي التوفيق الدكتور مجيد جابر الموسوي'}
                    img={owner}
                />
            </motion.div>

            <motion.h1
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                viewport={{ once: true }}
                className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'
            >
                <span className='border-b-2 border-blue-500 mx-4 text-center text-xl sm:text-3xl md:text-4xl'>
                    كلمة مساعد رئيس الجامعة للشؤون الإدارية والمالية
                </span>
            </motion.h1>

            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
            >
                <AboutItem
                    text={'يشكل التعليم رافدا أساسيا من روافد بناء المجتمع الرصين ولذلك اهتمت وزارة التعليم العالي والبحث العلمي بالجوانب الاكاديميةالتي من شأنها الارتقاء بالمستوى العلمي للطالب من خلال المناهج المعاصرة وتوفير البيئة المثالية لذلك وللتعليم الاهلي الدور الفاعل والاساسي في استيعاب عدد كبير من ابنائنا الطلبة و توفير البيئة الدراسية المناسبة حيث تتضمن الجوانب المعنوية و المادية التي تتمثل في المنشأت والقاعات والمختبرات الحديثة فضلآ عن تحديث البرامج والمناهج التي تستخدم وماوصل اليه العالم المتقدم..... ونتوقع مستقبلا زاهرا للتعليم الاهلي يوازي او يفوق دول كثيرة في حيطنا الإقليمي على الاقل ..... والله ولي التوفيق الدكتور مجيد جابر الموسوي'}
                    img={coOwner}
                />
            </motion.div>

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

            <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.7 }}
                viewport={{ once: true }}
                className="flex flex-col xl:flex-row items-center justify-evenly mt-10"
            >
                <div className="max-w-300 text-right text-xl text-[#202020] p-10">
                    <h1 className="font-bold">: هذه خلاصة لبرامج جامعة الأمين الأكاديمية</h1>
                    <br />
                    <p><span className="text-blue-500">الهندسة والتكنولوجيا:</span> تشمل هذه البرامج درجات البكالوريوس والماجستير في مجالات مثل الهندسة الميكانيكية، الهندسة الكهربائية، الهندسة المدنية، وتكنولوجيا المعلومات</p>
                    <br />
                    <p><span className="text-blue-500">العلوم الطبية :</span> تتضمن برامج الطب والصيدلة والتمريض والعلوم الصحية، مما يتيح للطلاب فرصًا للتخصص في مجالات مختلفة من الرعاية الصحية</p>
                    <br />
                    <p><span className="text-blue-500">العلوم الإنسانية والاجتماعية :</span> تتنوع البرامج في هذا المجال بين اللغات والعلوم الاجتماعية وعلم النفس والإعلام والتواصل، مما يوفر فرصًا للطلاب لاكتساب معرفة واسعة في مجالات الإنسانيات</p>
                    <br />
                    <p><span className="text-blue-500">الأعمال والإدارة :</span> تقدم الجامعة برامج في إدارة الأعمال، والمحاسبة، والتسويق، والإدارة العامة، مما يمكن الطلاب من اكتساب المهارات اللازمة للنجاح في عالم الأعمال</p>
                    <br />
                    <p><span className="text-blue-500">العلوم الطبيعية والتكنولوجيا :</span> تشمل هذه البرامج الفيزياء والكيمياء والبيولوجيا وعلوم الحاسوب، مما يوفر فرصًا للطلاب للتعمق في فهم العالم الطبيعي واستخدام التكنولوجيا في البحث العلمي</p>
                    <br />
                    <p><span className="text-blue-500">الفنون والإبداع :</span> تتضمن هذه البرامج الفنون الجميلة، والأدب، والمسرح، والسينما، وتصميم الأزياء، مما يتيح للطلاب التعبير عن أنفسهم بواسطة الفن والإبداع</p>
                    <br />
                    <p className="font-semibold">هذه هي بعض البرامج الأكاديمية التي تقدمها جامعة الأمين، والتي تسعى من خلالها لتوفير تعليم عالي الجودة وتمكين الطلاب من تحقيق أهدافهم الأكاديمية والمهنية</p>
                </div>
            </motion.div>

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
