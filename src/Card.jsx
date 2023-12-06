const Card=({imagesrc , title, description})=>{
    return(
        <div className="box">

            <img src={imagesrc}/>
            <h2>{title}</h2>
            <p>{description}</p>
        </div>
    )
}
export default Card;