import React,{ useState } from 'react'
import viteLogo from '/vite.svg'
import ToDoList from './ToDoList'

function App() {

  return (
    <>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <ToDoList/>
    </>
  )
}

export default App
