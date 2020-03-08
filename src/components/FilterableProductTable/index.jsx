import React, { Component } from 'react';
import SearchBar from '../SearchBar';
import ProductTable from '../ProductTable';

class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
      checked: false
    };
    this.handleInputChange = this.handleInputChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleInputChange(event) {
    const value = event.target.value;
    this.setState({
      search: value
    });
  }

  handleInStockChange() {
    this.setState(previousState => ({
      checked: !previousState.checked
    }));
  }

  get filteredProducts() {
    let filteredProducts;
    if (this.state.checked) {
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
      <div>
        <SearchBar
          search={this.state.search}
          onInputChange={this.handleInputChange}
          inStockChange={this.handleInStockChange}
        />
        <ProductTable filteredProducts={this.filteredProducts} />
      </div>
    );
  }
}

export default FilterableProductTable;
