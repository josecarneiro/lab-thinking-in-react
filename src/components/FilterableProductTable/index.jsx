import React, { Component } from 'react';
import ProductTable from './../ProductTable';
import SearchBar from './../SearchBar';

import Alert from 'react-bootstrap/Alert';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default class FilterableProductTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      filterText: '',
      inStockOnly: false
    };
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(filterText) {
    console.log('handleFilterTextChange()', filterText, this.state.filterText);
    this.setState({
      filterText: filterText
    });
  }

  handleInStockChange(inStockOnly) {
    console.log('handleInStockOnly()', inStockOnly, this.state.inStockOnly);
    this.setState({
      inStockOnly: inStockOnly
    });
  }

  render() {
    return (
      <div>
        <h1>
          <strong>IRON STORE</strong>
        </h1>
        <SearchBar
          filterText={this.state.filterText}
          inStockOnly={this.state.inStockOnly}
          onFilterTextChange={this.handleFilterTextChange}
          onInStockChange={this.handleInStockChange}
        />
        <div className="tableOfProducts">
          <ProductTable
            dataToTable={this.props.products}
            filterData={this.state.filterText}
            inStockData={this.state.inStockOnly}
          />
        </div>
      </div>
    );
  }
}
