import React, { Component } from 'react';

import { Form } from 'react-bootstrap';

class SearchApp extends Component {
  render(){
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <Form.Label>Search</Form.Label>
          <Form.Control type="search"
                        name='query'
                        placeholder="Search for anything..."
                        onChange={this.props.handlerOnChange}
                        value={this.props.value} />
          </Form.Group>
  
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Only show products on stock" />
        </Form.Group>
       
      </Form>
    )
  }
  
}

export default SearchApp;
