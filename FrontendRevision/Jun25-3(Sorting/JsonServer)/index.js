let url = `http://localhost:3000/products`;

let container = document.getElementById("container");

let ascButton = document.getElementById("asc");
let descButton = document.getElementById("desc");

async function getdata(url) {
  try {
    let res = await fetch(url);
    let data = await res.json();
    console.log(data);
    displaydata(data);
  } catch (error) {
    console.log(error);
  }
}

getdata(url);

function displaydata(data) {
  container.innerHTML = "";

  data.forEach((ele) => {
    let card = document.createElement("div");

    let image = document.createElement("img");
    image.src = ele.image;
    image.style.width = "200px";

    let title = document.createElement("h4");
    title.textContent = ele.title;

    let description = document.createElement("p");
    description.textContent = ele.description;

    let category = document.createElement("p");
    category.textContent = ele.category;

    let price = document.createElement("h4");
    price.textContent = ele.price;

    card.append(image, title, description, category, price);
    container.append(card);
  });
}

ascButton.addEventListener("click", () => {
  getdata(`http://localhost:3000/products?_sort=price&_order=asc`);
});

descButton.addEventListener("click", () => {
  getdata(`http://localhost:3000/products?_sort=price&_order=desc`);
});
