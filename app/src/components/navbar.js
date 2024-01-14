import { Outlet, NavLink } from "react-router-dom";
import '../styles/navbar.css';
import logo from '../images/logo-no-background.png'

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
      <div className="container">
        <div class="logo-image">
          <img id="profile-image" src={logo} alt="logo with words Caelan Ross." class="img-fluid"/>
        </div>
        <div className="nav-elements">
            <ul>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/contact">Contact</NavLink>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <Outlet />
    </>
  )
};

export default Navbar;
