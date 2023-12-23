import { createContext } from "react";

export const UserContext=createContext({});


  const UserContextProvider=({children})=>{
    const user={name:"Elmira",surname:"Hatamova"}
    return (<UserContext.Provider value={user}>{children}

    </UserContext.Provider>)
  }
  export default UserContextProvider
  