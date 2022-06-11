import './App.css';
import InputFeild from './components/InputFeild';
import { useState } from 'react';


const App: React.FC = () => {
  const [todo, setTodo] = useState<string>("")

  return (
    <div className="App">
    <span className="heading">Taskify</span>
    <InputFeild todo={todo} setTodo={setTodo}/>
    </div>
  );
}

export default App;
