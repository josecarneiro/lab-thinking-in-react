import React, {Component} from 'react'
import ProductTable from './../ProducTable';
import SearchApp from './../SearchApp';



export default class FilteredTab extends Component {
  render() {
    return (
      <div>
        <SearchApp  value={this.props.query} handlerOnChange={this.props.handlerOnChange} />
        <ProductTable  products={this.props.data} filter={this.props.filter}></ProductTable>
        
      </div>
    )
  }
}

