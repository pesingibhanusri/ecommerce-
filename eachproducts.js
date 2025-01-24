const lastproducts=async()=>{
    let id=sessionStorage.getItem("prod_id")
    let res=await fetch(`https://fakestoreapi.com/products/${id}`)
    let data=await res.json()
    console.log(data)

let title=document.createElement("h1")
let price=document.createElement("h2")
let image=document.createElement("img")
let rating=document.createElement("h2")
let count=document.createElement("h2")
let des=document.createElement("p")
let cat=document.createElement("h1")
let div=document.createElement("div")

div.style.height="auto"
div.style.width="600px"
div.style.border="2px solid black"
div.style.marginLeft="400px"


title.style.marginLeft="100px"
image.style.marginLeft="240px"
price.style.marginLeft="50px"
count.style.marginLeft="50px"
des.style.marginLeft="50px"
rating.style.marginLeft="50px"
 

title.innerText=`Name:${data.title}`

image.setAttribute("src",data.image)
image.setAttribute("width","250px")
image.setAttribute("height","250px")
rating.innerText=`Rating : ${data.rating.rate}`
price.innerText=` Price: $${data.price}`
count.innerText=`Available pieces : ${data.rating.count}`
des.innerHTML=`<b>Product Description :</b>${data.description}`
cat.innerText=data.category


// div.appendChild(cat)
div.appendChild(title)

div.appendChild(image)
div.appendChild(price)
div.appendChild(count)
div.appendChild(rating)
div.appendChild(des)




document.body.appendChild(div)





}
window.onload=lastproducts()