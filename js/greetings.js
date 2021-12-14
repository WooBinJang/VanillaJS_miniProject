const loginInput = document.querySelector("#login-form input");
const loginForm = document.querySelector("#login-form");
const h1 = document.querySelector("h1");

function loginClick(event) {
  event.preventDefault();
  const username = loginInput.value;
  if (username) {
    localStorage.setItem("username", username);
    loginForm.classList.add("hidden");
    h1.classList.remove("hidden");
    h1.innerHTML = localStorage.getItem("username");
  }
}

if (localStorage.length > 0) {
  h1.classList.remove("hidden");
  h1.innerHTML = `Hello ${localStorage.getItem("username")}`;
  loginForm.classList.add("hidden");
}

loginForm.addEventListener("submit", loginClick);
