import React, { useEffect, useState } from 'react';
import './Banner.css';

const Banner = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [
    'https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg',
    'https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg',
    'https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg'
  ];  

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="banner-content">
        <div className="banner-image">
          <img src={images[currentImageIndex]} alt="Watches" />
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