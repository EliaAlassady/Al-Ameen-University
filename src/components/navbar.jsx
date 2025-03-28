import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Menu, X } from 'react-feather';
import { Link } from 'react-router-dom';
import collegeController from '../controllers/college';

const Navbar = () => {
    const [dropdownOpen, setDropdownOpen] = useState('');
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const { colleges, isLoading } = collegeController();

    const navData = [
        { title: 'الرئيسية', hasMenu: false, path: '/' },
        {
            title: 'الكليات',
            hasMenu: true,
            menu: colleges.map((college) => ({
                title: college.collegeName,
                path: college.path,
                icon: ChevronDown,
            })),
        },
        {
            title: 'الاخبار',
            hasMenu: true,
            menu: [
                { title: 'اخبار الجامعة', path: '/university_news', icon: ChevronDown },
                { title: 'اخبار الطلبة', path: '/student_news', icon: ChevronDown },
            ],
        },
        {
            title: 'النشاطات',
            hasMenu: true,
            menu: [
                { title: 'نشاطات الجامعة', path: '/university_activities', icon: ChevronDown },
                { title: 'نشاطات الطلبة', path: '/student_activities', icon: ChevronDown },
            ],
        },
        {
            title: "تشكيلات الجامعة", hasMenu: true, menu: [
                { title: "قسم الشؤون الادارية والمالية", path: '/aaf_affairs', icon: ChevronDown },
                { title: "قسم ضمان الجودة", icon: ChevronDown },
                { title: "قسم الاعلام ولاتصال الحكومي", icon: ChevronDown },
                { title: "قسم شؤون المرأة", icon: ChevronDown },
                { title: "قسم شؤون الديوان", icon: ChevronDown },
                { title: "اعلانات الطلبة", icon: ChevronDown },
                { title: "طلب منحة دراسية", icon: ChevronDown },
                { title: "طلب وظيفة", icon: ChevronDown },
            ],
        },
        {
            title: "حول", hasMenu: true, menu: [
                { title: "حول الجامعة", icon: ChevronDown, path: '/about_university' },
                { title: "حول فريق العمل", icon: ChevronDown, path: '/about_development_team' },
            ],
        },
        { title: "الاتصال", hasMenu: false, path: '/contact' }
    ];

    const toggleMobileMenu = () => {
        setMobileMenuOpen(!isMobileMenuOpen);
    };

    const mobileMenuVariants = {
        hidden: { x: '100%' },
        visible: { x: 0 },
        exit: { x: '100%' },
    };

    return (
        <header className='fixed top-0 left-0 mx-auto w-screen bg-blue-500 flex lg:justify-center z-50'>
            <div className='flex items-center justify-between w-screen xl:w-8/10 h-15 px-4 lg:px-10'>
                <p className='text-white text-lg font-semibold'>Al-Ameen University</p>

                <button
                    className='text-white lg:hidden p-2'
                    onClick={toggleMobileMenu}
                >
                    {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <ul className='hidden lg:flex relative flex-row-reverse'>
                    {navData.map((e, index) => (
                        <motion.li
                            className='group/link text-white'
                            key={index}
                            onMouseEnter={() => e.hasMenu && setDropdownOpen(e.title)}
                            onMouseLeave={() => e.hasMenu && setDropdownOpen('')}
                        >
                            <Link to={e.path}>
                                <div className='flex flex-row-reverse items-center gap-1 px-4 py-2 hover:bg-white hover:text-[#202020] duration-200 rounded-xl cursor-pointer'>
                                    {e.title}
                                    {e.hasMenu && (
                                        <ChevronDown size={20} className="mt-[2px] group-hover/link:rotate-180 duration-200" />
                                    )}
                                </div>
                            </Link>
                            {e.hasMenu && dropdownOpen === e.title && (
                                <div dir='rtl' className={`absolute grid grid-cols-2 gap-2 p-3 bg-white text-white rounded-lg shadow-lg top-full ${index > navData.length / 2 ? '' : 'right-30'}`}>
                                    {e.menu.map((subMenu, index2) => (
                                        <Link to={subMenu.path} key={index2}>
                                            <div
                                                key={index2}
                                                className="group flex flex-row-reverse items-center justify-end gap-2 p-2 hover:bg-blue-500 rounded-md cursor-pointer transition-colors duration-300"
                                            >
                                                <h1 className="text-sm text-[#202020] group-hover:text-white">
                                                    {subMenu.title}
                                                </h1>
                                                <span className="bg-blue-500 p-2 rounded-full text-white group-hover:bg-white group-hover:text-blue-400 transition-colors duration-300">
                                                    <subMenu.icon />
                                                </span>
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            )}
                        </motion.li>
                    ))}
                </ul>

                <AnimatePresence>
                    {isMobileMenuOpen && (
                        <motion.div
                            className='fixed top-0 right-0 h-screen w-64 bg-blue-500 shadow-lg lg:hidden z-50'
                            variants={mobileMenuVariants}
                            initial="hidden"
                            animate="visible"
                            exit="exit"
                            transition={{ type: 'tween', duration: 0.3 }}
                        >
                            <div className='p-4'>
                                <button
                                    className='text-white mb-4'
                                    onClick={toggleMobileMenu}
                                >
                                    <X size={24} />
                                </button>

                                <ul className='space-y-2'>
                                    {navData.map((e, index) => (
                                        <li key={index}>
                                            <div
                                                className='flex flex-row-reverse items-center justify-between p-2 text-white hover:bg-white hover:text-blue-500 rounded-lg cursor-pointer'
                                                onClick={() => e.hasMenu && setDropdownOpen(dropdownOpen === e.title ? '' : e.title)}
                                            >
                                                <Link to={e.path}>
                                                    <span>{e.title}</span>
                                                </Link>
                                                {e.hasMenu && (
                                                    <ChevronDown
                                                        size={20}
                                                        className={`transform ${dropdownOpen === e.title ? 'rotate-180' : ''} transition-transform duration-200`}
                                                    />
                                                )}
                                            </div>
                                            {e.hasMenu && dropdownOpen === e.title && (
                                                <div className='pl-4 mt-2 space-y-1'>
                                                    {e.menu.map((subMenu, index2) => (
                                                        <Link to={subMenu.path} key={index2}>
                                                            <div
                                                                key={index2}
                                                                className="flex items-center justify-end gap-2 p-2 text-white hover:bg-white hover:text-blue-500 rounded-md cursor-pointer"
                                                            >
                                                                <h1 className="text-sm text-right">{subMenu.title}</h1>
                                                                <span className="bg-white p-1 rounded-full text-blue-500">
                                                                    <subMenu.icon size={16} />
                                                                </span>
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            )}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </header>
    );
};

export default Navbar;
