import { statisticsItem } from "../models/statistics";
import { FaGraduationCap } from "react-icons/fa6";
import { BiSolidCategoryAlt } from "react-icons/bi";
import { IoBookSharp } from "react-icons/io5";
import { SlChemistry } from "react-icons/sl";
import { FaUniversity } from "react-icons/fa";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiChalkboardTeacherBold } from "react-icons/pi";
import { GiTeacher } from "react-icons/gi";
import { RiTeamLine } from "react-icons/ri";
import { BsPersonLinesFill } from "react-icons/bs";
import { PiStudentFill } from "react-icons/pi";



export const statistics = [
    new statisticsItem(FaGraduationCap , 'الخريجين', 739),
    new statisticsItem(BiSolidCategoryAlt , 'الاختصاصات', 25),
    new statisticsItem(IoBookSharp , 'البحوث المنشورة', 70),
    new statisticsItem(SlChemistry , 'المختبرات', 45),
    new statisticsItem(FaUniversity , 'الكليات', 12),
    new statisticsItem(FaChalkboardTeacher , 'المدرسين', 100),
    new statisticsItem(PiChalkboardTeacherBold , 'استاذ مساعد', 40),
    new statisticsItem(GiTeacher , 'استاذ', 20),
    new statisticsItem(RiTeamLine , 'الكادر التدريسي', 2700),
    new statisticsItem(BsPersonLinesFill , 'الموظفين', 111),
    new statisticsItem(PiStudentFill , 'الطلبة', 1200),
];