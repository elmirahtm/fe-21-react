import React from 'react'

const index = ({username,email,password,deletuser,id,edituser}) => {
  return (
            <div  className='card'>
                 <h1>{username}- {email}</h1>
                  <p>{password}</p>
                  <button onClick={()=>deletuser(id)}>delete</button>
                  <button onClick={()=>edituser(id,username,password,email)}>edit</button>
       
       </div>
    
  )
}

export default index