/*const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.alt = "background images";
bgImage.classList.add("bgImg");

document.body.appendChild(bgImage);
*/

const body = document.querySelector("body");

const BG_EMOTIONAL = "bgEmotional";
const BG_MEJIDONG = "bgMejidong";
const THEMA = "thema";

const savedThema = localStorage.getItem(THEMA);

const ChangeButton = document.querySelector("#changeImg button");

const createImg = (number) => {
  //<img>요소를 만든다.
  const img = document.createElement("img");

  const bg = document.querySelector(".bgImg");
  if (bg) {
    body.removeChild(bg);
  }
  //<img> src, alt 값을 지정하고 'bgImg'클래스를 추가한다.

  if (savedThema === BG_MEJIDONG) {
    img.src = `img/${number}.jpg`;
  } else if (savedThema === BG_EMOTIONAL) {
    img.src = `img2/${number}.jpg`;
  }
  img.alt = "background images";
  img.classList.add("bgImg");

  //<body>에 <img>삽입
  body.prepend(img);
};

const getRandom = () => {
  //이미지 개수. 얼마든지 변경 가능.
  const IMG_NUM = 34;

  //1부터 3까지의 랜덤 숫자 만들기
  let num = Math.floor(Math.random() * IMG_NUM) + 1;

  //이미지 생성함수 호출
  createImg(num);
};

//마지막으로 getRandom 함수 호출
getRandom();
setInterval(getRandom, 15000);

//이미지 변경 버튼
function clickChangeButton() {
  if (savedThema === BG_MEJIDONG) {
    window.localStorage.removeItem(THEMA, BG_MEJIDONG);
    window.localStorage.setItem(THEMA, BG_EMOTIONAL);
  } else {
    window.localStorage.removeItem(THEMA, BG_EMOTIONAL);
    window.localStorage.setItem(THEMA, BG_MEJIDONG);
  }
  window.location.reload();
}

function buttonText() {
  if (savedThema == BG_MEJIDONG) {
    ChangeButton.innerText = "Change to Emotional-BG";
  } else {
    ChangeButton.innerText = "Change to Mejidong-BG";
  }
}

buttonText();
ChangeButton.addEventListener("click", clickChangeButton);
