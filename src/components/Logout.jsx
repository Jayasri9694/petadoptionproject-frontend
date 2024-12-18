import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = ({ setIsAuthenticated }) => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear the auth token from localStorage
    localStorage.removeItem("authToken");

    // Set authentication state to false
    setIsAuthenticated(false);

    // Redirect to the login page after logout
    navigate("/login");
  }, [setIsAuthenticated, navigate]);

  return null; // No UI needed since we are redirecting immediately
};

export default Logout;
