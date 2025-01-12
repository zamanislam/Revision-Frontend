let tobj=JSON.parse(localStorage.getItem("ticket-obj"))

document.getElementById("inp1").value=tobj.title
document.getElementById("inp2").value=tobj.description
document.getElementById("inp3").value=tobj.status
document.getElementById("inp4").value=tobj.dueDate

document.querySelector("form").addEventListener("submit",function(){
    formdata()
})

async function formdata(){
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

    let res=await fetch(`http://localhost:3000/tickets/${tobj.id}`,{
        method:"PATCH",
        headers:{
            "Content-type":"application/json"
        },
        body:JSON.stringify(obj)
    })
    let dat=await res.json()
    console.log(dat)
    window.location.href="index.html"
}
