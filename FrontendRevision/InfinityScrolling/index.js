let container=document.getElementById("container")

page=1
// flag=false

let getData=async(api)=>{
    let res=await fetch(api)
    let data=await res.json()
    console.log(data)
    displayData(data)
}

getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)

let displayData=(data)=>{
    data.forEach((ele)=>{
        let card=document.createElement("div")

        let image=document.createElement("img")
        image.src=ele.url

        let title=document.createElement("h3")
        title.textContent=ele.title

        card.append(image,title)
        container.append(card)
    })
    // flag=true
}

window.addEventListener("scroll",()=>{
    let clientHeight=document.documentElement.clientHeight
    let scrollHeight=document.documentElement.scrollHeight
    let scrollTop=document.documentElement.scrollTop

    console.log(clientHeight,scrollHeight,scrollTop)

    if(Math.ceil(scrollHeight-clientHeight)<=Math.ceil(scrollTop)){
        console.log("Reach The Bottom,Fetch The Data")

        page++
        getData(`https://jsonplaceholder.typicode.com/photos?_page=${page}&_limit=10`)

        // flag=false
    }




})