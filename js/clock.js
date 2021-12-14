const clock = document.querySelector("#clock");

function getDate() {
  const date = new Date();
  let hours = String(date.getHours()).padStart(2, "0");
  // padStart(n,"") : 인자의 길이가 n보다 작을경우 인자앞에 string 를 추가해주는 함수
  // // padEnd(n,"") :인자의 길이가 n보다 작을경우 인자뒤에 string 를 추가해주는 함수
  let minutes = String(date.getMinutes()).padStart(2, "0");
  let seconds = String(date.getSeconds()).padStart(2, "0");

  clock.innerHTML = `${hours} : ${minutes} : ${seconds}`;
}

getDate();
setInterval(getDate, 1000);
