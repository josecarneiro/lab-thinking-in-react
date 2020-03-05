import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const query = event.target.value;
    this.props.onInputChange(query);
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="search"
            placeholder="Search a product"
            name="search"
            value={this.props.search}
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Only show products in stock"
            name="checkbox"
            onChange={this.props.onBoxChange}
          />
        </Form.Group>
      </Form>
    );
  }
}

export default SearchBar;
