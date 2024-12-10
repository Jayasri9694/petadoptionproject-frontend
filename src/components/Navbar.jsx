
// Navbar.jsx
// Navbar.jsx
import './Navbar.css'; // Create a CSS file for styling

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">
        <a href="/">Pet Adoption</a>
      </div>
      <ul className="nav-links">
        <li><a href="/">Home</a></li>
        <li><a href="/adopt">Adopt a Pet</a></li>
        <li><a href="/register">Register</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href="/logout">Logout</a></li>
        <li><a href="/application">ApplicationForm</a></li>
        <li><a href="/about">about</a></li>
        <li><a href="/Feedbackform">FeedbackForm</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
