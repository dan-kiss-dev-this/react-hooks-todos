import React, { useContext } from 'react'
import TodosContext from '../context'
import axios from 'axios';

export default function TodoList() {
  const { state, dispatch } = useContext(TodosContext)

  return (
    <div>
      <ul>
        {state.todos.map(todo => (
          <li key={todo.id}>
            <span style={{ color: `${todo.complete ? "green": 'red'}`}} className={`${todo.complete && "line-through"}`} onClick={() => dispatch({ type: 'TOGGLE_TODO', payload: todo })}>{todo.text} </span>
            <button onClick={() => dispatch({ type: 'SET_CURRENT_TODO', payload: todo })}> Edit </button>
            <button onClick={async () => {
              await axios.delete(`https://hooks-api-beige.vercel.app/todos/${todo.id}`);
              dispatch({ type: "REMOVE_TODO", payload: todo });
            }
            }>Remove </button>
          </li>
        ))}
      </ul>
    </div>
  )
}