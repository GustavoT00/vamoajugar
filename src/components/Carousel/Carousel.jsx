import React from 'react';
import { Carousel as BootstrapCarousel } from 'react-bootstrap';

const MyCarousel = ({ items }) => {
  return (
    <div className="carousel-container">
      <BootstrapCarousel
        interval={8000}  
        fade  
        controls={false}  
        className="custom-carousel"
      >
        {items.map(item => (
          <BootstrapCarousel.Item key={item.id}>
            <img
              className="d-block w-100 custom-image"
              src={item.image}
              alt={`Slide ${item.id}`}
            />
            <BootstrapCarousel.Caption>
              <h3>{item.caption}</h3>
            </BootstrapCarousel.Caption>
          </BootstrapCarousel.Item>
        ))}
      </BootstrapCarousel>
    </div>
  );
};

export default MyCarousel;


