import React, { useEffect, useState } from 'react'

const Mode = () => {

    const [mode,setMode]=useState()
    useEffect(()=>{
if (mode==="dark") {
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
} else{
  document.body.style.backgroundColor="white"
  document.body.style.color="black"
}
    },[mode])
  return (
    <div>
   <button onClick={()=>mode==="dark" ? setMode("light") : setMode("dark")}>{mode==="dark" ? "light" : "dark"}</button>
        <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam hic reprehenderit itaque dolores corporis maxime debitis consequuntur, officia soluta blanditiis, est vero animi accusamus eligendi impedit adipisci, voluptatibus sequi aperiam!
        Distinctio asperiores vel aspernatur tenetur totam incidunt dolores recusandae, dolorem architecto quae quaerat modi beatae eos eveniet, suscipit consectetur id, aperiam temporibus? Debitis assumenda fuga esse iste at libero nostrum.
        Ut saepe facilis quia quam eum non dignissimos vitae maiores voluptate pariatur vel nihil eius nesciunt, mollitia at magni, recusandae, temporibus modi nisi repellat esse id animi obcaecati! Doloremque, vitae!</h1>
   
    </div>
  )
}

export default Mode