import React, { useState } from 'react'
import "./style.css"
const Card = () => {
    const [count, setCount]=useState(0)
    const[name,setName]=useState(["elmira","mira"])
  return (
    <div>
<h2>{count}</h2>
<button  onClick={()=>setCount(count+1)}>Increment</button>
<button  onClick={()=>setCount(count-1)}>Decrement</button>
<button onClick={()=>setCount(0)}>Reset</button>
{/* <h1>{name}</h1>
<button onClick={()=>setName("gullu")} >cleck me</button> */}

{
    name.map((data,id)=>{
        return(
           
           <h4 key={id}>{id}- {data}   </h4>
            )
    })
}

<button onClick={()=>setName([...name,"gullu","mira"])} >cleck me</button> 

    </div>
  )
}

export default Card;