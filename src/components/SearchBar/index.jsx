import React, { Component } from 'react';
import FilterableProductTable from './../FilterableProductTable';
import Form from 'react-bootstrap/Form';

export default class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ''
    };
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    event.preventDefault();
    this.setState({ [event.target.name]: event.target.value });
  }

  get filteredMeals() {
    const filteredMeals = this.state.meals.filter(meal => {
      return meal.name.toLowerCase().includes(this.state.query.toLowerCase());
    });
    return filteredMeals;
  }

  render() {
    return (
      <Form>
        <Form.Group controlId="formBasicEmail">
          <input
            type="search"
            name="query"
            value={this.state.query}
            placeholder="search for anything..."
            onChange={this.handleInputChange}
          />
        </Form.Group>
        <Form.Group controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me out" />
        </Form.Group>
      </Form>
    );
  }
}
