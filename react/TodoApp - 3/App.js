import React from 'react';
import TodoItems from "./TodoItem"
import todosData from "./todosData"


function App() {

  const todoItem = todosdat.map(item => <TodoItem key={item.id} item={item}/>)

  return(
    <div className="todo-list" >
        {todoItems}
    </div>

  )

}
export default App
