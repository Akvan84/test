const Products = async ()=>{
let data = await fetch("https://fakestoreapi.com/products")
let res = await data.json()
let product = res.map(elem=>{
    return `
    <div class="product">
          <h2>title: ${elem.title.substring(0,25)}...</h2>
          <img src="${elem.image}" alt="${elem.image}">
          <p>description: ${elem.description.substring(0,60)}...</p>
          <h3>price: ${elem.price} $</h3>
          <h3>rate: ${elem.rating.rate}</h3>
        </div>    
    `
})
document.querySelector(".products").innerHTML = product.join("")
}

export default Products