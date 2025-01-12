let url=`https://dbioz2ek0e.execute-api.ap-south-1.amazonaws.com/mockapi/get-countries`;

let container=document.getElementById("container")

let button1=document.getElementById("asce")
let button2=document.getElementById('desc')

button1.addEventListener("click",()=>{
    getdata(`${url}?sort=population&order=asc`)
})

button2.addEventListener("click",()=>{
    getdata(`${url}?sort=population&order=desc`)
})

async function getdata(url){
   let res=await fetch(url)
   let data=await res.json()
   console.log(data)
   displaydata(data.data)
}

getdata(url)

function displaydata(arr){
    container.innerHTML="";
    arr.forEach((ele)=>{
      let card = document.createElement("div");
  
      let country = document.createElement("h3");
      country.textContent = ele.country;
  
      let pop = document.createElement("p");
      pop.textContent = ele.population;
  
      let rank = document.createElement("p");
      rank.textContent = ele.Rank;    
  
      card.append(country,pop,rank);
      container.append(card);
    })
  }