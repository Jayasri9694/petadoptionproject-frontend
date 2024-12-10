import { useEffect } from "react";
import { useNavigate } from "react-router-dom";

const Logout = () => {
  const navigate = useNavigate();

  useEffect(() => {
    // Clear user authentication data
    localStorage.removeItem("authToken");
    localStorage.removeItem("user");
    
    // Optionally show a logout confirmation
    alert("You have been logged out successfully!");

    // Redirect to the login page
    navigate("/login");
  }, [navigate]);

  return (
    <div className="logout-container">
      <h1>Logging Out...</h1>
      <p>Redirecting you to the login page.</p>
    </div>
  );
};

export default Logout;
