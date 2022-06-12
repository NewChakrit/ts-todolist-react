import React from 'react'
import {Todo} from '../modal'

type Props = {
    todo: Todo
    todos:Todo[]
    setTodos:React.Dispatch<React.SetStateAction<Todo[]>>
}

const SingleTodo = ({todo, todos, setTodos}:Props) => {
  return (
    <div>SingleTodo</div>
  )
}

export default SingleTodo