"use client"
import {useRouter  } from "next/navigation";
import { FormEvent, useState } from "react"

export default function Home() {
  const [inputVal,setinputVal]=useState("")
  const {push}=useRouter()
  const handlesubmit=(event:FormEvent)=>{
    event.preventDefault();
    push(`/prediction/${inputVal}`)
  }
  return (
 <div className="min-h-screen flex ites-center justify-center bg-gray-100">
    <div className="p-4 shadow-md bg-white rounded-md">
  <h1 className="text-2xl font-semibold mb-4 text-black">Enter Your Name</h1>
    </div>

<form onSubmit={handlesubmit} >
<input type="text" placeholder="Type your name..." value={inputVal} className="w-full p-2 border-gray-300 rounded    text-black" onChange={(e)=>setinputVal(e.target.value)} />
<button type="submit" >Predict Data</button>
</form>

  </div>
  )
}
