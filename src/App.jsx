import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Home from "./pages/Home";
import AdoptPet from "./pages/AdoptPet";
import Register from "./components/Register";
import Login from "./components/Login";
import { AuthProvider } from "./context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ApplicationForm from "./components/ApplicationForm";
import Logout from "./components/Logout";
import PetDetailsPage from "./pages/PetDetailsPage";
import About from "./components/About";
import AdoptionConfirmation from "./components/AdoptionConfirmation";


const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <div className="content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/adopt" element={<AdoptPet />} />
           <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login />} />
            <Route path="/adopt-pet-form" element={<ApplicationForm />} />
            <Route path="/adoption-confirmation" element={<AdoptionConfirmation/>} />
            <Route path="/pet-details" element={<PetDetailsPage />} /> 
            <Route path="about" element={<About />} />
            <Route path="/logout" element={<Logout />} />
          </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;