import React, { Component } from 'react';
import './App.css';
import products from './data.json'

import FilteredTab from './components/FilteredTab'

class App extends Component {
  constructor(){
    super();
    this.state={
      filterProducts: [],
      query: ''
    }
    
  }

  get filterProducts(){
    const filterProducts = this.state.filterProducts.filter(product => {
      return product.content.toLowerCase().includes(this.state.query.toLowerCase());
    });

    return filterProducts;
  }

  handleInputChange(event){
    const { name, value } = event.target;

    this.setState({
      [name]:value
    });
  }



  render() {
    return (
      <div className="App">
        <FilteredTab data={products} 
        filter={this.filterProducts}
        query={this.state.query}
        handlerOnChange={this.handleInputChange}
        />
      </div>
    );
  }
}

export default App;
