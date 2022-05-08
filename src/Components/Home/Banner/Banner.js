import React from 'react';
import { Carousel } from 'react-bootstrap';
import banner1 from '../../../images/banner/banner1.jpg'
import banner2 from '../../../images/banner/banner2.jpg'
import banner3 from '../../../images/banner/banner3.jpg'
import './Banner.css'
const Banner = () => {
  return (
    <Carousel fade>
  <Carousel.Item>
    <img
      className="d-block w-100"
  src={banner1}
      alt="First slide"
    />
    <Carousel.Caption>
      <h3 className='banner-title'>Nam Viverra Euismod</h3>
      <p className='banner-info'>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner2}
      alt="Second slide"
    />

    <Carousel.Caption>
      <h3 className='banner-title'>Tristique Senectus</h3>
      <p className='banner-info'>A legacy of victory. Since 1984, NISMO® has been the official in-house racing arm of Nissan.</p>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
    <img
      className="d-block w-100"
      src={banner3}
      alt="Third slide"
    />

    <Carousel.Caption>
      <h3 className='banner-title'>Aenean Fermentum</h3>
      <p className='banner-info'>Praesent commodo cursus magna, vel scelerisque nisl consectetur.</p>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>
  );
};

export default Banner;