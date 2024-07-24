import React from 'react';
import Navbar from '../components/Navbar';
import Banner from '../components/Banner';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';
import './HomePage.css';

const HomePage = () => {
  const [filters, setFilters] = React.useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="home-page">
      <Navbar />
      {/* <Banner /> */}
      <div className="content">
        <Filter filters={filters} onFilterChange={handleFilterChange} />
        <div className='product-content'>
        <Banner />
        <ProductList filters={filters} />
        </div>
        
      </div>
    </div>
  );
};

export default HomePage;