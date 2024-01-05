import React, { useEffect, useState } from 'react'
import axios from "axios";
import Header2 from './Header2';

const Header = () => {
    const url="http://localhost:3000/posts/"
    const [user,setUser]=useState([])
    const [username,setUsername]=useState("")
    const [email,setEmail]=useState("")
    const [password,setPassword]=useState("")
    useEffect(()=>{
axios.get(url).then(({data})=>
setUser(data)
)
    },[])

  const  deletuser=(id)=>{
      axios.delete(url + id).then(({statusText})=>{
        if (statusText==="OK") {
       axios(url).then(({data})=>{
        setUser(data)
       })
        }
        })
    }
    const  edituser=(id,username,email,password)=>{
const newusername=prompt("Enter your username",username)
const newemail=prompt("Enter your username",email)
const newpassword=prompt("Enter your username",password)
// update=()=>{
//   username:newusername,
//   email:newemail,
//   password:newpassword
// }

axios.put(url +id ,{newemail,newpassword,newusername}).then(({statusText})=>{
if (statusText==="OK") {
  axios(url).then(({data})=>{
setUser(data)
  })
  
}
})

    }
    const adduser=(e)=>{
      e.preventDefault()
      axios.post(url ,{username,email,password,}).then(({statusText})=>{
if (statusText==="Created") {
  axios(url).then(({data})=>{
setUser(data)
  })
}
      })
    }

  return (
    <div>
         <form onSubmit={adduser}>

<input type="text" placeholder='username'  value={username} onChange={(e)=>setUsername(e.target.value)}/>
<input type="text" placeholder='email'value={email} onChange={(e)=>setEmail(e.target.value)}/>
<input type="text" placeholder='password'  value={password} onChange={(e)=>setPassword(e.target.value)}/>
<input type="submit"  value={"Add User"}/>

      
    </form>
    <div className='divv'>

 
{
  user.map(({id,email,username,password})=>{
    return(
      <div className='divsome'>
    <Header2 id={id} username={username} email={email} password={password} deletuser={deletuser} edituser={edituser} adduser={adduser}/>
      </div>
      
    )
  })
}
    </div>
    </div>
  )
}

export default Header