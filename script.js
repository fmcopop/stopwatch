// script.js
let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let resetButton = document.getElementById("reset");
let timeDisplay = document.querySelector(".time-display");

let timer;
let seconds = 0;

function formatTime(secs) {
  let hrs = Math.floor(secs / 3600);
  let mins = Math.floor((secs % 3600) / 60);
  let secsLeft = secs % 60;

  return (
    String(hrs).padStart(2, "0") +
    ":" +
    String(mins).padStart(2, "0") +
    ":" +
    String(secsLeft).padStart(2, "0")
  );
}

function startTimer() {
  if (!timer) {
    timer = setInterval(() => {
      seconds++;
      timeDisplay.textContent = formatTime(seconds);
    }, 1000);
  }
}

function stopTimer() {
  clearInterval(timer);
  timer = null;
}

function resetTimer() {
  stopTimer();
  seconds = 0;
  timeDisplay.textContent = "00:00:00";
}

startButton.addEventListener("click", startTimer);
stopButton.addEventListener("click", stopTimer);
resetButton.addEventListener("click", resetTimer);
