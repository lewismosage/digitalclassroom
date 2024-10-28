import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar';
import Explore from './pages/Explore';
import Career from './pages/Career';
import Learn from './pages/Learn';
import Search from './pages/Search';
import SplashScreen from './components/SplashScreen';
import Math from './pages/Math';
import Arts from './pages/Arts';
import MusicandArts from './pages/MusicandArts';
import Philosophy from './pages/Philosophy';
import History from './pages/History';
import Business from './pages/Business';
import Computerscience from './pages/computerscience';
import Health from './pages/Health';
import Datascience from './pages/Datascience';
import Information from './pages/Information';
import ProfilePage from './pages/LoginSignupPage.'
import CourseDetail from './pages/CourseDetails';
import Leadership from './pages/Leadership';
import Finance from './pages/Finance';
import Marketing from './pages/Marketing';
import BusinessStrategy from './pages/BusinessStrategy';
import BusinessEssentials from './pages/BusinessEssentials';
import Entrepreneurship from './pages/Entrepreneurship';
import Algorithms from './pages/Algorithms';
import SoftwareDevelopment from './pages/SoftwareDevelopment';
import MobileandWebDevelopment from './pages/MobileandWebDevelopment';
import DesignandProducts from './pages/DesignandProducts';
import ComputerSecurity from './pages/ComputerSecurity';
import PhysicalScienceandEngineering from './pages/PhysicalScienceandEngineering';
import Languagues from './pages/Languages'
import PersonalDevelopment from './pages/PersonalDevelopment';
import SocialSciences from './pages/SocialSciences';
import SeeAll from './pages/SeeAll';
import LoginSignupPage from './pages/LoginSignupPage.';
import ProtectedRoute from './components/ProtectedRoute';
import Dashboard from './components/Dashboard'
import PersonalizedCourses from './pages/PersonalizedCourses';
import './styles.css';

const App = () => {
  const location = useLocation();
  const isSplashScreen = location.pathname === '/digitalclassroom'; 
  return (
    <div className="app-container">
      <div className="content">
        <Routes>
          {/* All routes*/}
          <Route path="/digitalclassroom" element={<SplashScreen />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/career" element={<Career />} />
          <Route path="/learn" element={<Learn />} />
          <Route path="/search" element={<Search />} />
          <Route path="/explore/arts" element={<Arts />} />
          <Route path="/explore/arts/history" element={<History />} /> 
          <Route path="/explore/arts/philosophy" element={<Philosophy />} /> 
          <Route path="/explore/arts/musicandarts" element={<MusicandArts />} /> 
          <Route path="/explore/maths" element={<Math />} /> 
          <Route path="/explore/business" element={<Business />} />
          <Route path="/explore/business/leadership" element={<Leadership />} /> 
          <Route path="/explore/business/finance" element={<Finance />} />
          <Route path="/explore/business/marketing" element={<Marketing />} />
          <Route path="/explore/business/businessStrategy" element={<BusinessStrategy />} />
          <Route path="/explore/business/entrepreneurship" element={<Entrepreneurship />} />
          <Route path="/explore/business/businessessentials" element={<BusinessEssentials />} />
          <Route path="/explore/computer-science" element={<Computerscience />} />
          <Route path="/explore/computerscience/ComputerSecurity" element={<ComputerSecurity />} />
          <Route path="/explore/computerscience/DesignandProducts" element={<DesignandProducts />} />
          <Route path="/explore/computerscience/MobileandWebDevelopment" element={<MobileandWebDevelopment />} />
          <Route path="/explore/computerscience/SoftwareDevelopment" element={<SoftwareDevelopment />} />
          <Route path="/explore/computerscience/Algorithms" element={<Algorithms />} />
          <Route path="/explore/health" element={<Health />} />
          <Route path="/explore/socialsciences" element={<SocialSciences />} />
          <Route path="/explore/languages" element={<Languagues />} />
          <Route path="/explore/personaldevelopment" element={<PersonalDevelopment />} />
          <Route path="/explore/physcialsciencesengineering" element={<PhysicalScienceandEngineering />} /> 
          <Route path="/explore/data-science" element={<Datascience />} />
          <Route path="/explore/it" element={<Information />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/course/:courseId" element={<CourseDetail />} />
          <Route path="/explore/see-all" element={<SeeAll />} />
          <Route path="/login" element={<LoginSignupPage />} />
          <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}/>
          <Route path="/personalized-courses" element={<PersonalizedCourses />} />
        </Routes>
      </div>

      {/* Only render NavBar if it's not the splash screen */}
      {!isSplashScreen && <NavBar />}
    </div>
  );
};

// Wrapping the app in a single Router at the root level
const AppWithRouter = () => (
  <Router>
    <App />
  </Router>
);

export default AppWithRouter;

