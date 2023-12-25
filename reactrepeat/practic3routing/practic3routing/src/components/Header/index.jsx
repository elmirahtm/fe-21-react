import React from 'react'
import { Link, NavLink } from 'react-router-dom'
import MyRoutes from '../../Routes'

const Header = () => {
  return (
    <div className='header'>
        <div className="logo">
          <Link to="/">
          <img src="https://www.freeiconspng.com/thumbs/stars-png/yellow-star-png-image--yellow-star-png-image-2.png" alt="" />

          </Link>
        </div>
          <nav>
{
  MyRoutes.map(({id,title,path})=>{
    return(
      title && <NavLink key={id} to={path} >{title}</NavLink>
    )
  })
}
          </nav>
    </div>
  )
}

export default Header