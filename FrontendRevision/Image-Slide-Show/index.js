const images = [
    `https://m.media-amazon.com/images/M/MV5BODUwNDNjYzctODUxNy00ZTA2LWIyYTEtMDc5Y2E5ZjBmNTMzXkEyXkFqcGdeQXVyODE5NzE3OTE@._V1_SX300.jpg`,
    `https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg`,
    `https://m.media-amazon.com/images/M/MV5BZDYyMjQ0NDUtNDg0ZC00MDZhLTk2MTktZTUxZmU0NWYxZGE4XkEyXkFqcGdeQXVyMjMxNDQxNzQ@._V1_SX300.jpg`,
    `https://m.media-amazon.com/images/M/MV5BMzE5MzQ0MTA3MF5BMl5BanBnXkFtZTgwNTEyNzU5NTE@._V1_SX300.jpg`,
    `https://m.media-amazon.com/images/M/MV5BMDliOTIzNmUtOTllOC00NDU3LWFiNjYtMGM0NDc1YTMxNjYxXkEyXkFqcGdeQXVyNTM3NzExMDQ@._V1_SX300.jpg`
];

let container=document.getElementById("container")

let count=0

function displayData(images){
  setInterval(() => {
    container.innerHTML=""
    if(count<=4)
        count++
    if(count>4)
        count=0

    let image=document.createElement("img")
    image.src=images[count]
    container.append(image)
  }, 2000);
}

displayData(images)