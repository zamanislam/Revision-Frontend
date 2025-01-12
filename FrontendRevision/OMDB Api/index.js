let search = document.getElementById("search");
let container = document.getElementById("container");

search.addEventListener("click", () => {
  getdata();
});

const getdata = async () => {
  let query = document.getElementById("input1").value;
  try {
    let res = await fetch(
      `https://www.omdbapi.com/?i=tt3896198&apikey=c2c0e3d6&s=${query}`
    );
    let data = await res.json();
    console.log(data.Search);
    displaydata(data.Search);
  } catch (error) {
    console.log(error);
  }
};


function displaydata(arr){
    container.innerHTML="";
     arr.forEach((ele)=>{
       let card = document.createElement("div");
   
       let image = document.createElement("img");
       image.src = ele.Poster;
       
   
       let title = document.createElement("h3");
       title.textContent = ele.Title;
   
       let year = document.createElement("h4");
       year.textContent = ele.Year;
   
       card.append(image,title,year);
       container.append(card);
     })
   }