

async function products(){
    let container=document.getElementById("products")
    let res=await fetch("https://fakestoreapi.com/products")
    let data=await res.json()
    console.log(data)
    // let product=document.createElement("div")
    
    data.forEach(element => {
        let product=document.createElement("div")
        product.style.border="1px solid black"
         product.style.borderRadius="5px"
         product.style.padding = "10px";
        product.style.margin = "10px";
        product.style.textAlign = "center";
        product.style.width = "200px";
        product.style.backgroundColor="black"
        product.style.color="white"
        
       container.style.display="flex"
       container.style.flexWrap="wrap"
       container.style.justifyContent="space-evenly"



     let title=document.createElement("b")
     let price=document.createElement("p")
     let image=document.createElement("img")
     let btn=document.createElement("button")
     let btn2=document.createElement("button")
     let id=document.createElement("p")
     btn.innerText="showmore"
     btn2.innerText="Add To Cart"
     btn.onclick=()=>handleeachproduct(element.id)
     btn2.onclick=()=>addtocart(element.id)
     btn.style.backgroundColor="orange"
     
     title.innerText=element.title
     title.style.color="orange"
     price.innerText=`Price : ${element.price} $`
     image.setAttribute("src",element.image)
     image.setAttribute("width","100px")
     image.setAttribute("height","100px")
    //  let hr=document.createElement("hr")
     let br=document.createElement("br")
     let br2=document.createElement("br")
     let br3=document.createElement("br")
     
    //  id=element.id

     product.appendChild(title)
     product.appendChild(price)
     product.appendChild(image)
     product.appendChild(br)
     product.appendChild(br2)
     product.appendChild(btn)
     product.appendChild(br3)
     product.appendChild(btn2)

     container.appendChild(product)

    });














}
const handleeachproduct=(id)=>{
 
 window.sessionStorage.setItem("prod_id",id)
//  stores id
// each product access cheyali
 window.location.href="./eachproduct.html"
//  console.log(id) 
// then we see the id but above satements command then it come
}

const addtocart=(id)=>{
 window.sessionStorage.setItem("productsid",id)
 window.location.href="./addtocart.html"
}

window.onload=products

