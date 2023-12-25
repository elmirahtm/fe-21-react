import {  createContext, useState } from "react";



 export const ModeContext=createContext();

const MOodeContextProvider=({children})=>{
    const [mode,setMode]=useState()
    return(
        <ModeContext.Provider  value={{mode,setMode}} >
{children}
        </ModeContext.Provider>
    )
}
export default MOodeContextProvider;
