import React, { Component } from 'react';
import ProductTable from './../ProductTable';

export default class ProductRow extends Component {
  render() {
    return !this.props.inStockDataToRow
      ? this.props.dataToRow
          .filter(product => {
            return product.name
              .toLowerCase()
              .includes(this.props.filterDataToRow.toLowerCase());
          })
          .map(singleProduct => (
            <tr
              key={singleProduct.name}
              style={
                singleProduct.stocked ? { color: 'inherit' } : { color: 'red' }
              }
            >
              <td>{singleProduct.name}</td>
              <td>{singleProduct.price}</td>
            </tr>
          ))
      : this.props.dataToRow
          .filter(product => {
            return (
              product.name
                .toLowerCase()
                .includes(this.props.filterDataToRow.toLowerCase()) &&
              product.stocked
            );
          })
          .map(singleProduct => (
            <tr
              key={singleProduct.name}
              style={
                singleProduct.stocked ? { color: 'inherit' } : { color: 'red' }
              }
            >
              <td>{singleProduct.name}</td>
              <td>{singleProduct.price}</td>
            </tr>
          ));
  }
}
