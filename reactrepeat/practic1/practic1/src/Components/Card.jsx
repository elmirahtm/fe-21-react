import React from 'react'

const Card = ({src,title}) => {
  return (
    <div>
        <div className="box">
<img src={src}  />
<p>{title}</p>

        </div>
    </div>
  )
}

export default Card