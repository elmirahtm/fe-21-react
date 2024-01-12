import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section4 = () => {
  return (
    <div>
<div className="news">
<h1>Articles & News</h1>
<p>It is a long established fact that a reader will be distracted by the of readable content of a page when lookings at its layouts the points of using.</p>
</div>
<div className="newscopy">
    <Image src="./SubContent.svg" alt='jb' width={500} height={460}/>
    <Image src="./SubContent1.svg" alt='jb' width={500} height={460}/>
    <Image src="./SubContent3.svg" alt='jb' width={500} height={460}/>
</div>


<div className="circle">
<div className="altyazi2">
  
<h1>Wanna join the interno?</h1>
<p>It is a long established fact  will be distracted.</p>
<Link href="./contact">
<button>Contact With Us 
  <span>
    <Image src="./Vector2.svg" alt='hhvjh' width={30} height={13}/>
  </span>
</button>
</Link>
</div>
</div>

    </div>
  )
}

export default Section4