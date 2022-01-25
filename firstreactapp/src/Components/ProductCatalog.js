export const ProductCatalog=(props)=>{
  return(
    <div>
    <img src={props.details.imgSource}></img>
    <a href={props.details.prodLink}>Buy here</a>
    <h3>Price:{props.details.price}</h3>
    </div>
  )
}