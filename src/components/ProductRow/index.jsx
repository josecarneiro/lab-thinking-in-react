import React, { Component } from 'react';
import ProductTable from './../ProductTable';

export default class ProductRow extends Component {
  render() {
    return this.props.dataToRow.map(singleProduct => (
      <tr
        key={singleProduct.name}
        style={singleProduct.stocked ? { color: 'inherit' } : { color: 'red' }}
      >
        <td>{singleProduct.name}</td>
        <td>{singleProduct.price}</td>
      </tr>
    ));
  }
}
