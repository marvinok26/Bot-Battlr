// src/components/SortBar.js
import React from 'react';

const SortBar = ({ onSort }) => {
  return (
    <div>
      <h3>Sort By:</h3>
      <button onClick={() => onSort('health')}>Health</button>
      <button onClick={() => onSort('damage')}>Damage</button>
      <button onClick={() => onSort('armor')}>Armor</button>
    </div>
  );
};

export default SortBar;