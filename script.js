const login=async()=>{
    let username=document.getElementById("username").value
    let password=document.getElementById("password").value
    // console.log(username,password)
    let res=await fetch("http://localhost:3000/users")
    let data=await res.json()
 let count=0
    data .forEach(element => {
        if(element.username==username&&element.password==password){
            window.alert("login successfully")
            window.location.href="./products.html"
            count++
        }
        
    });
    if(count===0){
        console.log("invalid credentials")
    }

}
let guestbtn=document.getElementById("guest")  
guestbtn.addEventListener("click",(e)=>{
    e.preventDefault();
     window.location.href="./products.html"
})
const signup=async()=>{
    let username=document.getElementById("username").value
    let usermail=document.getElementById("usermail").value
    let password=document.getElementById("password").value

    if (!username || !usermail || !password) {
        alert("All fields are required!");
        return;
    }
    let details={
        username:username,password:password,usermail:usermail
    }
    let res=await fetch( "http://localhost:3000/users",{
        method:"POST",
        headers:{"content-type":"application/json"},
        body:JSON.stringify(details)


    })
    let data=await res.json()
    console.log(data)


   
}
