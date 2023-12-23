import { useEffect } from "react"
import {  createContext, useState } from "react"

export const ModeContex=createContext({})

 const ModeContexProvider = ({children}) => {
 const [mode,setMode]=useState("");
 useEffect(()=>{
if (!localStorage.getItem("mode")) {
  setMode("liht")
setMode(
  localStorage.getItem("mode"))
}
 },[])
 useEffect(()=>{
localStorage.setItem("mode",mode)
 },[mode])
    return (
    <ModeContex.Provider value={{mode,setMode} } > {children}

    </ModeContex.Provider>
  )
}

export default ModeContexProvider