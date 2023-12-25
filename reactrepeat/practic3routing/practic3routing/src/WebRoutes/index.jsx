import React from 'react'
import { Routes,Route } from 'react-router';
import MyRoutes from '../Routes';

const WebRoutes = () => {
  return (
    <div>
      <Routes>
       {
        MyRoutes.map(({id,path,element})=>{
        return(
          <Route id={id} path={path} element={element}  />
        )
        })
       }
      </Routes>
    </div>
  )
}

export default WebRoutes;