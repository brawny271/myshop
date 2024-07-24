import React from 'react';
import Navbar from '../components/Navbar';
import Filter from '../components/Filter';
import ProductList from '../components/ProductList';

const HomePage = () => {
  const [filters, setFilters] = React.useState({});

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  return (
    <div className="home-page">
      <Navbar />
      <Filter filters={filters} onFilterChange={handleFilterChange} />
      <ProductList filters={filters} />
    </div>
  );
};

export default HomePage;