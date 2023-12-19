import React from 'react';
import GamesGallery from '../assets/gamesSlider.png';
import "./gamesSlider.css";

function GamesSlider() {
    return (
      <div className="games-slider">
        <div className="games-slider-images">
          <img src={GamesGallery} alt="NES box arts gallery" />
          <img src={GamesGallery} alt="NES box arts gallery" />
        </div>  
      </div>
    )
}

export default GamesSlider;