import React, { Component } from 'react';

import { Table } from 'react-bootstrap';

import FilterableProductTable from './../FilterableProductTable';
import ProductRow from './../ProductRow';

export default class ProductTable extends Component {
  render() {
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          <ProductRow dataToRow={this.props.dataToTable} />
        </tbody>
      </Table>
    );
  }
}
