import React, { Component } from 'react';
import './App.css';
import Data from './data.json';
import FilterableProductTable from './components/FilterableProductTable';

class App extends Component {
  constructor() {
    super();
    this.state = {
      data: Data,
      query: '',
      checked: false
    };
    this.filterProducts = this.filterProducts.bind(this);
    this.inStock = this.inStock.bind(this);
  }
  filterProducts(query) {
    console.log(query);
    this.setState({
      query: query
    });
  }
  get sendFilteredProducts() {
    const filtered = this.state.data.filter(item => {
      const itemFiltered = item.name
        .toLowerCase()
        .includes(this.state.query.toLowerCase());
      if (!this.state.checked) {
        return itemFiltered;
      } else {
        return itemFiltered && item.stocked;
      }
    });
    return filtered;
  }

  inStock() {
    this.setState({ checked: !this.state.checked });
    // const filtered = this.sendFilteredProducts.filter(item => {
    //   if (!value) {
    //     return item;
    //   } else return item.stocked;
    // });
    // if (value === false) {
    //   return this.sendFilteredProducts.filter(item => {
    //     if (item.inStock === false) {
    //       return item;
    //     }
    //   });
    // }
    // return filtered;
    // console.log(filtered);
  }

  render() {
    return (
      <div className="App">
        <h1>Iron Store</h1>
        <FilterableProductTable
          data={this.sendFilteredProducts}
          filterProducts={this.filterProducts}
          inStock={this.inStock}
        />
      </div>
    );
  }
}

export default App;
