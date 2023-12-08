const Increment=({setcount,reqem})=>{
    return (
        <button  onClick={()=>{setcount(reqem+1)}}>Increment</button>
    )
}
export default Increment;