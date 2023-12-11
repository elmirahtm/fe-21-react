import { useState } from "react";
import Darkmode from "./Components/Darkmode";
const App=()=>{
  const [mode,setmode]=useState(false)

  return(
    <div>
<Darkmode  mode={mode} setmode={setmode}/>
    </div>
  )
}
export default App;