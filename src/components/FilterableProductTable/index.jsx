import React from 'react';
import Search from './../Search';
import Table from './../Table';

function FilterableProductTable(props) {
  return (
    <div>
      <Search filterProducts={props.filterProducts} inStock={props.inStock} />
      <Table data={props.data} />
    </div>
  );
}

export default FilterableProductTable;
