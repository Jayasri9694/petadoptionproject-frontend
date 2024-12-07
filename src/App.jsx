import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import About from './components/About';
import UserProfilePage from './pages/UserProfilePage';
import FeedbackPage from './pages/FeedbackPage'; // Import FeedbackPage
import PetList from './components/PetList';
import Navbar from './components/Navbar';
import PetDetails from './components/PetDetail';
const App = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/pets" element={<PetList />} />
        <Route path="/pets/:id" element={<PetDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/profile" element={<UserProfilePage />} />
        <Route path="/feedback" element={<FeedbackPage />} /> {/* Add Feedback route */}
        
      </Routes>
    </Router>
  );
};export default App;
