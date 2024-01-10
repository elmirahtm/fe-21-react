import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
// interface Iprops {
//   id:number
//   to:"string"
//   title:"string"
// }
const Header = () => {
  const Links=[
{id:1, to:"/", title:"Home"},
{id:2, to:"/pages", title:"Pages"},
{id:3, to:"/services", title:"Services"},
{id:4, to:"/project", title:"Project"},
{id:5, to:"/blog", title:"Blog"},
{id:6, to:"/contact", title:"Contact"}

  ]

  return (
    <div className='urls'>
        <div className="logo">
           <Link href="/"> <Image src="./Logo .svg" alt='logo' width={177} height={50}/></Link>
        </div>
<div className="container">
{
  Links.map(({id,title,to})=>{
    return(
      <Link className='link' href={to}  key={id}>{title}</Link>
    )
  })
}

      <Image src="./Search.svg" alt='search' width={15} height={18}/>

</div>

    </div>
  )
}

export default Header