import { useState } from "react";
import TodoItem from "./TodoItem";

function TodoList(){
    const [todos, setTodos] = useState([]);
    const [input, setInput] = useState('');
  
    const handleAddTodo = () => {
      if (input.trim() !== '') {
        const newTodo = { id: Date.now(), text: input };
        setTodos([...todos, newTodo]);
        setInput('');
      }
    };
  
    const handleChange = (event) => {
      setInput(event.target.value);
    };

    return(
        <div>
            
                <input type="text" value={input} onChange={handleChange}/>
                <button onClick={handleAddTodo}>Add task</button>
                <ul>
                {todos.map(todo => <TodoItem key={todo.id} todo={todo} />)}
                </ul>
        </div>
    );
}

export default TodoList;