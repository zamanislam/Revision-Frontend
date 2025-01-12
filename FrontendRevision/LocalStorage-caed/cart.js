let cartData=JSON.parse(localStorage.getItem("cart-data"))||[]
console.log(cartData)

let container=document.getElementById("container")

// displayData(cartData)

function displayData(arr){
    container.innerHTML=""
    arr.forEach((ele,i)=>{
        let card=document.createElement("div")
    
        
        let name=document.createElement("h2")
        name.textContent=ele.name
    
        let username=document.createElement("h3")
        username.textContent=ele.username
    
        let email=document.createElement("h4")
        email.textContent=ele.email
    
        let btn=document.createElement("button")
        btn.textContent="Remove"
        btn.addEventListener("click",function(){
            RemoveData(ele,i)
        })
        
    
        card.append(name,username,email,btn)
        container.append(card)
      })
}
displayData(cartData)
function RemoveData(ele,i){
   cartData.splice(i,1)
   displayData(cartData)
   localStorage.setItem("cart-data",JSON.stringify(cartData))
}
