import React, { useEffect, useState } from "react";
import "./Banner.css";

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const bannerContent = [
    {
      img: "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
      img_title: "All New Collection",
      offer_description: "Up to 70% off + 40% Additional Retail",
    },
    {
      img: "https://fakestoreapi.com/img/71YXzeOuslL._AC_UY879_.jpg",
      img_title: "All New Collection",
      offer_description: "Up to 60% off + 30% Additional Retail",
    },
    {
      img: "https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg",
      img_title: "All New Collection",
      offer_description: "Up to 50% off + 20% Additional Retail",
    },
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % bannerContent.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="banner">
      <div className="banner-content-wrapper">
        <div
          className="banner-content"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {bannerContent.map((content, index) => (
            <div key={index} className="banner-item">
              <div className="banner-image">
                <img src={content.img} alt={content.img_title} />
              </div>
              <div className="banner-text">
                <h1>{content.img_title}</h1>
                <p>{content.offer_description}</p>
                <button className="shop-now">Shop Now</button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Banner;
