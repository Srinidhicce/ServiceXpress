import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import './Top.css';

const topServices = [
  {
    name: 'Makeup',
    image: 'https://i.pinimg.com/474x/e9/8f/fa/e98ffae2838d5ba6f41b3f34e28b959e.jpg'
  },
  {
    name: 'Plumber',
    image: 'https://i.pinimg.com/474x/3b/b1/ae/3bb1ae1c589effebc898276f7dd37edd.jpg'
  },
  {
    name: 'Electrician',
    image: 'https://i.pinimg.com/474x/66/0f/07/660f0757189e07f9c4d2158f9b7384a8.jpg'
  },
  {
    name: 'Carpenter',
    image: 'https://i.pinimg.com/474x/23/a2/f3/23a2f39014f3db9981ba006a536deb3b.jpg'
  },
  {
    name: 'Service & Maintenance',
    image: 'https://i.pinimg.com/474x/e9/80/1d/e9801daba84360675296273328b8bd6c.jpg'
  }
];

const Top = () => {
  return (
    <>
      <div className='quote'>
        <h2>Home services at your doorstep</h2>
      </div>
      <div className='services'>
        <Swiper
          spaceBetween={20}
          slidesPerView={3}
          navigation
          pagination={{ clickable: true }}
          loop={true}
          className="swiper-container"
        >
          {topServices.map((service, index) => (
            <SwiperSlide key={index}>
              <div className="service-item">
                <img src={service.image} alt={service.name} />
                <p>{service.name}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </>
  );
};

export default Top;
