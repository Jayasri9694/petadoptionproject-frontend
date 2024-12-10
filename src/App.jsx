// React import removed as it's not used in this file
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AdoptPet from "./pages/AdoptPet";
import Register from "./components/Register";
import Login from "./components/Login";
import { AuthProvider } from "/context/AuthContext";
import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./components/Navbar";
import ApplicationForm from "./components/ApplicationForm";
import Logout from "./components/Logout";
import PetForm from "./components/PetForm";
import About from "./components/About";
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
          <Route path="/application" element={<ApplicationForm />} />
          <Route path="/logout" element={<Logout />} />
          <Route path="/petform" element={<PetForm />} />
          <Route path="about" element={<About />} />
        </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;
