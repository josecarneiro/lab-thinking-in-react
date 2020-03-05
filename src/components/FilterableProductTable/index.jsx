import React, { Component } from 'react';
import ProductTable from './../ProductTable';
import SearchBar from './../SearchBar';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: this.props.products
    };
  }
  render() {
    return (
      <div>
        <h1>
          <strong>IRON STORE</strong>
        </h1>
        <SearchBar  />
        <ProductTable dataToTable={this.state.data} />
      </div>
    );
  }
}
