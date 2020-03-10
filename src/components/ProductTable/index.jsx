import React, { Component } from 'react';
import ProductRow from './../ProductRow';
import {Table} from 'react-bootstrap';

class ProductTable extends Component {
  render() {
    const { products } = this.props;
    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Name</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>
          {
            products.map(product => (
              <ProductRow {...product}/>
            ))
          }
          </tbody>
        </Table>
    </div>
    );
  }
}

export default ProductTable;
