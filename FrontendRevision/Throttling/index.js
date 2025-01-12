let url=`https://www.omdbapi.com/?i=tt3896198&apikey=c2c0e3d6&`

let input1=document.getElementById("search")
let btn=document.getElementById("search-btn")



btn.addEventListener("click",function(){
    throttle(fetchdata,1000)
})
 let flag=false

function throttle(func,delay){
     if(flag){
        return
     }

     func()
     flag=true
     setTimeout(() => {
        flag=false
     },delay);
}

async function fetchdata(){
    console.log("fetch the data")
    let inputVal=input1.value
    let res=await fetch(`${url}s=${inputVal}`)
    let data=await res.json()
    console.log(data)
    displaydata(data.Search)
}
let container=document.getElementById("container")

function displaydata(data){
    container.innerHTML=""
     data.forEach((ele)=>{
         
         let title=document.createElement("p")
         title.textContent=ele.Title
         title.addEventListener("click",function(){
             details(ele)
         })
 
         container.append(title)
     })
 
 }
 let box=document.getElementById("box")
 async function details(ele){
    box.innerHTML=""
     let card=document.createElement("div")
 
         
 
         let year=document.createElement("h4")
         year.textContent=ele.Year
 
         let type=document.createElement("h5")
         type.textContent=ele.Type
          
         let image=document.createElement("img")
         image.src=ele.Poster
 
         card.append(image,year,type,)
         box.append(card)
 }
 