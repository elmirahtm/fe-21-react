import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Section2 = () => {
  return (
    <div>
<div className="heading2">
    <h1>Follow Our Projects</h1>
    <p>It is a long established fact that a reader will be distracted by the of readable content of page  lookings at its layouts  points.</p>
</div>

<div className="logopicture">
<div className="step">
    <span>
        <Image src="./Image4.svg" alt='gun' width={325} height={368}/>
    </span>
<Link href="/pages">
<div className="altyazi">
   <h4>Modern Kitchan</h4>
<span><Image src="./Vector2.svg" alt='alt' width={30} height={13}/></span>
   </div>
</Link>
    
</div>


<div className="step2">

<span>
    <Image src="./Image5.svg" alt='svg ' width={325} height={368}/>

</span>
<Link href="/pages">
<div className="altyazi">
   <h4>Modern Kitchan</h4>
<span><Image src="./Vector2.svg" alt='alt' width={30} height={13}/></span>
   </div>
</Link>

</div>
</div>
<div className="logopicture2">
    
<div className="step3">

<span>
    <Image src="./Image6.svg" alt='svg2 ' width={325} height={368}/>

</span>
<Link href="/pages">
<div className="altyazi">
   <h4>Modern Kitchan</h4>
<span><Image src="./Vector2.svg" alt='alt' width={30} height={13}/></span>
   </div>
</Link>

</div>

<div className="step4">

<span>
    <Image src="./Image7.svg" alt='svg ' width={325} height={368}/>

</span>
<Link href="/pages">
<div className="altyazi">
   <h4>Modern Kitchan</h4>
<span><Image src="./Vector2.svg" alt='alt' width={30} height={13}/></span>
   </div>
</Link>
</div>


</div>


    </div>
  )
}

export default Section2