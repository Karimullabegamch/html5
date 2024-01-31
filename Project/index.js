async function fetchData ()
{
    try
    {
        const res = await fetch("https://dummyjson.com/products");
        console.log(res)
        if (res.ok)
        {
            const data = await res.json()
            console.log(data)
            displayData(data.products)
        }
        else
        {
            console.error("fetching is not done Properly")
            }
    }
    catch (err)
    {
        console.error(err)
    }
}
const mainDiv= document.getElementById('products')
const cartCount = document.getElementById('count')
const cartPrice = document.getElementById('price')
let cart = [];
fetchData()
function displayData (data)
{
    console.log(data);
    data.forEach((pro) =>
    {
        const product = document.createElement('div')
        product.classList.add('product')
        const image = document.createElement('img')
        image.src = pro.thumbnail;
        const title = document.createElement('h2')
        title.textContent= pro.title
        const price = document.createElement('price')
        price.textContent = pro.price
        const cart_button = document.createElement('button');
        cart_button.textContent = "Add to Cart"
        const product_button=document.createElement("button")
		product_button.textContent = "Add to Cart"
        cart_button.setAttribute('data-product', JSON.stringify(pro))
        //pro object is stringified and stored inside data-product
        cart_button.addEventListener('click', addCart) 
        
        product.append(image, title, price, cart_button)
        mainDiv.appendChild(product)
    })
}
function addCart ()
{
    const newpro = JSON.parse(event.target.getAttribute('data-product'))
    console.log(newpro)
    cart.push(newpro)
    cartCount.textContent = cart.length;
    cartPrice.textContent = cart.reduce((sum,v) =>
    {
        console.log(v)
        console.log(sum)
      return  v.price + sum
    }
        , 0)
}
