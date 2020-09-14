import React, { useState, useEffect, useContext, useReducer } from 'react';
import ReactDOM from 'react-dom';
// import App from './App';
import * as serviceWorker from './serviceWorker';
import TodosContext from './context';
import todosReducer from './reducer';
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList'
import axios from 'axios';

const useAPI = endpoint => {
  const [data, setData] = useState([])

  const getData = async () => {
    const response = await axios.get(endpoint)
    await setData(response.data)
  }

  useEffect(() => {
    getData()
  }, [])

  return data
}

const AppReformat = () => {
  const initialState = useContext(TodosContext);
  const [state, dispatch] = useReducer(todosReducer, initialState)
  const savedTodos = useAPI("https://hooks-api-beige.vercel.app/todos")

  useEffect(() => {
    dispatch({
      type: "GET_TODOS",
      payload: savedTodos
    })
  }, [savedTodos])

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
  <AppReformat />,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
