import React, { useState } from "react";
import {useDispatch} from 'react-redux' 
import { addTodo } from '../features/todo/todoSlice'


function AddTodo() {
const [input, setInput] = useState();
const dispatch = useDispatch();
const addTodoHandler = (e) => {
    e.preventDefault()
    dispatch(addTodo(input));
    setInput("")
}
console.log("input",input)
  return (
    <div>
      <form onSubmit={addTodoHandler}>
        <lebel>
            Todo
        </lebel>
        <input type="text"
        placeholder="Enter tood..."
        value={input}
        onChange={(e) => 
            setInput(e.target.value)
        }
        >

        </input>
        <button type="submit">
        Add Todo
        </button>
      </form>
    </div>
  );
}

export default AddTodo;
