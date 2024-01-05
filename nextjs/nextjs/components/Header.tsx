"use client"
import { strict } from 'assert'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const routes=[
    {id:1,title:"HOME", to:"/"},
    {id:2,title:"ABOUT", to:"/about"},
    {id:3,title:"CONTACT", to:"/contact"}
]
const Header = () => {
    const path= usePathname()
  return (
    <div>
     <header>
                    
{
    routes.map(({id,title,to})=>(
        <Link key={id} href={to} className={ path===to ? "active" : ""}>{title}</Link>    ))

}

 </header>
    </div>
  )
}

export default Header