import './App.css';
import InputFeild from './components/InputFeild';
import React, { useState } from 'react';
import { Todo } from './modal';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")
  const [todos, setTodos] = useState<Todo[]>([])

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault()
  }

  return (
    <div className="App">
    <span className="heading">Taskify</span>
    <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
    </div>
  );
}

export default App;
