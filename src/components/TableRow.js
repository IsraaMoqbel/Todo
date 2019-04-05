import React, { Component } from 'react';
import './Table.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faTrash, faEdit } from '@fortawesome/free-solid-svg-icons'

library.add(faTrash);
library.add(faEdit);

class TableRow extends Component {
  render() {
    return (
      <tr>
          <td>{this.props.row.title}</td>
          <td>{this.props.row.description}</td>
          <td>{this.props.row.date}</td>
          <td>{this.props.row.type}</td>
          <td 
          >
          <FontAwesomeIcon icon="trash" className="icon" onClick={()=>this.props.deleteItem(this.props.row.id)}/>
          <FontAwesomeIcon icon="edit" className="icon" onClick={()=>this.props.editItem(this.props.row.id)}/>

          </td>
      </tr>
    );
  }
}

export default TableRow;
