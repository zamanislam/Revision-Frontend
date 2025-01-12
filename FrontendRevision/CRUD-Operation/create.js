import navbar from "./component/navbar.js";

let nav=document.getElementById("navbar")
nav.innerHTML=navbar()

document.querySelector("form")
.addEventListener("submit",function(){
    FormData()
})

async function FormData() {
    event.preventDefault()

    let image=document.getElementById("input1").value
    let title =document.getElementById("input2").value
    let description=document.getElementById("input3").value
    let category=document.getElementById("input4").value
    let price=document.getElementById("input5").value
    let rating=document.getElementById("input6").value

    let obj={
        image,
        title,
        description,
        category,
        price,
        rating
    }
    console.log(obj)

    let res=await fetch(`http://localhost:3000/products`,{
        method:"POST",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    let data=await res.json()
    console.log(data)
}

