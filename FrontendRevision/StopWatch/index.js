let count = 0;

let start = document.getElementById("start");
let stop = document.getElementById("stop");
let reset = document.getElementById("reset");
let counter = document.querySelector("span");
let id;

function updateTimerDisplay() {
  let hours = Math.floor(count / 3600);
  let minutes = Math.floor((count % 3600) / 60);
  let seconds = Math.floor(count % 60);
  counter.textContent=`${hours < 10 ? 0 : ""}${hours}:${
    minutes < 10 ? 0 : ""
  }${minutes}:${seconds < 10 ? 0 : ""}${seconds}`;
}
start.addEventListener("click",function(){
   id=setInterval(() => {
    count++
    updateTimerDisplay()
    console.log(count)
   }, 1000);
})

stop.addEventListener("click",function(){
    clearInterval(id)
    updateTimerDisplay()
})

reset.addEventListener("click",function(){
    count=0
    updateTimerDisplay()
})