import React from 'react';

import './search-box.styles.css';
import { className } from 'postcss-selector-parser';

export const SearchBox = ({ placeholder, handleChange }) => (
    
    <input 
        className = 'search'
        type='search' 
        placeholder= {placeholder}
        onChange={handleChange}  
   />
);