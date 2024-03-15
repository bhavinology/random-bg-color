function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

let intervalId;
function changecolor() {
  intervalId = setInterval(() => {
    document.body.style.background = randomColor(); // write a function which gives random hex color code
  }, 1000);
}

function stopChangingColor() {
  clearInterval(intervalId);
}

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", changecolor);

const stopBtn = document.querySelector("#stop");
stopBtn.addEventListener("click", stopChangingColor);
