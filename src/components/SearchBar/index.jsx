import React, { Component } from 'react';
import FilterableProductTable from './../FilterableProductTable';
import Form from 'react-bootstrap/Form';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
    this.handleInStockChange = this.handleInStockChange.bind(this);
  }

  handleFilterTextChange(e) {
    this.props.onFilterTextChange(e.target.value);
  }

  handleInStockChange(e) {
    this.props.onInStockChange(e.target.checked);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <input
            type="search"
            placeholder="search for anything..."
            value={this.props.filterText}
            onChange={this.handleFilterTextChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <p>
            <input
              type="checkbox"
              checked={this.props.inStockOnly}
              onChange={this.handleInStockChange}
            />{' '}
            Only show products in stock
          </p>
        </Form.Group>
      </Form>
    );
  }
}
