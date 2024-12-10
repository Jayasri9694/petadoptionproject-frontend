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
import FeedbackForm from "./components/FeedbackForm";
const App = () => {
  return (
    <AuthProvider>
      <Router>
        <Navbar/>
        <div className="content">
        <Routes>
          <Route path="/" component={<Home />} />
          <Route path="/adopt" component={<AdoptPet />} />
          <Route path="/register" component={<Register />} />
          <Route path="/login" component={<Login />} />
          <Route path="/application" component={<ApplicationForm />} />
          <Route path="/logout" component={<Logout />} />
          <Route path="/petform" component={<PetForm />} />
          <Route path="about" component={<About />} />
          <Route path="FeedbackForm" component={<FeedbackForm />} />
        </Routes>
        </div>
      </Router>
    </AuthProvider>
  );
};
export default App;
