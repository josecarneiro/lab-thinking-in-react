import React, { Component } from 'react';
import ProductRow from './../ProductRow';

import { Table } from 'react-bootstrap';

const ProductTable = props => {
  
  const filterProducts = () => {
    const products = props.products;
    let displayProducts;
    if (props.showOnlyInStock) {
      displayProducts = products
        .filter(product => product.stocked)
        .filter(product =>
          product.name.toLowerCase().includes(props.searchQuery.toLowerCase())
        );
    } else {
      displayProducts = products.filter(product =>
        product.name.toLowerCase().includes(props.searchQuery.toLowerCase())
      );
    }
    return displayProducts;
  };

  const products = filterProducts();

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
};

export default ProductTable;
