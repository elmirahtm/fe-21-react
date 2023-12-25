import React, { useContext, useEffect } from 'react'
import { ModeContext } from './ModeContext'

const Home = () => {
const {mode,setMode}=useContext(ModeContext);
useEffect(()=>{
  if (mode==="dark") {
    document.body.style.backgroundColor="black"
    document.body.style.color="white"
  }
  else{
    document.body.style.backgroundColor="white"
    document.body.style.color="black"
  }
},[mode])
  return (
    <div>

<button onClick={()=>{mode==="dark" ? setMode("light") : setMode("dark")}}>{mode==="dark" ? "light" : "dark"}</button>

<h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit adipisci inventore ratione, praesentium repellat voluptatem nihil quod ipsum aliquid unde quisquam dolore? Doloremque numquam consectetur id ab laboriosam, veniam quasi!
Nesciunt impedit exercitationem amet perferendis suscipit, aliquid ipsa debitis reiciendis quos vitae? Earum repudiandae, vero harum magnam delectus corporis fuga possimus voluptas id dolor, doloribus tenetur corrupti, odit deleniti est?
Harum dolore similique voluptate blanditiis magni voluptates excepturi ratione! Doloremque, voluptate minus. Praesentium, tenetur quas! Vitae, expedita iusto tenetur maxime molestiae ipsam suscipit cupiditate nostrum adipisci doloremque, minima tempora temporibus!</h1>
    </div>
  )
}

export default Home