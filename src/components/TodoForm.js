import React, { useState, useContext, useEffect } from "react"
import TodosContext from '../context'

export default function TodoForm() {
  const [todo, setTodo] = useState('')
  const { state: { currentTodo = {} }, dispatch } = useContext(TodosContext)

  useEffect(() => {
    if (currentTodo.text) {
      setTodo(currentTodo.text)
    }
  }, [currentTodo.id])

  const handleSubmit = event => {
    event.preventDefault();
    if(currentTodo.text){
      dispatch({ type: "UPDATE_TODO", payload: todo})
    } else {
      dispatch({ type: 'ADD_TODO', payload: todo })
    }
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