import React, { Component } from 'react';

import { Form } from 'react-bootstrap';

const SearchBar = props => {
  return (
    <Form>
      <Form.Group controlId="search-query">
        <Form.Control
          onChange={props.handleSearchChange}
          value={props.searchQuery}
          type="text"
          name="searchQuery"
          placeholder="Search..."
        />
      </Form.Group>
      <Form.Group controlId="check-stocked-products">
        <Form.Check
          type="checkbox"
          label="Show only products In Stock"
          onChange={props.handleSearchChange}
          name="showOnlyInStock"
          value={props.checked}
        />
      </Form.Group>
    </Form>
  );
};

export default SearchBar;
