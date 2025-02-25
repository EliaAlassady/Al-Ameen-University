import { NavBarItem, MenuItem } from "../models/navbar"
import { FaBriefcaseMedical } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { MdScience } from "react-icons/md";
import { GiArtilleryShell } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { FaQuran } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import { MdPerson } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdLocalActivity } from "react-icons/md";
import { MdHighQuality } from "react-icons/md";
import { RiWomenLine } from "react-icons/ri";
import { FaBuilding } from "react-icons/fa6";
import { FaBuysellads } from "react-icons/fa";
import { IoGitPullRequestSharp } from "react-icons/io5";
import { IoBag } from "react-icons/io5";
import { FaInfoCircle } from "react-icons/fa";
import HomeScreen from "../screens/home_screen";



export const navData = [
    new NavBarItem("الرئيسية", false, [], '/'),
    new NavBarItem("الكليات", true, [
        new MenuItem("الكليات الطبية", FaBriefcaseMedical, true, ["College of Dentistry", "College of Pharmacy"]),
        new MenuItem("الكليات التقنية الصحية والطبية", MdEngineering, true, ["X-ray and sonar techniques", "Anesthesia techniques", "Laser cosmetic techniques", "Optics techniques"]),
        new MenuItem("كلية الهندسة", MdBiotech, true, ["Cyber ​​security engineering", "Artificial intelligence engineering", "Biomedical engineering", "Civil engineering"]),
        new MenuItem("كلية العلوم", MdScience, true, ["Life sciences", "Medical physics", "Forensic evidence"]),
        new MenuItem("كلية الفنون الجميلة", GiArtilleryShell, true, ["Design", "Fine art", "Audio and visual"]),
        new MenuItem("كلية الادارة والاقتصاد", RiAdminFill, true, ["accounting", "Business Administration"]),
        new MenuItem("كلية الفقه", FaQuran, true, ["Sciences of the Qur’an", "Jurisprudence"]),
        new MenuItem("كلية الاداب", GrMultimedia, true, ["Media and journalism"]),
        new MenuItem("الكليات الانسانية", MdPerson, true, ["College of Physical Education and Sports Sciences", "College of Law"]),
        new MenuItem("كلية التقنية الهندسية", RiUserSettingsFill, true, ["Cybersecurity technology engineering", "Computer technology engineering", "Medical device technology engineering", "Building and construction technology engineering"]),
    ], '/colleges'),
    new NavBarItem("الاخبار", true, [
        new MenuItem("اخبار الجامعة", MdHighQuality),
    ], '/news'),
    new NavBarItem("تشكيلات الجامعة", true, [
        new MenuItem("قسم الشؤون الادارية والمالية", MdHighQuality),
        new MenuItem("قسم ضمان الجودة", MdHighQuality),
        new MenuItem("قسم الاعلام ولاتصال الحكومي", RiWomenLine),
        new MenuItem("قسم شؤون المرأة", RiWomenLine),
        new MenuItem("قسم شؤون الديوان", FaBuilding),
        new MenuItem("اعلانات الطلبة", FaBuysellads),
        new MenuItem("طلب منحة دراسية", IoGitPullRequestSharp),
        new MenuItem("طلب وظيفة", IoBag),
    ]),
    new NavBarItem("النشاطات", true, [
        new MenuItem("نشاطات الجامعة", MdLocalActivity),
        new MenuItem("نشاطات الطلبة", MdLocalActivity),
    ], '/activities'),

    new NavBarItem("حول", true, [
        new MenuItem("حول الجامعة", FaInfoCircle, false, [], '/about'),
        new MenuItem("حول فريق العمل", FaInfoCircle, false, [], '/about'),
    ]),

    new NavBarItem("الاتصال", false, [], '/contact'),
];

export const colleges = [
    new MenuItem("Medical colleges", FaInfoCircle, true, ["College of Dentistry", "College of Pharmacy"]),
    new MenuItem("Technical colleges", FaInfoCircle, true, ["X-ray and sonar techniques", "Anesthesia techniques", "Laser cosmetic techniques", "Optics techniques"]),
    new MenuItem("College of Engineering", FaInfoCircle, true, ["Cyber ​​security engineering", "Artificial intelligence engineering", "Biomedical engineering", "Civil engineering"]),
    new MenuItem("College of Science", FaInfoCircle, true, ["Life sciences", "Medical physics", "Forensic evidence"]),
    new MenuItem("College of Fine Arts", FaInfoCircle, true, ["Design", "Fine art", "Audio and visual"]),
    new MenuItem("College of Administration and Economics", FaInfoCircle, true, ["accounting", "Business Administration"]),
    new MenuItem("College of Jurisprudence", FaInfoCircle, true, ["Sciences of the Qur’an", "Jurisprudence"]),
    new MenuItem("College of Arts", FaInfoCircle, true, ["Media and journalism"]),
    new MenuItem("Humanities colleges", FaInfoCircle, true, ["College of Physical Education and Sports Sciences", "College of Law"]),
    new MenuItem("College of Engineering Technology", FaInfoCircle, true, ["Cybersecurity technology engineering", "Computer technology engineering", "Medical device technology engineering", "Building and construction technology engineering"]),
];