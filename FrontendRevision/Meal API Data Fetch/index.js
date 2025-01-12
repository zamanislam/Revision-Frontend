let api=`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`

let container=document.getElementById("container")




let btn1=document.getElementById("get-category-data")
btn1.addEventListener("click",function(){
    getData()
})

let btn2=document.getElementById("get-ingredient-data")
btn2.addEventListener("click",function(){
    getData1()
})

// container.append(btn1,btn2)

function displayData(data){
    
    data.forEach((ele)=>{
    //   let container=document.getElementById("container")

        
        let card=document.createElement("div")

        let image=document.createElement("img")
        image.src=ele.strMealThumb
    
        let title=document.createElement("h3")
        title.textContent=ele.strMeal

        card.append(image,title)
        container.append(card)
    
    })
   }

let getData=async()=>{
  try {
    let res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood`)
  let data=await res.json()
  console.log(data)
  displayData(data.meals)
  console.log(data)
  } catch (error) {
    console.log(error)
  }

}

let api1=`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`

let getData1=async()=>{
    try {
      let res=await fetch(`https://www.themealdb.com/api/json/v1/1/filter.php?i=chicken_breast`)
    let data=await res.json()
    console.log(data)
    displayData1(data.meals)
    console.log(data)
    } catch (error) {
      console.log(error)
    }
  
  }

  function displayData1(data){
    container.innerHTML=""
    
    data.forEach((ele)=>{
      let container=document.getElementById("container")

        
        let card=document.createElement("div")

        let image=document.createElement("img")
        image.src=ele.strMealThumb
    
        let title=document.createElement("h3")
        title.textContent=ele.strMeal

        card.append(image,title)
        container.append(card)
    
    })
   }
  



