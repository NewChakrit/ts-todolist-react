import React from 'react'
import "./style.css"
import {Todo} from '../modal'

interface Props {
  todos: Todo[]
  setTodos: React.Dispatch<React.SetStateAction<Todo[]>>
}



const TodoList: React.FC<Props> = ({todos, setTodos}:Props) => {
  return (
    <div className='todos'>
      {todos.map((todo,index)=>{
        <li>{todo.todo}</li>
      })}
       
    </div>
  )
}

export default TodoList