import Header from "../components/header";
import Footer from "../components/footer";
import { BsFillCalendarDateFill } from "react-icons/bs";
import { useLocation } from "react-router-dom";

const ActivityItem = () => {
  const location = useLocation();
  const activity = location.state?.activity
  return (
    <>
      <Header title={activity.title} />
      <div className="w-full flex items-center justify-center">
        <div className="w-[80%] xl:w-[70%] bg-blue-50 flex flex-col rounded-2xl">
          <img src={activity.image} alt="" className="object-cover w-full h-100 md:h-200 rounded-2xl" />
          <div className='flex items-center gap-4 w-full justify-center pt-2'>
            <span className='text-blue-500 font-bold text-xl'>{activity.date}</span>
            <BsFillCalendarDateFill className='text-blue-500 size-5 ' />
          </div>
          <p className=" text-right m-5 text-xl">{activity.description}</p>
        </div>

      </div>
      <Footer /></>
  );
};

export default ActivityItem;