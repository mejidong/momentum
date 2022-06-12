/*const images = ["0.jpg", "1.jpg", "2.jpg"];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img");

bgImage.src = `img/${chosenImage}`;
bgImage.alt = "background images";
bgImage.classList.add("bgImg");

document.body.appendChild(bgImage);
*/

const body = document.querySelector("body");

const createImg = (number) => {
  //<img>요소를 만든다.
  const img = document.createElement("img");

  //<img> src, alt 값을 지정하고 'bgImg'클래스를 추가한다.
  img.src = `img/${number}.jpg`;
  img.alt = "background images";
  img.classList.add("bgImg");

  //<body>에 <img>삽입
  body.prepend(img);
};

const getRandom = () => {
  //이미지 개수. 얼마든지 변경 가능.
  const IMG_NUM = 35;

  //1부터 3까지의 랜덤 숫자 만들기
  let num = Math.floor(Math.random() * IMG_NUM) + 1;

  //이미지 생성함수 호출
  createImg(num);
};

//마지막으로 getRandom 함수 호출
getRandom();
