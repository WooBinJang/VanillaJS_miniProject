const date_ymd = document.querySelector("#date");

function getDate() {
  const date = new Date();
  let years = String(date.getFullYear());
  let months = String(date.getMonth()).padStart(2, "0");
  let days = String(date.getDate()).padStart(2, "0");
  let weekday = date.getDay();
  if (weekday === 0) {
    weekday = "Sunday";
  } else if (weekday === 1) {
    weekday = "Monday";
  } else if (weekday === 2) {
    weekday = "Tuesday";
  } else if (weekday === 3) {
    weekday = "Wednesday";
  } else if (weekday === 4) {
    weekday = "Thursday";
  } else if (weekday === 5) {
    weekday = "Friday ";
  } else if (weekday === 6) {
    weekday = "Saturday ";
  }
  //Tuesday, December 14th, 2021.
  date_ymd.innerHTML = `${weekday}, ${months} / ${days}th, ${years}`;
  console.log(date.innerHTML);
}

getDate();
setTimeout(getDate, 0);
