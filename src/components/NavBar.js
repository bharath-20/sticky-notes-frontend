import { Link, useLocation } from 'react-router-dom';
import '../styles/NavBar.css'; 

const NavBar = () => {
  const location = useLocation();

  const handleLogout = () => {
    window.location.href = '/logout'; 
  };

  return (
    <nav className="navbar">
      <ul className="navbar-left">
        <li>
          <Link to="/home" className={location.pathname === '/home' ? 'active' : ''}>
            Home
          </Link>
        </li>
        <li>
          <Link to="/feed" className={location.pathname === '/feed' ? 'active' : ''}>
            Feed
          </Link>
        </li>
      </ul>
      <div className="navbar-right">
        <button className='logout-button' onClick={handleLogout}>Logout</button>
      </div>
    </nav>
  );
};

export default NavBar;
