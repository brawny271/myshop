import React from "react";
import "./Navbar.css";
import { useSelector } from "react-redux";

const Navbar = () => {
  const products = useSelector((state) => state.product);

  const uniqueCategories = [
    "men's clothing",
    "jewelery",
    "electronics",
    "women's clothing"
];

  return (
    <div className="navbar">
      <div className="navbar__logo">
        <div style={{ width: "3.5rem", borderRight: "1px solid gray" }}>
          New
        </div>
        <div style={{ borderBottom: "2px solid orange", paddingBottom: "2px" }}>
          Pre-Owned
        </div>
      </div>
      <div>
        <ul className="navbar-menu">
          <li>All Products</li>
          {uniqueCategories?.map((category) => (
            <li key={category}>{category}</li>
          ))}
        </ul>
        <div className="navbar-icons"></div>
      </div>
    </div>
  );
};

export default Navbar;
