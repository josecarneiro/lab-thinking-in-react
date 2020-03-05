import React, {Component} from 'react'
import ProductRow from './../ProductRow';

import { Table } from 'react-bootstrap';


export default class ProductTable extends Component {
  render() {
    const products = this.props.products;


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
            products.map( product => (
              <ProductRow {...product} />
              
            ))
          }
          
        </tbody>
      </Table>

      
      </div>
    )
  }
}




