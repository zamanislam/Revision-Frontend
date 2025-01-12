import navbar from "./component/navbar.js";

let nav = document.getElementById("navbar");
nav.innerHTML = navbar();

const getData = async () => {
  try {
    let res = await fetch(
      `https://www.themealdb.com/api/json/v1/1/search.php?f=a`
    );
    let data = await res.json();
    console.log(data);
    display(data.meals);
    console.log(data.meals);
  } catch (error) {
    console.log(error);
  }
};
getData();

function display(data) {
  let container = document.getElementById("container");
  container.innerHTML = "";
  data.forEach((ele) => {
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.strMealThumb;

    let category = document.createElement("h4");
    category.textContent = ele.strCategory;

    let tag = document.createElement("h4");
    tag.textContent = ele.strTags;

    card.append(image, category, tag);
    container.append(card);
  });
}
