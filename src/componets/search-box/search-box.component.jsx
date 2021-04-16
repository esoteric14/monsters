import React from 'react';
import '../search-box/search-box.styles.css';

export const SerachBox = ({ placeholder, handleChange }) => (
    <input 
        className='search'
        type="serach" 
        placeholder ={placeholder} 
        onChange ={handleChange}
    />
);