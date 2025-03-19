import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar"
import HomeScreen from "./screens/home_screen"
import CollegesScreen from './screens/colleges_screen'
import NewsScreen from './screens/news_screen'
import ActivitiesScreen from './screens/activities_screen'
import AboutScreen from './screens/about_screen'
import ContactScreen from './screens/contact_screen'
import AboutDevelopmentTeamScreen from './screens/about_dev_screen';
import AafAffairsScreen from './screens/aaf_affairs_screen';
import ContinuingEducationScreen from './screens/continuing_education_screen';
import ComplaintsSystemScreen from './screens/complaints_system_screen';
import IraqGuideScreen from './screens/iraq_guide_screen';
import ScoopUsScreen from './screens/scoopus_screen';
import ScrollToTop from './constants/scroll_to_top';
import DepartmentScreen from './screens/department_screen';
import collegeController from './controllers/college';
import { departmentController } from './controllers/department';
import ActivityItem from './screens/activity_item_screen';


function App() {
  const { colleges, isLoading } = collegeController();
  const { departments, isLoading2 } = departmentController();

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/student_news" element={<NewsScreen />} />
        <Route path="/university_news" element={<NewsScreen />} />
        <Route path="/student_activities" element={<ActivitiesScreen />} />
        <Route path="/university_activities" element={<ActivitiesScreen />} />
        <Route path="/activite/1" element={<ActivityItem />} />
        <Route path="/about_university" element={<AboutScreen />} />
        <Route path="/about_development_team" element={<AboutDevelopmentTeamScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/aaf_affairs" element={<AafAffairsScreen />} />
        <Route path="/continuing_education" element={<ContinuingEducationScreen />} />
        <Route path="/complaints_system" element={<ComplaintsSystemScreen />} />
        <Route path="/iraq_guide" element={<IraqGuideScreen />} />
        <Route path="/scoopus" element={<ScoopUsScreen />} />
        {
          colleges.map((college, index) => {
            return <Route key={index} path={college.path} element={<CollegesScreen college={college} />} />
          })
        }
        {
          departments.map((department, index) => {
            return <Route key={index} path={department.path} element={<DepartmentScreen departments={department} />} />
          })
        }
        {
          departments.map((department, index) => {
            return <Route key={index} path={`${department.path}/activity/:id`} element={<ActivityItem />} />
          })
        }

        <Route path="/student_activities/activity/:id" element={<ActivityItem />} />
        <Route path="/university_activities/activity/:id" element={<ActivityItem />} />
        <Route path="/activity/:id" element={<ActivityItem />} />

      </Routes>
    </Router>
  )
}

export default App
