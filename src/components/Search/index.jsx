import React from 'react';
import './style.scss';

function Search(props) {
  const handler = event => {
    props.filterProducts(event.target.value);
  };
  const inStock = event => {
    props.inStock(event.target.checked);
  };
  return (
    <div className="search">
      <h3>Search</h3>
      <input className="searchBar" type="text" onChange={handler} />
      <div>
        <input type="checkbox" onChange={inStock} />
        <label>Only show products in stock</label>
      </div>
    </div>
  );
}

export default Search;
