import Footer from "../components/footer";
import Header from "../components/header";
import { motion } from 'framer-motion'

const tablesContent = [
    {
        title: "الدليل الإداري",
        headers: ["الرابط", "الوزارات العراقية"],
        rows: [
            ["https://mod.mil.iq/", "وزارة الدفاع"],
            ["https://moi.gov.iq/", "وزارة الداخلية"],
            ["https://mohesr.gov.iq/", "وزارة التعليم العالي"],
            ["https://moh.gov.iq/", "وزارة الصحة"],
            ["https://mof.gov.iq/", "وزارة المالية"]
        ]
    },
    {
        title: "الجامعات العراقية",
        headers: ["الرابط", "اسم الجامعة"],
        rows: [
            ["https://uobaghdad.edu.iq/", "جامعة بغداد"],
            ["https://nahrainuniv.edu.iq/", "جامعة النهرين"],
            ["https://uokerbala.edu.iq/", "جامعة كربلاء"],
            ["https://uomosul.edu.iq/", "جامعة الموصل"],
            ["https://uobasrah.edu.iq/", "جامعة البصرة"],
            ["https://uokufa.edu.iq/", "جامعة الكوفة"],
            ["https://qu.edu.iq/", "جامعة القادسية"],
            ["https://uoanbar.edu.iq/", "جامعة الأنبار"],
            ["https://tu.edu.iq/", "جامعة تكريت"],
            ["https://uodiyala.edu.iq/", "جامعة ديالى"],
            ["https://utq.edu.iq/", "جامعة ذي قار"],
            ["https://uowasit.edu.iq/", "جامعة واسط"],
            ["https://uomisan.edu.iq/", "جامعة ميسان"],
            ["https://mu.edu.iq/", "جامعة المثنى"],
            ["https://uosamarra.edu.iq/", "جامعة سامراء"],
            ["https://uofallujah.edu.iq/", "جامعة الفلوجة"],
            ["https://uot.edu.iq/", "جامعة تكنولوجيا المعلومات والاتصالات"],
            ["https://uotechnology.edu.iq/", "الجامعة التكنولوجية"]
        ]
    },
    {
        title: "الدوائر الحكومية",
        headers: ["الرابط", "اسم الدائرة"],
        rows: [
            ["https://parliament.iq/", "مجلس النواب العراقي"],
            ["https://fbsa.gov.iq/", "ديوان الرقابة المالية"],
            ["https://ihec.iq/", "المفوضية العليا المستقلة للانتخابات"],
            ["https://invest.gov.iq/", "الهيئة الوطنية للاستثمار"]
        ]
    },
    {
        title: "رئاسة الجمهورية",
        headers: ["الرابط", "اسم الهيئة"],
        rows: [
            ["https://presidency.iq/", "رئيس الجمهورية"],
            ["https://presidency.iq/advisors", "المستشارون"]
        ]
    },
    {
        title: "رئاسة الوزراء",
        headers: ["الرابط", "اسم الهيئة"],
        rows: [
            ["https://pmo.iq/", "رئيس مجلس الوزراء"],
            ["https://mop.gov.iq/", "وزارة التخطيط"]
        ]
    }
];

export default function IraqGuideScreen() {
    const fadeIn = {
        initial: { opacity: 0, y: 20 },
        animate: { opacity: 1, y: 0 },
        transition: { duration: 0.5 }
    }

    return (
        <>
            <Header />
            <div className="content px-4 md:px-8 ">
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.8 }}
                    className="max-w-6xl mx-auto"
                >
                    {tablesContent.map((table, idx) => (
                        <motion.div
                            key={idx}
                            {...fadeIn}
                            transition={{ ...fadeIn.transition, delay: idx * 0.2 }}
                            className="mb-16"
                        >
                            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif py-5 mt-10'>
                                <span className='border-b-2 border-blue-500 text-2xl sm:text-3xl md:text-4xl'>{table.title}</span>
                            </h1>

                            <motion.div
                                initial={{ scale: 0.95 }}
                                animate={{ scale: 1 }}
                                className="overflow-x-auto rounded-lg shadow-xl"
                            >
                                <table className="w-full text-right bg-white">
                                    <thead className="bg-blue-500 text-white">
                                        <tr>
                                            {table.headers.map((header, i) => (
                                                <th key={i} className="px-6 py-4 text-lg font-semibold">
                                                    {header}
                                                </th>
                                            ))}
                                        </tr>
                                    </thead>

                                    <tbody>
                                        {table.rows.map((row, rowIdx) => (
                                            <motion.tr
                                                key={rowIdx}
                                                initial={{ opacity: 0 }}
                                                animate={{ opacity: 1 }}
                                                transition={{ delay: rowIdx * 0.1 }}
                                                className={rowIdx % 2 === 0 ? 'bg-gray-50' : 'bg-white'}
                                            >
                                                <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                                                    <a href={row[0]} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
                                                        زيارة الموقع
                                                    </a>
                                                </td>
                                                <td className="px-6 py-4 text-gray-700 border-b border-gray-200">
                                                    {row[1]}
                                                </td>
                                            </motion.tr>
                                        ))}
                                    </tbody>
                                </table>
                            </motion.div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
            <Footer />
        </>
    )
}
