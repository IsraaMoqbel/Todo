import React, { Component } from 'react';
import './App.css';
import Modal from './components/Modal';
import Table from './components/Table';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faList } from '@fortawesome/free-solid-svg-icons'

library.add(faList)

class App extends Component {
  constructor(props) {
    super();
    this.state ={
      list:[],
      showModal:false,
      editMode:false,
      todoData:{
        id:-1,
        title:'',
        description:'',
        date:'',
        type:''
      }
    }
  }

  handleChange = (e) => {
    let todoData = {...this.state.todoData};
    todoData[e.target.name] = e.target.value;
    this.setState({ todoData });
  }

  handleSubmit = (e) => {
    e.preventDefault();
    this.setState((prevState)=>{
      return {...prevState, list:this.state.list.concat(this.state.todoData), todoData:{id: ++prevState.todoData.id,title:'',
      description:'',
      date:'',
      type:''},showModal:false}
    })
  }

  toggle = () => {
    this.setState({
      showModal: !this.state.showModal
    })
  }

  deleteItem= (id)=> {
    console.log(id);
    this.setState((prevStete)=> {
      return {list: this.state.list.filter((item,index)=> item.id !== id)}
    })
  }

  editItem= (id)=> {
    this.setState({
      showModal: !this.state.showModal,
      editMode: true,
      todoData:{
        id:id,
        title:this.state.list[id].title,
        description:this.state.list[id].description,
        date:this.state.list[id].date,
        type:this.state.list[id].type
      }
    });

  }

  handleEdit= (e,id)=> {
    e.preventDefault();
    let list = [ ...this.state.list ];
    list[id] = {
      id:id,
      title:this.state.todoData.title,
      description:this.state.todoData.description,
      date:this.state.todoData.date,
      type:this.state.todoData.type
    };
    this.setState((prev)=> {return {...prev,list, editMode:false ,todoData:{title:'',
    description:'',
    date:'',
    type:''}}});
    this.toggle();
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
        <FontAwesomeIcon icon="list" className="icon"/> ToDo App
        </header>
        <button onClick={()=>this.toggle()}>Add new Task</button>
        <Table list={this.state.list} deleteItem={this.deleteItem} editItem={this.editItem}/>
        
        {this.state.showModal && 
        <Modal 
        handleChange={this.handleChange} 
        todoData={this.state.todoData} 
        handleSubmit={this.handleSubmit} 
        toggle={this.toggle}
        editMode = {this.state.editMode}
        handleEdit= {this.handleEdit}/> }
      </div>
    );
  }
}

export default App;
