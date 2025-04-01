import { useState } from "react"

export default function ToDoInput(props){
    const {handleAddTodos} = props
    const [inputValue, setInputValue] = useState('')
    return(
        <header>
            <input value={inputValue} onChange={(event)=>{setInputValue(event.target.value)}} placeholder="Enter to do..." />
            <button onClick={() => {handleAddTodos(inputValue) 
                setInputValue('')}}>Add</button>
        </header>
    )
}