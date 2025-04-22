import { IoLogoInstagram } from "react-icons/io";
import { RiFacebookCircleLine, RiLinkedinBoxFill } from "react-icons/ri";
import { MdMailOutline } from "react-icons/md";
import { FiPhone } from "react-icons/fi";
import './footer.css';

function FooterBox() {
  return (
    <div>
      <div className='footer'>
        <div className='box-container'>
          <div className='box contact'>
            <h3 className='info'>Contact Info</h3>
            <a href="mailto:servicexpress@gmail.com"><MdMailOutline />servicexpress@gmail.com</a>
            <a href="tel:+1234562983"><FiPhone />+123-456-2983</a>
            <a href="tel:+1234562983"><FiPhone />+123-456-2983</a>
          </div>

          <div className='box follow'>
            <h3 className='info'>Follow us on</h3>
            <a href="https://www.facebook.com"><RiFacebookCircleLine />Facebook</a>
            <a href="https://www.instagram.com"><IoLogoInstagram />Instagram</a>
            <a href="https://www.linkedin.com"><RiLinkedinBoxFill />LinkedIn</a>
          </div>

          <div className='box customer'>
            <h3 className='info'>Customer Services</h3>
            <a href="">Orders</a>
            <a href="">Cancellation</a>
          </div>

          <div className='box extra'>
            <h3 className='info'>Extra Info</h3>
            <a href="">About Us</a>
            <a href="">Customer Care</a>
          </div>
        </div>
      </div>
      
    </div>
  );
}

export default FooterBox;
