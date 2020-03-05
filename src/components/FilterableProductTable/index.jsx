import React, { Component } from 'react';

import ProductTable from './../ProductTable';
import SearchBar from './../SearchBar';

import { Container } from 'react-bootstrap';

export class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      searchQuery: '',
      showOnlyInStock: false
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
  }

  handleSearchChange(event) {
    let value;
    const nameInput = event.target.name;
    if (nameInput === 'searchQuery') {
      event.preventDefault();
      value = event.target.value;
    } else {
      value = !this.state.showOnlyInStock;
    }
    this.setState({
      [nameInput]: value
    });
  }

  render() {
    return (
      <Container>
        <h1>Iron Store</h1>
        <SearchBar
          handleSearchChange={this.handleSearchChange}
          handleCheckChange={this.handleCheckChange}
          searchQuery={this.state.searchQuery}
          checked={this.state.showOnlyInStock}
        />
        <ProductTable
          key={this.props.products.data.name}
          products={this.props.products.data}
          searchQuery={this.state.searchQuery}
          showOnlyInStock={this.state.showOnlyInStock}
        />
      </Container>
    );
  }
}

export default FilterableProductTable;
