const card=document.querySelector(".card")
const product=document.querySelector(".products")
const btn=document.querySelector(".btn")

let page = 1; 

async function products() {
   
    const postPerPage = 5; 
    let skip = (page - 1) * postPerPage; 
    const postUrl = `https://dummyjson.com/products?limit=${postPerPage}&skip=${skip}`;
  try {
    const response = await fetch(postUrl);
    const data = await response.json();
    console.log(data);
    product.innerHTML=data.products
    .map(post=>`<h3>${post.title}</h3>
        <p>${post.description}</p>`).join('')
  } catch (error) {
    console.error("Error fetching products:", error);
  }
}
btn.addEventListener('click',(e)=>{
    page++;
    products()
})
products();
