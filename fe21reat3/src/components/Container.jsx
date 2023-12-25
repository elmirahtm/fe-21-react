import React, { useState } from "react"
const Container=()=>{
    const [inputValue,setinputValue]=useState("")
    const [todo,setTodo]=useState([])
    const Checkable=()=>{
        if (inputValue !=="" && todo !=="" ) {
           setTodo([...todo,inputValue])
           setinputValue("")
        }
      }
 return(
    <div>
  
    <div>
    <input type="text"  onChange={(e)=>{setinputValue(e.target.value) }} value={inputValue}/>
    <button onClick={Checkable}> Click me</button>
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
export default Container