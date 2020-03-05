import React, { Component } from 'react';
import FilterableProductTable from './../FilterableProductTable';
import ProductRow from './../ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow dataToRow={this.props.dataToTable} />
        </tbody>
      </table>
    );
  }
}
