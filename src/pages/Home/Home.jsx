import React from 'react'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import './home.css'

const Home = () => {
  const carouselItems = [
    { id: 1, image: './CAROUSEL_IMAGES/PAINTBALL2.jpg', caption: 'PAINTBALL', imageWidth: 975, imageHeight: 435 },
    { id: 2, image: './CAROUSEL_IMAGES/SOCCERFIELD.jpg', caption: 'FÚTBOL', imageWidth: 2048, imageHeight: 1365 },
    { id: 3, image: './CAROUSEL_IMAGES/VOLLEY.jpg', caption: 'VOLLEYBALL', imageWidth: 2048, imageHeight: 1365 },
  ];

  return (
    <div className="home-container">
      <Header />
      <Carousel items={carouselItems}/>
    </div>
  );
}
export default Home;