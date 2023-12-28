import React, { useEffect, useState } from 'react'

const TodoList = () => {
const [value, setValue]=useState("")
const [todo,setTodo]=useState([])

const Check=()=>{
    if (value!=="" && todo!=="") {
        setTodo([...todo,value])
        setValue("");
    }
}

  return (


    <div>

<header>
    <h1>ToDoList</h1>
</header>

<div className='ib'>
<input type='text' placeholder='Add Text' value={value} onChange={(e)=>setValue(e.target.value)} />
<button onClick={Check}>Add User</button>
</div>


{
    todo.map((todos)=>{
return(
<h1>{todos}</h1>

)

    })
}


    </div>
  )
}

export default TodoList;