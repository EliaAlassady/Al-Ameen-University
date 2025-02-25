import { College } from "../models/colleges";
import { FaBriefcaseMedical } from "react-icons/fa6";
import { MdEngineering } from "react-icons/md";
import { MdBiotech } from "react-icons/md";
import { RiUserSettingsFill } from "react-icons/ri";
import { MdScience } from "react-icons/md";
import { GiArtilleryShell } from "react-icons/gi";
import { RiAdminFill } from "react-icons/ri";
import { FaQuran } from "react-icons/fa";
import { GrMultimedia } from "react-icons/gr";
import { MdPerson } from "react-icons/md";

export const colleges = [
    new College(FaBriefcaseMedical, 'الكليات الطبية'),
    new College(MdBiotech, 'كلية التقنية'),
    new College(MdEngineering, 'كلية الهندسة'),
    new College(RiUserSettingsFill, 'الكليات التقنية الهندسية'),
    new College(MdScience, 'كلية العلوم'),
    new College(GiArtilleryShell, 'كلية الفنون الجميلة'),
    new College(RiAdminFill, 'كلية الادارة والاقتصاد'),
    new College(FaQuran, 'كلية الفقه'),
    new College(GrMultimedia, 'كلية الاداب'),
    new College(MdPerson, 'الكليات الإنسانية'),
]