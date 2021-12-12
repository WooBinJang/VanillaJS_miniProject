const clock = document.querySelector("#clock");

function getDate() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

getDate();
setInterval(getDate, 1000);
