let url=`http://localhost:3000/tickets`;

let container=document.getElementById("container")

document.querySelector("form")
.addEventListener("submit",function(){
    formdata()
})

async function getdata(){
     try {
        let res=await fetch(`http://localhost:3000/tickets`)
        let data=await res.json()
        console.log(data)
        displaydata(data)
     } catch (error) {
        console.log(error)
     }
}
getdata()

function displaydata(data){
    data.forEach((ele)=>{
        let card=document.createElement("div")

        let desc=document.createElement("p")
        desc.textContent=ele.description

        let title=document.createElement("h3");
        title.textContent=ele.title;
      
        let status = document.createElement("p");
        status.textContent=ele.status;
    
        let duedate= document.createElement("p");
        duedate.textContent=ele.dueDate;

        let editbtn=document.createElement("button")
        editbtn.textContent="Edit"
        editbtn.addEventListener("click",function(){
            localStorage.setItem("ticket-obj",JSON.stringify(ele))
            window.location.href="edit.html"
        })

        let deletebtn=document.createElement("button")
        deletebtn.textContent="Delete"

        deletebtn.addEventListener("click",async function(){
            container.innerHTML=""
            let res=await fetch(`http://localhost:3000/tickets/${ele.id}`,{
               method:"DELETE",
               headers:{
                "Content-type":"application/json"
               }

            })
            getdata()
        })
        card.append(title,desc,status,duedate,editbtn,deletebtn)
        container.append(card)
    })
}

async function  formdata() {
    event.preventDefault()

    let title=document.getElementById("inp1").value
    let description=document.getElementById("inp2").value
    let status=document.getElementById("inp3").value
    let dueDate=document.getElementById("inp4").value

    let obj={
        title,
        description,
        status,
        dueDate
    }
    console.log(obj)

    let res=await fetch(`http://localhost:3000/tickets`,{
        method:"POST",
        headers:{
            "Content-type":"application-json"
        },
        body:JSON.stringify(obj)
    })
    let dat=await res.json()
    displaydata(dat)
}