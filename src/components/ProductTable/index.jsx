import React, { Component } from 'react';
import ProductRow from '../ProductRow';
import { Table } from 'react-bootstrap';
class ProductTable extends Component {
  render() {
    // console.log(this.props.filteredProducts);
    const filteredProducts = this.props.filteredProducts;
    return (
      <Table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Price</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map(product => (
            <ProductRow key={product.name} {...product} />
          ))}
        </tbody>
      </Table>
    );
  }
}

export default ProductTable;
