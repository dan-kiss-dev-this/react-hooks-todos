import React, { useState, useContext } from "react"
import TodosContext from '../context'

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const { state, dispatch } = useContext(TodosContext)

  const handleSubmit = event => {
    event.preventDefault();
    dispatch({ type: 'ADD_TODO', payload: todo })
    setTodo('')
  }

  return (
    <form onSubmit={handleSubmit}>
      Add Todo <input
        style={{ backgroundColor: 'silver' }}
        type="text"
        onChange={e => setTodo(e.target.value)}
        value={todo}
      />
    </form>
  )
}