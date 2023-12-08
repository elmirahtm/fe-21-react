const Decrement=({setcount,reqem})=>{
    return (
        <button  onClick={()=>{setcount(reqem-1)}}>Decrement</button>
    )
}
export default Decrement;