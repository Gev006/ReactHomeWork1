import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BasicCounter from './components/basicCounter/basicCounter'
import ToDoList from './components/todoList/todoList'
import ToDoListWithReducer from './components/todoListWithReducer/todoList/todoListWithReducer'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BasicCounter/> */}
    {/* <ToDoList/> */}
    <ToDoListWithReducer />
  </React.StrictMode>,
)
