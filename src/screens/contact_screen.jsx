import Footer from "../components/footer";
import Header from "../components/header";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa";



export default function ContactScreen() {
    return (
        <>
            <Header title={'اتصل بنا'} />
            <div className=" flex flex-wrap justify-center gap-6 w-full max-w-screen-2xl mx-auto mt-10">
                <div className="perspective-1000 bg-white
          w-[calc(100%-1.5rem)]
          sm:w-[calc(50%-1.5rem)]
          md:w-[calc(50%-1.5rem)]
          lg:w-[calc(33.333%-1.5rem)]
          xl:w-[calc(25%-1.5rem)] 
          h-[300px] rounded-xl
          transform transition-all duration-300 ease-in-out 
          hover:scale-105 hover:shadow-xl hover:bg-blue-50
          hover:-translate-y-2
          active:scale-105 active:shadow-xl active:bg-blue-50 active:-translate-y-2" >
                    <div className=" h-full flex flex-col items-center justify-center gap-3">
                        <span> <FaPhone className=" text-blue-500 size-10" /> </span>
                        <h1 className=" font-bold text-3xl text-[#202020]">رقم الهاتف</h1>
                        <p className="  font-semibold text-xl text-gray-500">07715611622</p>
                    </div>
                </div>
                <div className="perspective-1000 bg-white
          w-[calc(100%-1.5rem)]
          sm:w-[calc(50%-1.5rem)]
          md:w-[calc(50%-1.5rem)]
          lg:w-[calc(33.333%-1.5rem)]
          xl:w-[calc(25%-1.5rem)] 
          h-[300px] rounded-xl
          transform transition-all duration-300 ease-in-out 
          hover:scale-105 hover:shadow-xl hover:bg-blue-50
          hover:-translate-y-2
          active:scale-105 active:shadow-xl active:bg-blue-50 active:-translate-y-2" >
                    <div className=" h-full flex flex-col items-center justify-center gap-3">
                        <span> <MdEmail className=" text-blue-500 size-10" /> </span>
                        <h1 className=" font-bold text-3xl text-[#202020]">البريد اللالكتروني</h1>
                        <p className="  font-semibold text-xl text-gray-500">eliaalassady@gmail.com</p>
                    </div>
                </div>
                <div className="perspective-1000 bg-white
          w-[calc(100%-1.5rem)]
          sm:w-[calc(50%-1.5rem)]
          md:w-[calc(50%-1.5rem)]
          lg:w-[calc(33.333%-1.5rem)]
          xl:w-[calc(25%-1.5rem)] 
          h-[300px] rounded-xl
          transform transition-all duration-300 ease-in-out 
          hover:scale-105 hover:shadow-xl hover:bg-blue-50
          hover:-translate-y-2
          active:scale-105 active:shadow-xl active:bg-blue-50 active:-translate-y-2" >
                    <div className=" h-full flex flex-col items-center justify-center gap-3">
                        <span> <FaLocationDot className=" text-blue-500 size-10" /> </span>
                        <h1 className=" font-bold text-3xl text-[#202020]">العنوان</h1>
                        <p className="  font-semibold text-xl text-center text-gray-500">بغداد - الوزيرية - خلف السفارة التركية</p>
                    </div>
                </div>

            </div>
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'>
                <span className=' border-b-2 border-blue-500 text-2xl sm:text-3xl md:text-4xl '>يمكنك مراسلتنا في حال وجود اي استفسار</span>
            </h1>
            <div className="min-h-100 mt-10 py-12 px-4 sm:px-6 lg:px-8">
                <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
                    <h2 className="text-3xl font-bold text-[#202020] mb-8 text-center">
                        نموذج الاتصال
                    </h2>

                    <form className="space-y-6">

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                                    الاسم الكامل
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition-all"
                                    placeholder="علي محمد"
                                />
                            </div>

                            <div>
                                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                    البريد الإلكتروني
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition-all"
                                    placeholder="example@domain.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label htmlFor="address" className="block text-sm font-medium text-gray-700 mb-2">
                                    العنوان
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    name="address"
                                    required
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition-all"
                                    placeholder="الوزيرية - خلف السفارة التركية"
                                />
                            </div>

                            <div>
                                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                    رقم الهاتف
                                </label>
                                <input
                                    type="tel"
                                    id="phone"
                                    name="phone"
                                    required
                                    pattern="[0-9]{10}"
                                    className="w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition-all"
                                    placeholder="07XXXXXXXX"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                الرسالة
                            </label>
                            <textarea
                                id="message"
                                name="message"
                                rows="4"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              hover:border-blue-400 transition-all resize-none"
                                placeholder="اكتب رسالتك هنا..."
                            ></textarea>
                        </div>

                        <button
                            type="submit"
                            className="w-full md:w-auto px-8 py-3 bg-blue-600 text-white 
            font-medium rounded-md hover:bg-blue-700 focus:outline-none 
            focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 
            transition-all transform hover:scale-105 active:scale-95"
                        >
                            إرسال الرسالة
                        </button>
                    </form>
                </div>
            </div>
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-5 mt-10'>
                <span className=' border-b-2 border-blue-500 text-2xl sm:text-3xl md:text-4xl'>موقع الجامعة</span>
            </h1>
            <div className="w-full px-4 sm:px-8 md:px-16 lg:px-32 py-8">
                <div className="mt-8 rounded-lg overflow-hidden shadow-lg">
                    <div className="w-full h-96">
                        <iframe
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3349.999999999999!2d44.385927143136556!3d33.35915033213905!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzPCsDIxJzMyLjkiTiA0NMKwMjMnMDkuMyJF!5e0!3m2!1sen!2siq!4v1620000000000!5m2!1sen!2siq"
                            width="100%"
                            height="100%"
                            style={{ border: 0 }}
                            allowFullScreen
                            loading="lazy"
                            title="Al-Ameen University"
                            className="rounded-lg"
                        ></iframe>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}