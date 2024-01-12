import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section = () => {
  return (
  <div>
  <div className='asar'>
<aside>
    <h1>We Create The Art
Of Stylish Living
Stylishly</h1>

<p>It is a long established fact that a reader will be distracted by the of readable content of a page 
when lookings at its layouts the points of using 
that it has a more-or-less normal.</p>


<div className='too'>
    <Image src="Call.svg" alt='yvbyhv' width={50} height={40}/>
    <span><h5>012345678</h5></span>
</div>
<div>
<Link href="/">
<button>
        Get Free Estimate 
        <span>
        <Image src="Vector2.svg" alt='uib' width={20} height={13}/>
        </span> 

        </button>
</Link>
</div>
</aside>

<article>
<Image src="./Image.svg" alt='sjbv' width={400} height={500}/>
</article>

    </div>
<div className="qutu">
<h1>What the People Thinks
 About Us</h1>

<div className="qutuall">
<div className="qutu2">
    <div className='sekil'><Image  src="./natasha.svg" alt='c' width={40} height={50}/>
    <h6>Nattasha Mith</h6>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, accusamus voluptate repudiandae laboriosam error eal</p>
</div>
</div>
<div className="qutu3">
<div className='sekil'><Image src="./ray.svg" alt='d' width={40} height={50}/></div>
<h6>Raymond Galario</h6>
<p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Cupiditate, accusamus voluptate repudiandae laboriosam error ea!</p>
</div>
<div className="qutu4">
    <div className='sekil'><Image src="./stev.svg" alt='sbdvb' width={40} height={50}/></div>
    <h6>Benny Roll</h6>
    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Assumenda nihil harum mollitia nobis dolorem possimus.</p>
</div>
</div>
</div>
<div className="icon">
<Image src="./01.svg" alt='scsc' width={60} height={80}/>
<Image src="./02.svg" alt='bb' width={60} height={80}/>
<Image src="./03.svg" alt='nca' width={60} height={80}/>
<Image src="./04.svg" alt='elm' width={60} height={80}/>
<Image src="./05.svg" alt='jjs' width={60} height={80}/>

</div>
  </div>
  )
}

export default Section