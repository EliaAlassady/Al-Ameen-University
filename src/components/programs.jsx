import { motion } from "framer-motion";

export const AcademicPrograms = () => {
    const programs = [
        {
            title: "الهندسة والتكنولوجيا",
            content: "تشمل هذه البرامج درجات البكالوريوس والماجستير في مجالات مثل الهندسة الميكانيكية، الهندسة الكهربائية، الهندسة المدنية، وتكنولوجيا المعلومات"
        },
        {
            title: "العلوم الطبية",
            content: "تتضمن برامج الطب والصيدلة والتمريض والعلوم الصحية، مما يتيح للطلاب فرصًا للتخصص في مجالات مختلفة من الرعاية الصحية"
        },
        {
            title: "العلوم الإنسانية والاجتماعية",
            content: "تتنوع البرامج في هذا المجال بين اللغات والعلوم الاجتماعية وعلم النفس والإعلام والتواصل، مما يوفر فرصًا للطلاب لاكتساب معرفة واسعة في مجالات الإنسانيات"
        },
        {
            title: "الأعمال والإدارة",
            content: "تقدم الجامعة برامج في إدارة الأعمال، والمحاسبة، والتسويق، والإدارة العامة، مما يمكن الطلاب من اكتساب المهارات اللازمة للنجاح في عالم الأعمال"
        },
        {
            title: "العلوم الطبيعية والتكنولوجيا",
            content: "تشمل هذه البرامج الفيزياء والكيمياء والبيولوجيا وعلوم الحاسوب، مما يوفر فرصًا للطلاب للتعمق في فهم العالم الطبيعي واستخدام التكنولوجيا في البحث العلمي"
        },
        {
            title: "الفنون والإبداع",
            content: "تتضمن هذه البرامج الفنون الجمينة، والأدب، والمسرح، والسينما، وتصميم الأزياء، مما يتيح للطلاب التعبير عن أنفسهم بواسطة الفن والإبداع"
        }
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            className="py-12 px-4 md:px-8 lg:px-16"
        >

            <div dir="rtl" className="grid md:grid-cols-2 gap-6 max-w-6xl mx-auto">
                {programs.map((program, index) => (
                    <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: index * 0.1 }}
                        className="p-6 bg-white rounded-xl shadow-lg hover:shadow-xl transition-shadow duration-300 border-l-4 border-blue-500"
                    >
                        <div className="flex items-start mb-3">
                            <svg
                                className="w-6 h-6 text-blue-500 mr-2 flex-shrink-0"
                                fill="none"
                                stroke="currentColor"
                                viewBox="0 0 24 24"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={2}
                                    d="M5 13l4 4L19 7"
                                />
                            </svg>
                            <h3 className="text-xl font-semibold text-blue-600 ">
                                {program.title}
                            </h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-right">
                            {program.content}
                        </p>
                    </motion.div>
                ))}
            </div>

            <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="mt-12 p-4 bg-blue-50 rounded-lg border border-blue-200 text-center text-gray-700 max-w-3xl mx-auto text-lg italic"
            >
                هذه هي بعض البرامج الأكاديمية التي تقدمها جامعة الأمين، والتي تسعى من خلالها لتوفير تعليم عالي الجودة وتمكين الطلاب من تحقيق أهدافهم الأكاديمية والمهنية
            </motion.p>
        </motion.section>
    );
};

export default AcademicPrograms;