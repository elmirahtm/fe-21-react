import React, { useState } from 'react'

const HeaderInput = () => {
    const [value,setValue]=useState("");
    const [todo,setTodo]=useState([]);
    const handle=(e)=>{
        e.preventDefault()
        if (todo!=="" && value!=="") {
           setTodo([...todo,value]);

setValue("")
        }
    }
  return (
    <div className='btninput'>
        <input type="text" value={value} onChange={(e)=>{
            setValue(e.target.value)
        }} />
        <button onClick={handle}>Click me</button>
        
            {
                todo.map((todos,id)=>{
                    return(
                        <h4 key={id}>{todos}</h4>
                    )
                })
            }
        

    </div>
  )
}

export default HeaderInput;