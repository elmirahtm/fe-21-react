import React from 'react'

const Header2 = ({id,username,email,password,deletuser,edituser}) => {
  return (
 <div>
     
     <h1 key={id}>{ `username: ${username}`}  </h1>
    <h5 key={id}>{` password:${password}`}</h5>
    <h4 key={id}>{`email: ${email}`}</h4>
    <button onClick={()=>deletuser(id)}>delete</button>
    <button  onClick={()=>edituser(id,username,email,password)}>Edit</button>
 </div>
  )
}

export default Header2