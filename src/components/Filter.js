import React from 'react';
import './Filter.css';

const Filter = ({ filters, onFilterChange }) => {
  return (
<div className="filter">
      <div className="filter-section">
        <h3>Case Size</h3>
        <ul>
          <li><input type="checkbox" />  17mm</li>
          <li><input type="checkbox" /> 17 - 19mm</li>
          <li><input type="checkbox" /> 20 - 22mm</li>
          {/* Add other case sizes */}
        </ul>
      </div>
      <div className="filter-section">
        <h3>Availability</h3>
        <ul>
          <li><input type="checkbox" /> Available</li>
          <li><input type="checkbox" /> Sold</li>
        </ul>
      </div>
      <div className="filter-section">
        <h3>Gender</h3>
        <ul>
          <li><input type="checkbox" /> Men</li>
          <li><input type="checkbox" /> Women</li>
          <li><input type="checkbox" /> Unisex</li>
        </ul>
      </div>
      {/* Add other filters */}
    </div>
  );
};

export default Filter;