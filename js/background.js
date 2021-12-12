const images = ["0.jpeg", "1.jpeg", "2.jpeg"];

const BackgroundImg = images[Math.floor(Math.random() * images.length)];

const img = document.createElement("img");

img.src = `./img/${BackgroundImg}`;

document.body.appendChild(img);
