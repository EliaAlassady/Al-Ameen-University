import { motion } from "framer-motion";
import { FaBullseye, FaEye, FaFlag } from "react-icons/fa";

const MissionVision = () => {
    const fadeIn = {
        initial: { opacity: 0, y: 30 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.6 }
    };

    const goals = [
        "تطوير بيئة أكاديمية محفزة للإبداع والابتكار",
        "تعزيز البحث العلمي وربطه باحتياجات المجتمع",
        "تنمية القيم الأخلاقية والمهارات القيادية",
        "بناء شراكات استراتيجية مع المؤسسات المحلية والعالمية",
        "تحقيق التميز في مجالات التعليم التقني والمهني",
        "تحقيق التميز في مجالات التعليم التقني والمهني",
    ];

    return (
        <motion.section
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="py-16 px-4 md:px-8"
        >
            <div className="max-w-6xl mx-auto">

                <div className="grid md:grid-cols-2 gap-12 mb-20">
                    <motion.div
                        {...fadeIn}
                        className="p-8 bg-white rounded-2xl shadow-xl border-l-8 border-blue-500"
                    >
                        <div className="flex flex-row-reverse gap-3 items-center mb-6">
                            <FaFlag className="w-12 h-12 text-blue-500 mr-4" />
                            <h3 className="text-2xl font-bold text-gray-800">الرسالة</h3>
                        </div>
                        <p className="text-gray-600 leading-relaxed text-lg text-right">
                            نسعى لتقديم تعليم عالي الجودة يعزز المعرفة ويطور المهارات ويرسخ القيم،
                            ويسهم في بناء مجتمع المعرفة من خلال برامج أكاديمية مبتكرة وبحوث علمية
                            رائدة وشراكات مجتمعية فاعلة.
                        </p>
                    </motion.div>

                    <motion.div
                        {...fadeIn}
                        transition={{ delay: 0.2 }}
                        className="p-8 bg-blue-700 text-white rounded-2xl shadow-xl"
                    >
                        <div className="flex flex-row-reverse gap-3 items-center mb-6 ">
                            <FaEye className="w-12 h-12 text-white mr-4" />
                            <h3 className="text-2xl font-bold">الرؤية</h3>
                        </div>
                        <p className="leading-relaxed text-lg text-right">
                            أن نكون جامعة رائدة في التعليم العالي معترفًا بها إقليميًا وعالميًا
                            في تقديم برامج أكاديمية متميزة وبحوث علمية تسهم في تنمية المجتمع
                            وبناء اقتصاد المعرفة.
                        </p>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    className="mt-20"
                >
                    <div className="flex items-center justify-center mb-12">
                        <FaBullseye className="w-16 h-16 text-blue-500 mr-4" />
                        <h3 className="text-3xl font-bold text-gray-800">أهدافنا الاستراتيجية</h3>
                    </div>

                    <div dir="rtl" className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {goals.map((goal, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, scale: 0.9 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="p-6 bg-white rounded-xl shadow-md hover:shadow-lg transition-shadow"
                            >
                                <div className="flex items-start gap-3">
                                    <div className="w-8 h-8 bg-blue-100 rounded-full flex items-center justify-center mr-3">
                                        <span className="text-blue-600 font-bold">{index + 1}</span>
                                    </div>
                                    <p className="text-gray-700 flex-1 text-right">{goal}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </motion.div>
            </div>
        </motion.section>
    );
};

export default MissionVision;