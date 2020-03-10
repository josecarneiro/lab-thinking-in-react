import React, { Component } from 'react';
import {Form} from 'react-bootstrap';

class Search extends Component {
  constructor(){
    super();
    this.state = {
      buttonOn: false
    }
    this.handleCheckBoxChange = this.handleCheckBoxChange.bind(this);
  }

  handleInputChange(event){
    const value = event.target.value;
    this.props.filterData(value, this.state.buttonOn);
  }

  handleCheckBoxChange(event){    
    this.setState(previousState => {
      return {
        buttonOn: !previousState.buttonOn
      }
    })
  }

  render() {
    return (
      <div>
        <Form>
            <Form.Group controlId="formBasicPassword">
                <Form.Label>Search</Form.Label>
                <Form.Control type="search" placeholder="Search" onChange={event => this.handleInputChange(event)}/>
            </Form.Group>
            <Form.Group controlId="formBasicCheckbox">
                <Form.Check type="checkbox" label="Only show products on stock" onChange={event => this.handleCheckBoxChange(event)} />
            </Form.Group>
        </Form>
      </div>
    );
  }
}

export default Search;
