import Count from "./components/Count";
import Decrement from "./components/Decrement";
import Increment from "./components/Increment";
import Reset from "./components/Reset";
import { useState } from "react";
import "./style.css"
const App=()=>{
  const [count,setCount]=useState(0)
  return(
    <div>
{/* <h1>{count}</h1>
<button onClick={()=>{setCount(count+1)}}>Increment</button>
<button onClick={()=>{setCount(count-1)}}>Decrement</button>
<button onClick={()=>{setCount(0)}}>Reset</button> */}



<Count countr={count}/>
<Reset  setcount= {setCount} />
<Decrement setcount={setCount} reqem={count}/>
<Increment setcount={setCount} reqem={count}/> 

    </div>
  )
}
export default App;
