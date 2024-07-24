import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-image">
          <img src="banner_image_url" alt="Watches" />
        </div>
        <div className="banner-text">
          <h1>The Great Luxury Watch Sale</h1>
          <p>Up to 70% off + 40% Additional Retail</p>
          <button className="shop-now">Shop Now</button>
        </div>
      </div>
    </div>
  );
};

export default Banner;