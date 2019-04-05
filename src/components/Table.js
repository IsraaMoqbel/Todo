import React, { Component } from 'react';
import TableRow from './TableRow';
import './Table.css';

class Table extends Component {

  render() {
    return (
    <div className="table">
        <table id="t01">
            <tbody>
            <tr>
                <th>Title</th>
                <th>Description</th> 
                <th>Date</th>
                <th>Type</th>
            </tr>
            {this.props.list.length > 0 ? this.props.list.map((item,index)=><TableRow row={item} key={index} deleteItem={this.props.deleteItem} editItem={this.props.editItem}/>): null}
            </tbody>

        </table>
    </div>
    );
  }
}

export default Table;
