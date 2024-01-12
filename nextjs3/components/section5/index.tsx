import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section5 = () => {
  return (
<div>
<div className='com'>
<div className='css'>
<div className="img">
<Link href="/"> <Image src="./Logo .svg" alt='logo2' width={100} height={50}/></Link>

</div>

<p>It is a long established fact that a reader will be distracted lookings.</p>

<div className="img2">
    <Image src="./Icons.svg" alt='gc' width={150} height={100}/>
</div>
    </div>

<div className="css2">
<h2>Pages</h2>
<p>About Us</p>
<p>Our Project</p>
<p>Our Team</p>
<p>Contact Us</p>
<p>Services</p>

</div>

<div className="css3">

<h2>Services</h2>
<p>Kitchan</p>
<p>Living Area</p>
<p>Bathroom</p>
<p>Dining Hall</p>
<p>Bedroom</p>

</div>

<div className="css4">
<h2>Contact</h2>
<p>55 East Birchwood Ave. Brooklyn, New York 11201</p>
<p>contact@interno.com</p>
<p>(123) 456 - 7890</p>
</div>

    </div>
<div className="ptag">
<p>Copyright © Interno | Designed by Victorflow Templates - Powered by Webflow</p>
</div>
</div>

  )
}

export default Section5