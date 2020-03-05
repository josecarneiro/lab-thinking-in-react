import React, { Component } from 'react';
import SearchBar from './SearchBar';
import ProductTable from './ProductTable';
import './FilterableProductTable.css';
import { Container } from 'react-bootstrap';

class FilterableProductTable extends Component {
  constructor() {
    super();
    this.state = {
      search: '',
      filterActive: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleBoxChange = this.handleBoxChange.bind(this);
  }

  handleInputChange(query) {
    this.setState({
      search: query
    });
  }

  handleBoxChange() {
    this.setState(previousState => ({
      filterActive: !previousState.filterActive
    }));
  }

  get filteredProducts() {
    let filteredProducts;
    if (this.state.filterActive) {
      filteredProducts = this.props.products
        .filter(product => {
          return product.stocked === true;
        })
        .filter(product => {
          return product.name
            .toLowerCase()
            .includes(this.state.search.toLowerCase());
        });
    } else {
      filteredProducts = this.props.products.filter(product => {
        return product.name
          .toLowerCase()
          .includes(this.state.search.toLowerCase());
      });
    }
    return filteredProducts;
  }

  render() {
    return (
      <Container>
        <h1>IronStore</h1>
        <SearchBar
          search={this.state.search}
          onInputChange={this.handleInputChange}
          onBoxChange={this.handleBoxChange}
        />
        <ProductTable products={this.filteredProducts} />
      </Container>
    );
  }
}

export default FilterableProductTable;
