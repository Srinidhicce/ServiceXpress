import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Home from './pages/Home';
import Services from './pages/Services';
import AboutUs from './pages/AboutUs';
import Cart from './pages/Cart';
import OrderHistory from './pages/OrderHistory';
import Profile from './pages/Profile';
import Wishlist from './pages/Wishlist';
import Login from './components/userreg/Login';  // Corrected path
import SignUp from './components/userreg/SignUp'; // Corrected path
import FooterBox from './components/footer/FooterBox';

function App() {
    return (
        <Router>
            <Navbar />
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <br></br>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/services" element={<Services />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/login" element={<Login />} /> 
                <Route path="/signup" element={<SignUp />} /> 
                <Route path="/cart" element={<Cart />} />
                <Route path="/wishlist" element={<Wishlist />} />
                <Route path="/order-history" element={<OrderHistory />} />
                <Route path="/profile" element={<Profile />} />
            </Routes>
            <br></br>
            <br></br>
            <FooterBox />
        </Router>
    );
}

export default App;
