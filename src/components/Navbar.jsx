// src/components/Navbar.jsx
// React import removed as it's not used in this component
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
                  <h1>Pet Adoption Platform</h1>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/pets">Pets</Link></li>
        <li><Link to="/login">Login</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/feedback">Feedback</Link></li> {/* Link to Feedback page */}
      </ul>
    </nav>
  );
};

export default Navbar;

