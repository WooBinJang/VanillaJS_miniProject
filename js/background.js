const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const BackgroundImg = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");

img.src = `./img/${BackgroundImg}`;
img.classList.add("img");
//document.body.appendChild(img);

const bodyBackgroundImg = document.querySelector(`body`);
bodyBackgroundImg.style.backgroundImage = `url(./img/${BackgroundImg})`;
// body에 스타일을 추가 하여 background에 image를 추가하여 매번 새로고침 할 때마다 랜덤한 배경이미지 나옴
