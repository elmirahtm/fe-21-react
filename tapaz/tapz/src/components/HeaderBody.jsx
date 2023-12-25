import axios from 'axios'
import React, { useEffect, useState } from 'react'

const HeaderBody = () => {
const url="http://localhost:3000/posts"
const [post,setPost]=useState([]);
useEffect(()=>{
    axios.get(url).then(({data})=>{
        setPost(data)
            })
},[])
  return (
    <div className='divv'>
{
    post.map(({id,img,qiymet,name})=>{
        return(
<div className='div' key={id}>
    <img className='img' src={img} />
<p className='ptag'>{qiymet}</p>
<p className='ptag'>{name}</p>

</div>

        )
    })
}
    </div>
  )
}

export default HeaderBody