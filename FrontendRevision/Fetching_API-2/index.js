let api=`https://jsonplaceholder.typicode.com/comments?_page=1&_limit=10`

let btn=document.getElementById('btn')
let container=document.getElementById('container')
btn.addEventListener("click",function(){
    getData()
})

let getData=async()=>{
  try {
    let res=await fetch(api)
    let data=await res.json()
    console.log(data)
    displayData(data)
    console.log(data)
  } catch (error) {
    console.log(error)
  }
}

let displayData=(data)=>{
   container.innerHTML=""

   data.forEach((ele)=>{
    let card=document.createElement("div")

    let name=document.createElement("h3")
    name.textContent=ele.name

    let email=document.createElement("h4")
    email.textContent=ele.email

    let body=document.createElement("h5")
    body.textContent=ele.body

    card.append(name,email,body)
    container.append(card)
   })
}