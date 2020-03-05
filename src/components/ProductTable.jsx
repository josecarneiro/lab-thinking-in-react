import React, { Component } from 'react';
import './ProductTable.css';
import ProductRow from './ProductRow';
import { Table } from 'react-bootstrap';

class ProductTable extends Component {
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
          {this.props.products.map(product => (
            <ProductRow key={product.name} {...product} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ProductTable;
