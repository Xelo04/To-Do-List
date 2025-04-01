import ToDoInput from "./components/ToDoInput"
import ToDoList from "./components/ToDoList"
import ToDoCard from "./components/ToDoCard"
import { useState } from "react"

function App() {

  const [todos, setTodos] = useState([])

  function handleAddTodos(newTodo) {
    const newTodos = [...todos, newTodo]
    setTodos(newTodos)
  }
  return (
    <>
      <ToDoInput handleAddTodos={handleAddTodos}/>
      <ToDoList todos={todos}/>
    </>
  )
}

export default App
