import React from 'react';
import './style.scss';

function ListItem(props) {
  const data = props.data;

  return data.map(item => {
    let style;
    if (item.stocked === false) {
      style = { color: 'red' };
    }
    return (
      <tr key={item.name}>
        <td style={style}>{item.name}</td>
        <td>{item.price}</td>
      </tr>
    );
  });
}

export default ListItem;
