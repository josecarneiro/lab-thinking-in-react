import React, { Component } from 'react';
import SearchBar from './../SearchBar';
import ProductTable from './../ProductTable';
import { Container } from 'react-bootstrap';

export class FilterableProductTable extends Component {
  constructor() {
    super();
    this.filterData = this.filterData.bind(this);
  }

  filterData(input) {
    this.props.filterData(input);
  }

  render() {
    return (
      <Container>
        <h1>Iron Store</h1>
        <SearchBar filterData={input => this.filterData(input)} />
        <ProductTable products={this.props.products} />
      </Container>
    );
  }
}

export default FilterableProductTable;
