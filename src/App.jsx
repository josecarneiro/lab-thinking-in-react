import React, { Component } from 'react';
import './App.css';

import data from './data.json';

import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: data
    };
    this.filterData = this.filterData.bind(this);
  }

  filterData(input) {
    let filterData = [];
    this.setState(previousState => {
      input === ''
        ? (filterData = [...data])
        : (filterData = previousState.data.filter(value => {
            return value.name.toLowerCase().includes(input.toLowerCase());
          }));
      return {
        data: filterData
      };
    });
  }

  render() {
    return (
      <div className="App">
        <FilterableProductTable
          products={this.state.data}
          filterData={input => this.filterData(input)}
        />
      </div>
    );
  }
}

export default App;
