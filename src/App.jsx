import React, { Component } from 'react';
import './App.css';
import data from './data.json';
import 'bootstrap/dist/css/bootstrap.min.css';
import FilteredProductTable from './components/FilterableProductTable';

class App extends Component {
  constructor(){
    super();
    this.state = {
      data: data
    }
    this.filterData = this.filterData.bind(this);
  }

  filterData(input, stockOn){
    let filteredData = [];
    this.setState(previousState => {
      if(input === '') filteredData = [...data];
      else{
        (stockOn) ? filteredData = previousState.data.filter((value) => {
        return value.name.toLowerCase().includes(input.toLowerCase());
      }).filter(value => value.stocked) : filteredData = previousState.data.filter((value) => {
        return value.name.toLowerCase().includes(input.toLowerCase());
      })
      }
      return {
        data: filteredData
      }
    })
  }

  render() {
    return (
      <div className="app">
        <h1>Iron Store</h1>
        <FilteredProductTable products={this.state.data} filterData={(input, stockOn) => this.filterData(input, stockOn)}/>
      </div>
    );
  }
}

export default App;
