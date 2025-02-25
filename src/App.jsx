import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from "./components/navbar"
import HomeScreen from "./screens/home_screen"
import CollegesScreen from './screens/colleges_screen'
import NewsScreen from './screens/news_screen'
import ActivitiesScreen from './screens/activities_screen'
import AboutScreen from './screens/about_screen'
import ContactScreen from './screens/contact_screen'

function App() {

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/colleges" element={<CollegesScreen />} />
        <Route path="/news" element={<NewsScreen />} />
        <Route path="/activities" element={<ActivitiesScreen />} />
        <Route path="/about" element={<AboutScreen />} />
        <Route path="/contact" element={<ContactScreen />} />
      </Routes>
    </Router>
  )
}

export default App
