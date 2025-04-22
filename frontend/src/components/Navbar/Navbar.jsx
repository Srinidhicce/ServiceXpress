import { Link, useLocation } from 'react-router-dom';
import { RiLuggageCartFill } from "react-icons/ri";
import { MdWorkHistory } from "react-icons/md";
import { FaUserCircle } from "react-icons/fa";  // Import profile icon
import './Navbar.css';

function Navbar() {
    const location = useLocation();

    return (
        <div className='navbar'>
            <div className='logo-name'>
                <img className="logo" src="/src/assets/logo.png" alt="ServiceXpress Logo" />
                <h3 className='name'>ServiceXpress</h3>
            </div>

            <div className='nav-elements'>
                <ul>
                    <li>
                        <Link to="/" className={location.pathname === '/' ? 'active' : ''}>Home</Link>
                        {location.pathname === '/' && <hr />}
                    </li>
                    <li>
                        <Link to="/services" className={location.pathname === '/services' ? 'active' : ''}>Services</Link>
                        {location.pathname === '/services' && <hr />}
                    </li>
                    <li>
                        <Link to="/about-us" className={location.pathname === '/about-us' ? 'active' : ''}>About Us</Link>
                        {location.pathname === '/about-us' && <hr />}
                    </li>
                </ul>
            </div>

            <div className='nav-icons'>
                <Link to="/login">
                    <button className='nav-button login'>Login</button>
                </Link>
                <Link to="/signup">
                    <button className='nav-button signup'>Sign Up</button>
                </Link>
                <Link to="/cart">
                    <RiLuggageCartFill className='icon cart' />
                </Link>
                <Link to="/order-history">
                    <MdWorkHistory className='icon history' />
                </Link>
                <Link to="/profile">
                    <FaUserCircle className='icon profile' /> {/* Profile icon */}
                </Link>
            </div>
        </div>
    );
}

export default Navbar;
