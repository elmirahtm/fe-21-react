import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {
  const url="http://localhost:3000/user"
  const[users,setUsers]=useState([])
  useEffect(()=>{
    axios.get(url).then(({data})=>{
setUsers(data)
    })
  })
  return (
    <div>
      {users.map(({email,username,password,id})=>{
return(
  <div key={id} className='container'>
  <h1>{email}  </h1>
  <h1>{username}</h1>
  <p>{password}</p>
  </div>
  
)
      })}
    </div>
  )
}

export default Home