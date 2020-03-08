import React, { Component } from 'react';
import './App.scss';

import FilterableProductTable from './components/FilterableProductTable';

import data from './data.json';

class App extends Component {

  render() {
    return (
      <div className="App">
        <h1>IronStore</h1>

        <FilterableProductTable products={data} />
      </div>
    );
  }
}

export default App;
