import Header from "../components/header";
import { lecture } from "../constants/department";
import { useState } from "react";
import Activites from "../components/activites";
import News from "../components/news";
import Footer from "../components/footer";
import { TbDeviceVisionPro } from "react-icons/tb";
import { GoGoal } from "react-icons/go";
import { PiReadCvLogo } from "react-icons/pi";

export default function DepartmentScreen({ departments }) {
    const [selectedIndex, setSelectedIndex] = useState(0);

    const department = [
        {
            title: 'الرؤية',
            Icon: TbDeviceVisionPro,
            text: departments.vision,
        },
        {
            title: 'الاهداف',
            Icon: GoGoal,
            text: departments.goals,
        },
        {
            title: 'فرص العمل للخريجين',
            Icon: PiReadCvLogo,
            text: departments.employability,
        },
    ]

    return (
        <>
            <Header title={departments.departmentName} />
            <div className=" w-screen flex flex-col md:flex-row items-center justify-evenly p-10">
                <img src={departments.departmentImage} className='size-60 sm:size-80 md:size-70 lg:size-100' alt="" loading='lazy' />
                <h1 className=" px-5 lg:w-1/2 text-[16px] sm:text-xl md:text-2xl lg:text-2xl xl:text-3xl py-8 text-center font-semibold text-[#202020]">
                    {departments.description}
                </h1>
            </div>

            <div className=" w-screen flex flex-col items-center justify-center gap-5 mt-5 md:mt-20">
                <div className=" w-full flex flex-wrap flex-row-reverse items-center justify-center gap-5">
                    {department.map((e, index) => (
                        <div
                            key={index}
                            onClick={() => setSelectedIndex(index)}
                            className={`flex items-center justify-center gap-3 border-blue-500 border-2 px-6 py-3 mt-2
          hover:bg-blue-500 hover:text-white active:bg-blue-500 active:text-white transition-all text-[16px] md:text-xl
          duration-300 cursor-pointer rounded-lg ${selectedIndex === index ? "bg-blue-500 text-white" : "hover:bg-blue-500 hover:text-white"}`
                            }
                        >
                            <h1>
                                {e.title}
                            </h1>
                            <span>
                                <e.Icon />
                            </span>
                        </div>
                    )
                    )}
                </div>
                {selectedIndex !== null && (
                    <div className="my-5 p-4 border-2 border-blue-500 rounded-lg w-3/4 text-center">
                        <p className="text-lg text-gray-800">{department[selectedIndex].text}</p>
                    </div>
                )}
            </div>
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-10 md:pt-20'>
                <span className=' border-b-2 border-blue-500'>استكشف محاضراتنا</span>
            </h1>
            <div className='min-h-100 p-8 flex justify-center items-center ' >
                <div className="flex flex-wrap flex-row-reverse justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                    {lecture.map((e, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer bg-white text-[#202020]
                              w-45 h-[180px]
                              sm:h-[250px]
                              sm:w-60
                              md:w-[calc(33.333%-1.5rem)] 
                              lg:w-[calc(25%-1.5rem)] 
                              xl:w-[calc(20%-3.0rem)] 
                              flex flex-col clip-custom3 gap-2 items-center 
                              justify-center font-bold text-xl
                              transition-all duration-300 ease-in-out
                              hover:-translate-y-2 hover:translate-x-2
                              active:-translate-y-2 active:translate-x-2"
                        >
                            <span>{<e.Icon className="text-blue-500 size-8 sm:size-10" />}</span>
                            <span className='font-bold text-center text-[16px] px-10 sm:text-xl'>{e.stage}</span>
                        </div>
                    ))}
                </div>
            </div >
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-10'>
                <span className=' border-b-2 border-blue-500'>اكتشف مناهجنا</span>
            </h1>
            <div className='min-h-100 p-8 flex justify-center items-center ' >
                <div className="flex flex-wrap flex-row-reverse justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                    {lecture.map((e, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer bg-white text-[#202020]
                            w-45 h-[180px]
                            sm:h-[250px]
                            sm:w-60
                            md:w-[calc(33.333%-1.5rem)] 
                            lg:w-[calc(25%-1.5rem)] 
                            xl:w-[calc(20%-3.0rem)] 
                            flex flex-col clip-custom3 gap-2 items-center 
                            justify-center font-bold text-xl
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-2 hover:translate-x-2
                            active:-translate-y-2 active:translate-x-2"
                        >
                            <span>{<e.Icon className="text-blue-500 size-8 sm:size-10" />}</span>
                            <span className='font-bold text-center text-[16px] px-10 sm:text-xl'>{e.stage}</span>
                        </div>
                    ))}
                </div>
            </div >
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-10 md:pt-20'>
                <span className=' border-b-2 border-blue-500'>تعرف على كادرنا التدريسي</span>
            </h1>
            <div className='min-h-100 p-8 flex justify-center items-center ' >
                <div className="flex flex-wrap flex-row-reverse justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                    {lecture.map((e, index) => (
                        <div
                            key={index}
                            className="relative cursor-pointer bg-white text-[#202020]
                            w-100 h-[220px]
                            sm:h-[250px]
                            sm:w-[calc(50%-1.5rem)] 
                            md:w-[calc(50%-1.5rem)] 
                            lg:w-[calc(50%-1.5rem)] 
                            xl:w-[calc(33.3%-1.5rem)] 
                            flex flex-col gap-2 items-center
                            justify-center font-bold text-xl
                            transition-all duration-300 ease-in-out
                            hover:-translate-y-2 hover:translate-x-2
                            active:-translate-y-2 active:translate-x-2"
                        >
                            <span>{<e.Icon className="text-blue-500 size-8 sm:size-10" />}</span>
                            <span className='font-bold text-center text-[16px] px-10 sm:text-xl'>{e.stage}</span>
                        </div>
                    ))}
                </div>
            </div>
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-10 md:pt-20'>
                <span className=' border-b-2 border-blue-500'>اخر اخبار القسم</span>
            </h1>
            <Activites departmentId={departments.id ?? 0} />
            <h1 className='text-4xl font-semibold text-[#202020] flex justify-center font-serif pt-10'>
                <span className=' border-b-2 border-blue-500'>اخر اعلانات القسم</span>
            </h1>
            <News />
            <Footer />
        </>
    );
}