import React, { Component } from 'react';
import SearchBar from './../SearchBar';
import ProductTable from './../ProductTable';

class FilteredProductTable extends Component {
  constructor(){
    super();
    this.filterData = this.filterData.bind(this);
  }

  filterData(input, stockOn) {
    this.props.filterData(input, stockOn);
  }

  render() {
    const { products } = this.props;
    return (
      <div>
          <SearchBar filterData={(input, stockOn) => this.filterData(input, stockOn)}/>
          <ProductTable products={products}/>
      </div>
    );
  }
}

export default FilteredProductTable;
