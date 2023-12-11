import "./style.css"
const Darkmode=({mode,setmode})=>{
    const Changeable=()=>{
       
    
        if (mode) {
          document.body.style.backgroundColor="black"
          document.body.style.color="lime"
        } else {
          document.body.style.backgroundColor="white"
          document.body.style.color="hotpink"
        }
      setmode(!mode)
    
    }
    return(
        <div>
  <button onClick={Changeable} >{mode ? "dark" : "light"}</button>

<p>
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quam reprehenderit illo, ipsam accusamus quos dolore error cupiditate asperiores sed perferendis explicabo corrupti nihil culpa exercitationem facilis hic amet, nulla iusto.
    Eveniet error nihil fugiat vero doloribus. Aperiam saepe totam maiores! Voluptas, sit, placeat ratione quo et aut debitis quis ad eveniet maxime cupiditate sint praesentium voluptatibus molestiae deserunt eos eius!
    Nobis, et vel rerum non deleniti consequuntur assumenda optio velit, fugiat, distinctio ducimus nesciunt ipsum officiis accusantium. Incidunt et corporis porro! Quod enim laborum dicta, dolor minima inventore earum rerum.
    Sint rerum consectetur dignissimos velit ipsa incidunt ratione a, illum quae facilis porro architecto voluptatem autem maiores necessitatibus, quo enim quod harum ea tempora commodi praesentium, ipsum atque! Porro, ad?
</p>
        </div>
    )
}
export default Darkmode;