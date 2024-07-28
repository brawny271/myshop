import React, { useEffect } from 'react';
import axios from 'axios';
import ProductCard from './ProductCard';
import './ProductList.css';
import { setProducts, setProductsError, setFilterOptions } from '../Redux/productSlice';
import { useDispatch, useSelector } from 'react-redux';

const ProductList = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.data.products.items);
  const selectedCategory = useSelector((state) => state.data.selectedCategory);
  const filters = useSelector((state) => state.data.filters);

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

  const filterProducts = (products, filters, selectedCategory) => {
    const { category: categoryFilters = [], priceRange: priceRangeFilters = [], ratingRange: ratingRangeFilters = [] } = filters || {};

    return products.filter(product => {
      const categoryMatch = selectedCategory === 'all' || product.category === selectedCategory;
      
      const categoryFilterMatch = categoryFilters.length === 0 || categoryFilters.includes(product.category);
      
      const priceMatch = priceRangeFilters.length === 0 || priceRangeFilters.some(range =>
        product.price >= range.min && product.price <= range.max
      );
      
      const ratingMatch = ratingRangeFilters.length === 0 || ratingRangeFilters.some(range =>
        product.rating.rate >= range.min
      );

      return categoryMatch && categoryFilterMatch && priceMatch && ratingMatch;
    });
  };

  const filteredProducts = filterProducts(products, filters, selectedCategory);

  return (
    <div className="product-list">
      {filteredProducts.map(product => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  );
};

export default ProductList;