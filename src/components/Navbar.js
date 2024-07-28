import React from "react";
import "./Navbar.css";
import { useDispatch, useSelector } from "react-redux";
import { setCategory } from "../Redux/productSlice";

const Navbar = () => {
  const dispatch = useDispatch();
  const selectedCategory = useSelector((state) => state.data.selectedCategory); 

  const uniqueCategories = ["all", "men's clothing", "jewelery", "electronics", "women's clothing"];

  const handleCategoryClick = (category) => {
    dispatch(setCategory(category));
  };

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
          {uniqueCategories.map((category) => (
            <li
              key={category}
              className={category === selectedCategory ? 'active' : ''}
              onClick={() => handleCategoryClick(category)}
            >
              {category}
            </li>
          ))}
        </ul>
        <div className="navbar-icons"></div>
      </div>
    </div>
  );
};

export default Navbar;
