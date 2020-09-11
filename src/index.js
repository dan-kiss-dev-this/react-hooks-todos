import React, { useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'

const App2 = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState)

  return (
    <TodosContext.Provider value={{ state, dispatch }}>
      <TodoForm />
      <TodoList />
    </TodosContext.Provider>
  )

}

// const userName = "Dave"
//export const UserContext = React.createContext() // returns an object with 2 values, one is provider, other is consumer, set value as attribute in UserContext.Provider value={userName} wrapped around app

ReactDOM.render(
  <App2 />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
