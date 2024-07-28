import React, { useState } from 'react';
import './Filter.css';
import { useDispatch, useSelector } from 'react-redux';
import { clearFilters, setCategory, setFilterOptions } from '../Redux/productSlice';

const Filter = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.data.filters);

  const priceRanges = [
    { label: 'Under $25', min: 0, max: 25 },
    { label: '$25 - $50', min: 25, max: 50 },
    { label: '$50 - $100', min: 50, max: 100 },
    { label: '$100 - $200', min: 100, max: 200 },
    { label: 'Over $200', min: 200, max: Infinity },
  ];

  const ratingRanges = [
    { label: '1 Star & Up', min: 1 },
    { label: '2 Stars & Up', min: 2 },
    { label: '3 Stars & Up', min: 3 },
    { label: '4 Stars & Up', min: 4 },
    { label: '5 Stars', min: 5 },
  ];

  const handleCheckboxChange = (filterType, range) => {
    const currentFilters = filters[filterType];
    const isChecked = currentFilters.some(
      (selectedRange) => selectedRange.label === range.label
    );

    let updatedFilters;
    if (isChecked) {
      updatedFilters = currentFilters.filter(
        (selectedRange) => selectedRange.label !== range.label
      );
    } else {
      updatedFilters = [...currentFilters, range];
    }

    // Dispatch the updated filters to Redux
    dispatch(setFilterOptions({ filterType, value: updatedFilters }));

    // Reset category to 'all' and dispatch category change
    dispatch(setCategory('all'));
  };

  const isRangeChecked = (filterType, range) => {
    return filters[filterType].some(
      (selectedRange) => selectedRange.label === range.label
    );
  };

  return (
    <div className="filter">
      <div className="filter-section">
        <h3>Price Range</h3>
        <ul>
          {priceRanges.map(range => (
            <li key={range.label}>
              <input
                type="checkbox"
                checked={isRangeChecked('priceRange', range)}
                onChange={() => handleCheckboxChange('priceRange', range)}
              />
              {range.label}
            </li>
          ))}
        </ul>
      </div>
      <div className="filter-section">
        <h3>Rating</h3>
        <ul>
          {ratingRanges.map(range => (
            <li key={range.label}>
              <input
                type="checkbox"
                checked={isRangeChecked('ratingRange', range)}
                onChange={() => handleCheckboxChange('ratingRange', range)}
              />
              {range.label}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};


export default Filter;