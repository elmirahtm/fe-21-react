import axios from 'axios'
import React, { useEffect, useState } from 'react'


const EditUser = () => {
  const url="http://localhost:3000/user"

  const[users,setUsers]=useState([])
  useEffect(()=>{
axios.get(url).then(({data})=>{
  setUsers(data)
})
  },[])
  return (
    <div>
      {
        users.map(({id, email,username,password})=>{
          return(
            <div>

           <h1>{email}</h1>
           <h1>{username}</h1>
           <p>{password}</p>

            </div>
          )
        })
      }
    </div>
  )
}

export default EditUser