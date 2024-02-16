import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import BasicCounter from './components/basicCounter/basicCounter'
import ToDoList from './components/todoList/todoList'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/* <BasicCounter/> */}
    <ToDoList/>
  </React.StrictMode>,
)
