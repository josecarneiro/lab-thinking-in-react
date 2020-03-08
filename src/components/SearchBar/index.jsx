import React, { Component } from 'react';
import { Form } from 'react-bootstrap';

class SearchBar extends Component {
  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control
            type="search"
            placeholder="Search for any product..."
            name="search"
            onChange={this.props.onInputChange}
          />
          <Form.Text className="text-muted"></Form.Text>
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check
            type="checkbox"
            label="Display only products on Stock"
            name="displayStock"
            onChange={this.props.inStockChange}
          />
        </Form.Group>
      </Form>
    );
  }
}
export default SearchBar;
