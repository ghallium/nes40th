import React from 'react';
import GamesGallery from '../assets/slider.webp';
import "./softwareCarousel.css";

function GamesSlider() {
    return (
      <div className="slider">
        <div className="slider-images">
          <img src={GamesGallery} alt="NES box arts gallery" />
          <img src={GamesGallery} alt="NES box arts gallery" />
        </div>  
      </div>
    )
}

export default GamesSlider;
