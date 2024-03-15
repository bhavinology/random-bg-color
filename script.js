function changecolor() {
  setInterval(() => {
    document.body.style.background = "green"; // write a function which gives random hex color code
  }, 1000);
}

const startBtn = document.querySelector("#start");
startBtn.addEventListener("click", changecolor);
