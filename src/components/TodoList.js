import React, { useContext } from 'react'
import TodosContext from '../context'

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext)

  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span className={`${todo.complete && "line-through"}`} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}>{todo.text} </span>
            <span>Edit </span>
            <span onClick={() => dispatch({type: "REMOVE_TODO", payload: todo})}>Remove </span>
          </li>
        ))}
      </ul>
    </div>
  )
}