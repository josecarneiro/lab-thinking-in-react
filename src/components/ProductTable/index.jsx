import React, { Component } from 'react';
import ProductRow from './../ProductRow';
import { Table } from 'react-bootstrap';

export class ProductTable extends Component {
  render() {
    const products = this.props.products;
    return (
      <Table striped bordered hover>
        <thead>
          <tr>
            <th>Product</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {products.map(product => (
            <ProductRow key={product.name} {...product} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ProductTable;
