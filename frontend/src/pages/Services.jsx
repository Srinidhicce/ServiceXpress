
import './Services.css';

const serviceData = [
  {
    title: 'Makeup Service',
    image: 'https://i.pinimg.com/474x/e9/8f/fa/e98ffae2838d5ba6f41b3f34e28b959e.jpg',
    description: 'Professional makeup services at your doorstep for weddings, parties, and special events.'
  },
  {
    title: 'Plumber',
    image: 'https://i.pinimg.com/474x/3b/b1/ae/3bb1ae1c589effebc898276f7dd37edd.jpg',
    description: 'Expert plumbing solutions for all your home and office needs.'
  },
  {
    title: 'Electrician',
    image: 'https://i.pinimg.com/474x/66/0f/07/660f0757189e07f9c4d2158f9b7384a8.jpg',
    description: 'Certified electricians for wiring, repairs, and installation services.'
  },
  {
    title: 'Carpenter',
    image: 'https://i.pinimg.com/474x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg',
    description: 'Custom woodwork and carpentry for furniture repair and home improvement.'
  },
  {
    title: 'Service & Maintenance',
    image: 'https://i.pinimg.com/474x/e9/80/1d/e9801daba84360675296273328b8bd6c.jpg',
    description: 'AC, fridge, washing machine and all other appliance repair and maintenance.'
  }
];

const Services = () => {
  return (
    <div className="services-container">
      <h2 className="services-title">Our Services</h2>
      <p className="services-subtitle">
        We provide a wide range of home services including cleaning, electrician, plumber, makeup, and appliance repairs.
      </p>
      <div className="services-grid">
        {serviceData.map((service, index) => (
          <div className="service-card" key={index}>
            <img src={service.image} alt={service.title} className="service-image" />
            <h3 className="service-title">{service.title}</h3>
            <p className="service-description">{service.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;
