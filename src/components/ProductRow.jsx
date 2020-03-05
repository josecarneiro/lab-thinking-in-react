import React, { Component } from 'react';
import './ProductRow.css';

class ProductRow extends Component {
  render() {
    return (
      <tr style={this.props.stocked ? { color: 'inherit' } : { color: 'red' }}>
        <td>{this.props.name}</td>
        <td>{this.props.price}</td>
      </tr>
    );
  }
}

export default ProductRow;
