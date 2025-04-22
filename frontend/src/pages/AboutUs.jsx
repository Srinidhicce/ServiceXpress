import Navbar from '../components/Navbar/Navbar';
import './About.css'; // Ensure the path is correct

const AboutUs = () => {
  return (
    <div className="about-us-container">
      <Navbar />
      
      {/* About Us Section */}
      <div className="about-us-image-container">
        <img
          src="https://nectarbits.com/blog/wp-content/uploads/2020/07/Handyman-Service.png"
          alt="Handyman Service"
          className="about-us-image"
        />
      </div>

      <div className="about-us-content-container">
        <h2>About Our Services</h2>
        <p>
          We are a professional service provider offering a wide range of solutions to help you with your needs. 
          From home maintenance to personal assistance, our team is here to make your life easier and more convenient. 
          Our mission is to provide top-notch services that exceed your expectations.
        </p>
        <p>
          Whether you need urgent repairs, general maintenance, or even expert consultations, we have the expertise 
          and tools to get the job done right. Our dedicated team works hard to ensure your satisfaction.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
