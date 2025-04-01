import React from 'react'

export default function ToDoList() {
let todos = [
  'Go to the gym',
  'Eat more fruits',
  'Read more books',
]

  return (
    <ul className='main'>{todos.map((todo,todoIndex)=>{
      return (
        <li className='todoItem' key={todoIndex}>
          {todo}
          <i class="fa-regular fa-pen-to-square"></i>
        </li>
      )
    })}</ul>
  )
}
