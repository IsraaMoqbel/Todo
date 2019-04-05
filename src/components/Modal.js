import React, { Component } from 'react';
import './Modal.css';

class Modal extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    document.addEventListener('mousedown', this.handleClick, false)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.handleClick, false)
  }
  
  handleClick(e) {
    if(this.node.contains(e.target)) {
      return;
    } else {
      this.props.toggle();
    }
  }
  render() {
    return (
      <form onSubmit={(e)=>this.props.handleSubmit(e)} >
        <div className="modal">
          <div className="modal-content" ref={node=>this.node=node}>
          <span className="close" onClick={()=>this.props.toggle()}>&times;</span>
            <input placeholder="Title" name="title" onChange={(e)=>this.props.handleChange(e)} value={this.props.todoData.title}/>
            <input placeholder="Description" name="description" onChange={(e)=>this.props.handleChange(e)} value={this.props.todoData.description}/>
            <input type="date" name="date" onChange={(e)=>this.props.handleChange(e)} value={this.props.todoData.date}/>
            <select name="type" onChange={(e)=>this.props.handleChange(e)} value={this.props.todoData.type}>
                <option value="Work">Work</option>
                <option value="Personal">Personal</option>
            </select>
            <input type="submit" value="Submit"/>
          </div>
        </div>

      </form>

    );
  }
}

export default Modal;
