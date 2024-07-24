import React from 'react';
import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';
import './ProductCard.css';

const ProductCard = ({ product }) => {
  return (
    <div className="product-card">
      <LazyLoadImage
        src={product.image}
        alt={product.title}
        effect="blur"
        className="product-image"
      />
      <h3 className="product-title">{product.title}</h3>
      <p className="product-price">${product.price}</p>
    </div>
  );
};

export default ProductCard;