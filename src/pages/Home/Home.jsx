import React from 'react'
import Header from '../../components/Header/Header'
import Carousel from '../../components/Carousel/Carousel'
import './home.css'

const Home = () => {
    return (
      <div className="home-container">
        <Header />
        <Carousel />
      </div>
    );
}
export default Home;