import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/addtodo'
import Todo from './components/todo'

function App() {

  return (
    <>
      <h1>
      Redux Toolkit
      </h1>
      <AddTodo />
      <Todo />
    </>
  )
}

export default App
