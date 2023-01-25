let timerUpnumber = document.getElementById("timer");
let timerUp = parseInt(sessionStorage.getItem("timerUp")) || 1;
timerUpnumber.textContent = timerUp;

let start = function () {
  timerUp++;
  timerUpnumber.textContent = timerUp;
  sessionStorage.setItem("timerUp", timerUp);
};

setInterval(start, 1000);
