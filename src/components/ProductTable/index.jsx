import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import FilterableProductTable from './../FilterableProductTable';
import ProductRow from './../ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <Table
        responsive
        striped
        borderless
        hover
        style={{ color: 'rgb(107, 94, 94)' }}
      >
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow
            dataToRow={this.props.dataToTable}
            filterDataToRow={this.props.filterData}
            inStockDataToRow={this.props.inStockData}
          />
        </tbody>
      </Table>
    );
  }
}
