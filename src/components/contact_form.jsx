export default function ContactForm({ title, text }) {
    return (
        <div className="min-h-100 mt-10 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl mx-auto bg-white rounded-lg shadow-md p-6 md:p-8">
                <h2 className="text-3xl font-bold text-[#202020] mb-8 text-center">
                    {title}
                </h2>

                <form className="space-y-6">

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label htmlFor="name" className="block text-sm font-medium text-right text-gray-700 mb-2">
                                الاسم الكامل
                            </label>
                            <input
                                type="text"
                                id="name"
                                name="name"
                                required
                                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition-all text-right"
                                placeholder="علي محمد"
                            />
                        </div>

                        <div>
                            <label htmlFor="email" className="block text-sm font-medium text-right text-gray-700 mb-2">
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
                            <label htmlFor="address" className="block text-sm font-medium text-right text-gray-700 mb-2">
                                العنوان
                            </label>
                            <input
                                type="text"
                                id="address"
                                name="address"
                                required
                                className="w-full px-4 py-2 border text-right border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition-all"
                                placeholder="الوزيرية - خلف السفارة التركية"
                            />
                        </div>

                        <div>
                            <label htmlFor="phone" className="block text-sm font-medium text-right text-gray-700 mb-2">
                                رقم الهاتف
                            </label>
                            <input
                                type="tel"
                                id="phone"
                                name="phone"
                                required
                                pattern="[0-9]{11}"
                                className="w-full px-4 py-2 border border-gray-300 rounded-md 
                focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
                hover:border-blue-400 transition-all"
                                placeholder="07XXXXXXXX"
                            />
                        </div>
                    </div>

                    <div>
                        <label htmlFor="message" className="block text-sm font-medium text-right text-gray-700 mb-2">
                            {text}
                        </label>
                        <textarea
                            id="message"
                            name="message"
                            rows="4"
                            required
                            className="w-full px-4 py-2 border border-gray-300 rounded-md 
              focus:ring-2 focus:ring-blue-500 focus:border-blue-500 
              hover:border-blue-400 transition-all text-right resize-none"
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
    )
}