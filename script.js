function randomColor() {
  let hex = "0123456789ABCDEF";
  let color = "#";
  for (let i = 0; i < 6; i++) {
    color += hex[Math.floor(Math.random() * 16)];
  }
  return color;
}

function changecolor() {
  setInterval(() => {
    document.body.style.background = randomColor(); // write a function which gives random hex color code
  }, 1000);
}

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", changecolor);
