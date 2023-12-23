import React, { useContext, useEffect } from 'react'
import { UserContext } from './UserContext'
import  { ModeContex } from './ModeContex'


const Home = () => {
    const {name,surname}=useContext(UserContext)
    const {mode,setMode}=useContext(ModeContex)
useEffect(()=>{
    if (mode==="dark") {
        document.body.className="dark"
        
    }else{
        document.body.className="white"
    }
},[mode])
  return (
    <div>
        <button onClick={()=>{
            mode==="dark" ? setMode("light") : setMode("dark")
        }}>{mode === "dark" ? "gunes" : "ay"}</button>
    <h1>{name} {surname}</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam est officia aliquam quia, doloribus, magni aut autem fugit, quaerat nemo eaque quibusdam libero vero illum animi voluptatibus rem at dolorum.
    Minima quo quod aperiam hic quibusdam atque veritatis, tenetur error facere dolores dolorem dolore commodi! Officia, consectetur maxime vero repellat voluptatem sed, dolore quaerat eveniet doloribus doloremque minima perferendis quisquam.
    Suscipit consequuntur consectetur quod deserunt molestias tempore enim provident natus distinctio ab quibusdam laboriosam officia, impedit id fugiat minus voluptates, nam facilis? Nesciunt aspernatur voluptates porro. Fuga, aliquid totam. Voluptatibus.</p>
    </div>
  )
}

export default Home
