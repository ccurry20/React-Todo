 import React from 'react';
// import TodoForm from './components/TodoComponents/TodoForm'; 
import TodoList from './components/TodoComponents/TodoList'; 


// class App extends React.Component {
//   // you will need a place to store your state in this component.
//   // design `App` to be the parent component of your application.
//   // this component is going to take care of state, and any change handlers you need to work with your state
//   constructor(props) {
//     super(props);
//     this.state = {
//       items: []
//     }
 
//     this.addItem = this.addItem.bind(this);
//   }
//   addItem(e) {
//     if (this._inputElement.value !== "") {
//       var newItem = {
//         text: this._inputElement.value,
//         key: Date.now()
//       };

//       this.setState((prevState) => {
//         return { 
//           items: prevState.items.concat(newItem) 
//         };
//       });
//       this._inputElement.value = "";
//     }
     
//     console.log(this.state.items);
       
//     e.preventDefault();
//   }

  
//   render() {
//     return (
//       <div>
//         <h2>Welcome to your Todo App!</h2>
//         <form onSubmit={this.addItem}>
//             <input ref={(a) => this._inputElement = a} placeholder="enter task">
//             </input>
//             <button type="submit">add</button>
//           </form>
//       </div>
//     );
//   }
// }

// window.id = 0; 
// class App extends React.Component {
//     // you will need a place to store your state in this component.
//     // design `App` to be the parent component of your application.
//     // this component is going to take care of state, and any change handlers you need to work with your state
//     constructor(props) {
//       super(props);
//       this.state = {
//         items: []
//       }
//     }

//     addTodo(val) {
//       const todo = {text:val, id:window.id++}
//       this.state.data.push(todo);
//       this.setState({data: this.state.data});
//     }
//     handleRemove(id){
//       const remainder = this.state.data.filter((todo) => {
//         if (todo.id !== id) return todo; 
      
//       });
//       this.setState ({data: remainder});
//     }

//     render() {
//       return (
//         <div>
//           <h1>Todo App</h1>
//           <TodoForm addTodo ={this.addTodo.bind(this)}/>
//           <TodoList 
//           todos = {this.state.data}
//           remove ={this.handleRemove.bind(this)}
//           />
//         </div>
//       );
//     }
//   }

class App extends React.Component {
    // you will need a place to store your state in this component.
    // design `App` to be the parent component of your application.
    // this component is going to take care of state, and any change handlers you need to work with your state
    constructor(props) {
      super(props);
      this.state = {
        term: '',
        items: []
      };
    }

    onChange = (event) => {
      this.setState ({ term: event.target.value}); 
    }

    onSubmit = (event) => {
      event.preventDefault(); 
      this.setState ({ 
        term: '', 
        items: [...this.state.items, this.state.term]
      });
    }

    render() {
      return (
        <div>
          <h1>Welcome to your Todo App!</h1>
          <form className="App" onSubmit ={this.onSubmit}>
          <input value = {this.state.term} onChange={this.onChange}/>
          <button>Submit</button>
          </form>
          <TodoList items={this.state.items} />
        </div>
      );
    }
  }


export default App;
