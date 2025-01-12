let url=`https://jsonplaceholder.typicode.com/posts`
let container=document.getElementById("container")
let pagewrapper=document.getElementById("page-wrapper")

async function getdata(url) {
    try {
        let res=await fetch(`${url}`)
        pagination(res.headers.get("X-Total-count"),6)
        console.log(res.headers.get("X-Total-count"))
        let data=await res.json()
        console.log(data)
        displaydata(data)
    } catch (error) {
        console.log(error)
    }
}

getdata(`${url}?_page=1&_limit=6`)

function pagination(total,limit){
    let totalpage=Math.ceil(total/limit)

    pagewrapper.innerHTML=""

    for(let i=1;i<=totalpage;i++){
        let btn=document.createElement("button")
        btn.innerText=i;
        btn.addEventListener("click",()=>{
            getdata(`${url}?_page=${i}&_limit=6`)
        })
         pagewrapper.append(btn)
    }
}

function displaydata(data){
    container.innerHTML=""
    data.forEach((ele)=>{
        let card=document.createElement("div")

        let id=document.createElement("h1")
        id.textContent=ele.id

        let title=document.createElement("h2")
        title.textContent=ele.title

        let body=document.createElement("p")
        body.textContent=ele.body

        card.append(id,title,body)
        container.append(card)
    })
}