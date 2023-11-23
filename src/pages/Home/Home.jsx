import React from 'react';
import Header from '../../components/Header/Header';
import Carousel from '../../components/Carousel/Carousel';
import PropertyCard from '../../components/propiedadtarjeta/PropertyCard';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Home.css';

const Home = () => {
  const carouselItems = [
    { id: 1, image: './CAROUSEL_IMAGES/PAINTBALL2.jpg', caption: 'PAINTBALL', imageWidth: 975, imageHeight: 435 },
    { id: 2, image: './CAROUSEL_IMAGES/SOCCERFIELD.jpg', caption: 'FÚTBOL', imageWidth: 2048, imageHeight: 1365 },
    { id: 3, image: './CAROUSEL_IMAGES/VOLLEY.jpg', caption: 'VOLLEYBALL', imageWidth: 2048, imageHeight: 1365 },
  ];

  const propertyData = [
    {
      id: 1,
      image: 'https://via.placeholder.com/300',
      name: 'Ejemplo 1',
      address: 'Dirección 1',
      rating: 4.5,
      price: '$100',
    },
    // Agrega más propiedades según sea necesario
  ];

  return (
    <div className="home-container">
      <Header />
      <Carousel items={carouselItems}/>
      <div className="property-cards-container">
        {propertyData.map(property => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  );
};

export default Home;
