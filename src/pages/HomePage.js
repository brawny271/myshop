import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import Banner from "../components/Banner";
import Filter from "../components/Filter";
import ProductList from "../components/ProductList";
import "./HomePage.css";
import filter from "../assets/filter.svg";

const HomePage = () => {
  const [filters, setFilters] = useState({});
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const [isTablet, setIsTablet] = useState(window.innerWidth > 768 && window.innerWidth <= 1024);
  const [showFilter, setShowFilter] = useState(!isMobile);

  useEffect(() => {
    const handleResize = () => {
      const mobile = window.innerWidth <= 768;
      const tablet = window.innerWidth > 768 && window.innerWidth <= 1024;
      setIsMobile(mobile);
      setIsTablet(tablet);
      setShowFilter(!(mobile || tablet));
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
  };

  const toggleFilter = () => {
    setShowFilter(!showFilter);
  };

  return (
    <div className="home-page">
      <Navbar />
      <div className="content">
        {(isMobile || isTablet) && (
          <button className="filter-button" onClick={toggleFilter}>
            <img
              src={filter}
              alt="Filter Icon"
              className="filter-icon"
              title="Filter Products"
              style={{ width: "20px", height: "20px" }}
            />
          </button>
        )}
        {showFilter && (
          <div className={isMobile || isTablet ? "filter-dropdown" : ""}>
            <Filter filters={filters} onFilterChange={handleFilterChange} />
          </div>
        )}
        <div className="product-content">
          <Banner />
          <ProductList filters={filters} />
        </div>
      </div>
    </div>
  );
};
export default HomePage;
