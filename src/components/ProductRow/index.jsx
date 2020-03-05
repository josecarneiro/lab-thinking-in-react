import React, { Component } from 'react';

const ProductRow = props => {
  return (
    <tr style={!props.stocked ? { color: 'red' } : { color: 'inherit' }}>
      <td>{props.name}</td>
      <td>{props.price}</td>
    </tr>
  );
};

export default ProductRow;
