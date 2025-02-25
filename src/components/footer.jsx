import logo from '../assets/logo.webp'
import { IoIosCall } from "react-icons/io";
import { ImLocation2 } from "react-icons/im";
import { MdEmail } from "react-icons/md";

export default function Footer() {
    return (
        <>
            <div className="relative bg-blue-500 w-full">
                <div className="absolute top-0 left-0 w-full h-20 bg-blue-500 clip-sharp"></div>
            </div>
            <footer className="relative bg-blue-500 text-white py-10 mt-20">
                <div className="absolute top-0 left-0 w-full h-12 bg-blue-500"
                    style={{ clipPath: "polygon(0 0, 100% 100%, 100% 0)" }} />

                <div className="container mx-auto px-4 lg:px-8">
                    <div className="flex flex-wrap md:justify-center xl:justify-between gap-8 lg:gap-0">

                        <div className="w-full lg:w-auto flex flex-col lg:flex-row gap-8 lg:gap-16 xl:gap-24">

                            <div className="w-full lg:w-auto text-center lg:text-right">
                                <h1 className="border-b-2 p-1 text-xl sm:text-2xl lg:text-2xl">معلومات اضافية</h1>
                                <div className="mt-3 space-y-2">
                                    {['الفيسبوك', 'الانستغرام', 'الواتساب', 'التليجرام', 'منصة اكس'].map((item, idx) => (
                                        <p key={idx} className="cursor-pointer hover:text-blue-200 transition-colors text-sm sm:text-xl lg:text-base">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-auto text-center lg:text-right">
                                <h1 className="border-b-2 p-1 text-xl sm:text-2xl lg:text-2xl">روابط اخرى</h1>
                                <div className="mt-3 space-y-2">
                                    {['التسجيل وشؤون الطلبة', 'التعليم المستمر', 'المكتبة الالكترونية', 'المكتب الاستشاري', 'بولونيا', 'فريق العمل'].map((item, idx) => (
                                        <p key={idx} className="cursor-pointer hover:text-blue-200 transition-colors text-sm sm:text-xl lg:text-base">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>

                            <div className="w-full lg:w-auto text-center lg:text-right">
                                <h1 className="border-b-2 p-1 text-xl sm:text-2xl lg:text-2xl">الروابط الرئيسية</h1>
                                <div className="mt-3 space-y-2">
                                    {['الرئيسية', 'الكليات', 'الاخبار', 'تشكيلات الجامعة', 'النشاطات', 'حول الجامعة'].map((item, idx) => (
                                        <p key={idx} className="cursor-pointer hover:text-blue-200 transition-colors text-sm sm:text-xl lg:text-base">
                                            {item}
                                        </p>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="w-full lg:w-auto flex flex-col lg:flex-row items-center  gap-8 lg:gap-16">

                            <div className="order-2 lg:order-1 space-y-4 text-center lg:text-right">
                                {[
                                    { text: '07715611622', icon: IoIosCall },
                                    { text: 'بغداد/الوزيرية/قرب السفارة التركية', icon: ImLocation2 },
                                    { text: 'eliaalassady@gmail.com', icon: MdEmail }
                                ].map((item, idx) => (
                                    <div key={idx} className="flex lg:flex-row items-center justify-end text-right gap-2 lg:gap-3">
                                        <p className="text-sm sm:text-xl lg:text-base">{item.text}</p>
                                        <span className="bg-white p-1 rounded-full text-blue-500">
                                            <item.icon className="w-5 h-5 lg:w-6 lg:h-6" />
                                        </span>

                                    </div>
                                ))}
                            </div>
                            <div className="order-1 lg:order-2">
                                <img className="w-32 h-32 sm:w-40 sm:h-40 lg:w-40 lg:h-40 object-contain" src={logo} alt="شعار الجامعة" />
                            </div>
                        </div>
                    </div>

                    <div className="mt-8 pt-4 border-t border-white/30 text-center">
                        <p className="text-sm lg:text-base">
                            حقوق النشر alameen.edu.iq | ©2025 | جميع الحقوق محفوظة
                        </p>
                    </div>
                </div>
            </footer>
        </>
    )
}