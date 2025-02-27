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

function App() {

  return (
    <Router>
      <ScrollToTop />
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/colleges" element={<CollegesScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/activities" element={<ActivitiesScreen />} />
        <Route path="/about_university" element={<AboutScreen />} />
        <Route path="/about_development_team" element={<AboutDevelopmentTeamScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
        <Route path="/aaf_affairs" element={<AafAffairsScreen />} />
        <Route path="/continuing_education" element={<ContinuingEducationScreen />} />
        <Route path="/complaints_system" element={<ComplaintsSystemScreen />} />
        <Route path="/iraq_guide" element={<IraqGuideScreen />} />
        <Route path="/scoopus" element={<ScoopUsScreen />} />
      </Routes>
    </Router>
  )
}

export default App
