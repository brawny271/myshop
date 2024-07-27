import React, { useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';
import { setProducts, setProductsError } from '../Redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.items);

  useEffect(() => {
    axios.get('https://fakestoreapi.com/products')
      .then(response => {
        dispatch(setProducts(response.data));
      })
      .catch(error => {
        console.error(error);
        dispatch(setProductsError(error.message));
      });
  }, [dispatch]);

  return (
    <div className="product-list">
      {products.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;