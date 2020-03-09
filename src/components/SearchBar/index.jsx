import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class SearchBar extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      searchQuery: '',
      autoComplete: 'off'
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const { value } = event.target;
    this.props.filterData(value);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="search"
            value={this.state.query}
            onChange={event => this.handleInputChange(event)}
            placeholder="Search Products"
            name="searchQuery"
            autoComplete="off"
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Display only products on Stock"
            name="displayInStockProducts"
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;
