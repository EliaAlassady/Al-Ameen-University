import { Link } from 'react-router-dom';
import { departmentController2 } from '../controllers/department';
import { Spinner } from './loading';

export default function Departments({ minH, collegeId }) {

    const { collegesDepartment, isLoading2 } = departmentController2(collegeId);

    if (isLoading2) {
        return <div><Spinner /></div>
    }
    return (
        <div className={`${minH} p-8 flex justify-center items-center `} >
            <div className="flex flex-wrap flex-row-reverse justify-center gap-6 w-full max-w-screen-2xl mx-auto">
                {collegesDepartment.map((department, index) => (
                    <Link
                        to={department.path}
                        key={index}
                        className="relative cursor-pointer bg-white text-[#202020]
              w-35 h-[120px]
              sm:h-[250px]
              sm:w-60
              md:w-[calc(33.333%-1.5rem)] 
              lg:w-[calc(25%-1.5rem)] 
              xl:w-[calc(20%-3.0rem)] 
              flex flex-col clip-custom gap-2 items-center 
              justify-center font-bold text-xl
              transition-all duration-300 ease-in-out
              hover:-translate-y-2 hover:translate-x-2
              active:-translate-y-2 active:translate-x-2"
                    >
                        <img
                            src={department.departmentImage}
                            alt={department.departmentName}
                            className="w-10 h-10 md:w-25 md:h-25 object-contain text-blue-500"
                        />
                        <span className='font-bold text-center text-[16px] px-10 sm:text-xl'>{department.departmentName}</span>
                    </Link>
                ))}
            </div>
        </div >
    )
}