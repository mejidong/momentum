const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#greeting");
const todolistinput = document.querySelector("#todo-form");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

const mottoForm = document.querySelector("#motto-form");
const mottoInput = document.querySelector("#motto-form input");
const changeMotto = document.querySelector("#changeMotto");
const ChangeButtonMotto = document.querySelector("#changeGreeting button");

const MOTTO_KEY = "motto";

function onLoginSubmit(event) {
  event.preventDefault();
  loginForm.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
}

function paintGreetings(username) {
  greeting.innerText = `Hello, ${username}!`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
  mottoForm.classList.remove(HIDDEN_CLASSNAME);
  mottoForm.addEventListener("submit", onMottoSubmit);
  //todolistinput.classList.remove("hide");
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  loginForm.classList.remove(HIDDEN_CLASSNAME);
  loginForm.addEventListener("submit", onLoginSubmit);
} else {
  paintGreetings(savedUsername);
}

//Motto

function onMottoSubmit(event) {
  todolistinput.classList.remove("hide");
  event.preventDefault();
  mottoForm.classList.add(HIDDEN_CLASSNAME);
  const mottoname = mottoInput.value;
  localStorage.setItem(MOTTO_KEY, mottoname);
  paintMotto(mottoname);
}

function paintMotto(mottoname) {
  changeMotto.innerText = `${mottoname}`;
  mottoForm.classList.add(HIDDEN_CLASSNAME);
  if (savedUsername !== null) {
    todolistinput.classList.remove("hide");
  }
}

const savedMotto = localStorage.getItem(MOTTO_KEY);

if (savedMotto === null && savedUsername !== null) {
  todolistinput.classList.add("hide");
  mottoForm.classList.remove(HIDDEN_CLASSNAME);
  mottoForm.addEventListener("submit", onMottoSubmit);
} else {
  paintMotto(savedMotto);
}

function clickMottoButton() {
  changeMotto.classList.toggle(HIDDEN_CLASSNAME);
  if (changeMotto.classList.contains(HIDDEN_CLASSNAME)) {
    greeting.classList.remove(HIDDEN_CLASSNAME);
  } else {
    greeting.classList.add(HIDDEN_CLASSNAME);
  }
  buttonTextMotto();
}

function changeButtonMottoMouseenter() {
  ChangeButtonMotto.style.fontWeight = "700";
}
function changeButtonMottoMouseleave() {
  ChangeButtonMotto.style.fontWeight = "normal";
}

function buttonTextMotto() {
  if (changeMotto.classList.contains(HIDDEN_CLASSNAME)) {
    ChangeButtonMotto.innerText = "Show Motto";
  } else {
    ChangeButtonMotto.innerText = "Hide Motto";
  }
}

buttonTextMotto();
ChangeButtonMotto.addEventListener("click", clickMottoButton);
ChangeButtonMotto.addEventListener("mouseenter", changeButtonMottoMouseenter);
ChangeButtonMotto.addEventListener("mouseleave", changeButtonMottoMouseleave);
