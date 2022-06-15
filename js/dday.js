const dDay = document.querySelector("#dDay");
const dDaySet = document.querySelector("#dDaySet");

const dDayForm = document.querySelector("#dday-form");
const dDayInputYear = document.querySelector("#ddayinputy");
const dDayInputMonth = document.querySelector("#ddayinputm");
const dDayInputDay = document.querySelector("#ddayinputd");
const dDays = document.querySelector("#ddays");

const DDAY_YEAR_KEY = "ddayY";
const DDAY_MONTH_KEY = "ddayM";
const DDAY_DAY_KEY = "ddayD";

const savedDays = localStorage.getItem(DDAY_DAY_KEY);

function getDDay() {
  const newddayyear = localStorage.getItem(DDAY_YEAR_KEY);
  const newddaymonth = localStorage.getItem(DDAY_MONTH_KEY);
  const newddayday = localStorage.getItem(DDAY_DAY_KEY);

  const setDate = new Date(
    `${newddayyear}-${newddaymonth}-${newddayday}T00:00:00+0900`
  );
  const setDateYear = setDate.getFullYear();
  const setDateMonth = setDate.getMonth() + 1;
  const setDateDay = setDate.getDate();
  const now = new Date();

  const distance = setDate.getTime() - now.getTime();

  const day = Math.floor(distance / (1000 * 60 * 60 * 24));
  const hours = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((distance % (1000 * 60)) / 1000);

  dDaySet.innerText = `${setDateYear}. ${setDateMonth}. ${setDateDay}`;
  dDay.innerText = `— ${day}d ${hours < 10 ? `0${hours}` : hours}h ${
    minutes < 10 ? `0${minutes}` : minutes
  }m ${seconds < 10 ? `0${seconds}` : seconds}s`;
}

const init = () => {
  getDDay();
  setInterval(getDDay, 1000);

  if (savedDays === null) {
    //dDayForm.classList.remove(HIDDEN_CLASSNAME);
    dDays.classList.add(HIDDEN_CLASSNAME);
    dDayForm.addEventListener("submit", onDDaySubmit);
  } else {
    dDayForm.classList.add(HIDDEN_CLASSNAME);
    dDays.classList.remove(HIDDEN_CLASSNAME);
  }
};

init();

function onDDaySubmit(event) {
  event.preventDefault();
  const newDDayYear = String(dDayInputYear.value).padStart(2, "0");
  const newDDayMonth = String(dDayInputMonth.value).padStart(2, "0");
  const newDDayDay = String(dDayInputDay.value).padStart(2, "0");
  dDayInputYear.value = "";
  dDayInputMonth.value = "";
  dDayInputDay.value = "";
  localStorage.setItem(DDAY_YEAR_KEY, newDDayYear);
  localStorage.setItem(DDAY_MONTH_KEY, newDDayMonth);
  localStorage.setItem(DDAY_DAY_KEY, newDDayDay);
  dDayForm.classList.add(HIDDEN_CLASSNAME);
  dDays.classList.remove(HIDDEN_CLASSNAME);
  dDayButton.innerText = "Delete D-Day";
  getDDay();
}

dDayForm.addEventListener("submit", onDDaySubmit);

//D-Day form 날짜 입력 최대길이 이상 자르기
function maxLengthCheck(object) {
  if (object.value.length > object.maxLength) {
    object.value = object.value.slice(0, object.maxLength);
  }
}

//D-Day 버튼
const dDayButton = document.querySelector("#ddaybutton button");

function clickDDayButton() {
  if (dDayButton.innerText == "D-Day") {
    dDayForm.classList.toggle(HIDDEN_CLASSNAME);
  } else if (dDayButton.innerText == "Delete D-Day") {
    localStorage.removeItem(DDAY_YEAR_KEY);
    localStorage.removeItem(DDAY_MONTH_KEY);
    localStorage.removeItem(DDAY_DAY_KEY);
    dDays.classList.add(HIDDEN_CLASSNAME);
    dDayButton.innerText = "D-Day";
  }
}

function dDayButtonText() {
  if (savedDays !== null) {
    dDayButton.innerText = "Delete D-Day";
  } else {
    dDayButton.innerText = "D-Day";
  }
}

function dDayButtonMouseenter() {
  dDayButton.style.fontWeight = "700";
}
function dDayButtonMouseleave() {
  dDayButton.style.fontWeight = "normal";
}

dDayButtonText();
dDayButton.addEventListener("click", clickDDayButton);
dDayButton.addEventListener("mouseenter", dDayButtonMouseenter);
dDayButton.addEventListener("mouseleave", dDayButtonMouseleave);

/////
//저장된디데이X -> 버튼이름 D-Day, 누르면 입력, class hidden
//저장된디데이O -> 버튼이름D-Day Delete, 누르면 삭제, class hidden
