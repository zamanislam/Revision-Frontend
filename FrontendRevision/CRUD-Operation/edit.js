let productObj=JSON.parse(localStorage.getItem("product-Obj"))

document.getElementById("input1").value=productObj.image
document.getElementById("input2").value=productObj.title
document.getElementById("input3").value=productObj.description
document.getElementById("input4").value=productObj.category
document.getElementById("input5").value=productObj.price
document.getElementById("input6").value=productObj.rating

document.querySelector("form")
.addEventListener("submit",function(){
    Formdata()
})

async function Formdata(){
    event.preventDefault()

    let image=document.getElementById("input1").value
    let title=document.getElementById("input2").value
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

    let res=await fetch(`http://localhost:3000/products/${productObj.id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    let data=await res.json()
    console.log(data)
    window.location.href="index.html"

}