import React from 'react';
import ListItem from './../ListItem';
import './style.scss';

function Table(props) {
  return (
    <table>
      <thead>
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody>
        <ListItem data={props.data} />
      </tbody>
    </table>
  );
}

export default Table;
