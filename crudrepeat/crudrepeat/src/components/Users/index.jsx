
import React, { useEffect, useState } from 'react'
import axios from "axios";
import User from "../User";
const index = () => {
    const url="http://localhost:3000/user/"
    const [user,setUser]=useState([]);
    const [username, setUsername]=useState("")
    const [email, setEmail]=useState("")
    const [ password,setPassword]=useState("")
    useEffect(()=>{
  axios.get(url).then(({data})=>{
  setUser(data)
  })
    },[])
    const deletuser=(id)=>{
        axios.delete(url + id).then(({statusText})=>{
if (statusText==="OK") {
axios(url).then(({data})=>{
    setUser(data)
})
}
 }
   )
    }
    const edituser=(id,username,email,password)=>{
        const newname=prompt("edit user", username)
        const newemail=prompt("edit user", email)
        const newpassword=prompt("edit user", password)
        const update= {
            username:newname,
            email: newemail,
            password:newpassword
        }
axios.put(url + id,update).then(({statusText})=>{
    if (statusText==="OK") {
        axios(url).then(({data})=>{
            setUser(data)
           })
    }
  
})
    }
const adduser=(e)=>{
    e.preventDefault();
    axios.post(url,{
        username,
        email,
        password,}).then(({statusText})=>{
if (statusText==="Created") {
    axios(url).then(({data})=>{
        setUser(data)
    })
}
    })
}
  return (
<>
<form onSubmit={adduser} >
    <input placeholder='username' value={username} onChange={(e)=>setUsername(e.target.value)}/>
    <input placeholder='email' value={email} onChange={(e)=>setEmail(e.target.value)}/>
    <input placeholder='password' value={password} onChange={(e)=>setPassword(e.target.value)}/>
    <input type='submit' value={"Add User"}/>
</form>


<div className='cards'>
{
    user.map(({ username,password,email,id})=>{
        return(
            <User id={id}  username={username} email={email} password={password} deletuser={deletuser}  edituser={edituser} />
        )
    })
}
    </div>
</>
  )
}

export default index;