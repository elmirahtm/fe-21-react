"use client"
import axios from 'axios'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useState } from 'react'

const Bodylist2 = () => {
    const url="http://localhost:3000/port/"
    const [user,setuser]=useState([])
    useEffect(()=>{
  axios.get(url).then(({data})=>{
    setuser(data)
  })
    },[])

  return (
   <div>
    <div className='body'> <Image src="./Banner .svg" alt='banner' width={1920} height={710}/> </div>
    {
user.map(({id,title,description,oxumaq})=>{
  return(
    <div key={id} className='boxes'>
 <div className="box">
      <h2>{title}</h2>
       <p>{description}</p>
     
     <div className='h4span'>
<Link href="/project"><h4>{oxumaq}</h4></Link>
      <span><Image src="./Vector2.svg" alt='salam' width={30} height={13}/></span>
     </div>
 </div>
    </div>
  )
})
    }
   </div>
  )
}

export default Bodylist2