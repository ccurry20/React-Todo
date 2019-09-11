// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import Todo from './Todo';
import React from 'react';

// const TodoList = ({todos, remove}) => {
//     const todoNode = todos.map((todo) => {
//         return (<Todo todo={todo} key={todo.id} remove={remove}/>)

//     });
//     return (<ul>{todoNode}</ul>);
// }

// export default TodoList;

const TodoList = props => (
    <ul>
        {
            props.items.map((item, index) => <li key={index}> {item}</li>) 
        }
    </ul>
);

export default TodoList; 