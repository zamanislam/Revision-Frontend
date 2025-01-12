import navbar from "./component/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()

let container=document.getElementById("container")

async function getData() {
    let res=await fetch(`http://localhost:3000/products`)
    let data=await res.json()
    console.log(data)
    displayData(data)
}
getData()

function displayData(data){
    container.innerHTML=""

    data.forEach((ele)=>{
        let card=document.createElement("div")

        let image=document.createElement("img")
        image.src=ele.image
    
        let title=document.createElement("h2")
        title.textContent=ele.title
    
        let price=document.createElement("h3")
        price.textContent=ele.price

        let edtbtn=document.createElement("button")
        edtbtn.textContent="Edit"
        edtbtn.addEventListener("click",function(){
            window.location.href="edit.html"
            localStorage.setItem("product-Obj",JSON.stringify(ele))
        })

        let dltbtn=document.createElement("button")
        dltbtn.textContent="Delete"
        dltbtn.addEventListener("click",async function(){
            let res=await fetch(`http://localhost:3000/products/${ele.id}`,{
                method:"DELETE",
                headers:{
                    "Content-type":"application/json"
                }
            })
             let data=await res.json()
             getData()
        })
        card.append(image,title,price,edtbtn,dltbtn)
        container.append(card)

    })
}