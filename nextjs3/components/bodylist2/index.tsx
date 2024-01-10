import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Bodylist2 = () => {
    const url="http://localhost:3000/user"
    const [user,setuser]=useState("")
    useEffect(()=>{
  axios.get(url).then(({data})=>{
    setuser(data)
  })
    },[])
  return (
   <div>
    {

    }
   </div>
  )
}

export default Bodylist2