import React, { useState, useContext, useEffect } from "react";
import TodosContext from '../context';
import { uuid } from 'uuidv4';
import axios from 'axios';

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext)

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text)
    }
  }, [currentTodo.id])

  const handleSubmit = async event => {
    event.preventDefault();
    if (currentTodo.text) {
      const response = await axios.patch(`https://hooks-api-beige.vercel.app/todos/${currentTodo.id}`, {
        text: todo
      })
      dispatch({ type: "UPDATE_TODO", payload: response.data })
    } else {
      const response = await axios.post('https://hooks-api-beige.vercel.app/todos', {
        id: uuid(),
        text: todo,
        complete: false
      });
      dispatch({ type: 'ADD_TODO', payload: response.data })
    }
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      Add Todo <input
        // style={{ backgroundColor: 'silver' }}
        type="text"
        onChange={e => setTodo(e.target.value)}
        value={todo}
      />
      &nbsp;
      <button>Submit</button>
    </form>
  )
}