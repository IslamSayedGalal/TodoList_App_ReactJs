import React, {Component} from 'react';
import TodoItems from './components/TodoItems/TodoItems';
import AddItems from './components/Addition/AddItems';

class App extends Component{
  state = {
    items:[
      {id:1, name:"Islam", age:21},
      {id:2, name:"Israa", age:19},
      {id:3, name:"Kareem", age:15},
    ]
  }

  // deleteItem = (id) => {
  //   console.log(id);
  //   let items = this.state.items;
  //   let i = items.findIndex(item => item.id === id)
  //   items.slice(i,1);
  //   this.setState({items});
  // }

  deleteItem =(id)=>{
    let items = this.state.items.filter(item =>{
      return item.id !== id;
    });
    this.setState({items});
  }

  addItem=(item)=>{
    item.id = Math.random();
    let items =this.state.items;
    items.push(item);
    this.setState({items});
  }
  render(){
    return (
      <div className="App container">
        <h1 className="text-center">Todo List</h1>
        <TodoItems items={this.state.items} deleteItem={this.deleteItem}/>
        <AddItems addItem={this.addItem}/>
      </div>
    );
  }
}

export default App;
