const button = document.getElementById("openBtn");
const music = document.getElementById("bgMusic");

const letter = document.getElementById("letter");

button.onclick = function(){
music.play();
    letter.classList.toggle("show");
document.getElementById("line1").style.display="none";
document.getElementById("line2").style.display="none";
document.getElementById("line3").style.display="none";

setTimeout(function(){

    document.getElementById("line1").style.display="block";

},500);

setTimeout(function(){

    document.getElementById("line2").style.display="block";

},1800);

setTimeout(function(){

    document.getElementById("line3").style.display="block";

},3500);
    if(letter.classList.contains("show")){

        button.innerHTML="💌 Đóng thư";

    }else{

        button.innerHTML="💌 Mở lá thư";

    }

}
// ===== Album ảnh =====

const images = [
    "images/1.jpg",
    "images/2.jpg",
    "images/3.jpg",
    "images/4.jpg",
    "images/5.jpg",
    "images/6.jpg",
    "images/7.jpg",
    "images/8.jpg",
    "images/9.jpg",
    "images/10.jpg"
];

let current = 0;

const slide = document.getElementById("slide");
const nextBtn = document.getElementById("nextBtn");
const prevBtn = document.getElementById("prevBtn");
function showImage(){

    slide.src = images[current];

}
nextBtn.onclick = function(){

    current++;

    if(current >= images.length){

        current = 0;

    }

    showImage();

}
prevBtn.onclick = function(){

    current--;

    if(current < 0){

        current = images.length - 1;

    }

    showImage();

}
setInterval(function(){

    current++;

    if(current >= images.length){

        current = 0;

    }

    showImage();

},3000);
function createHeart(){

    const container = document.getElementById("heart-container");

    const heart = document.createElement("div");

    heart.className = "heart";

    heart.innerHTML = "❤";

    heart.style.left = Math.random() * 100 + "vw";

    heart.style.bottom = "-50px";

    heart.style.fontSize = (20 + Math.random() * 25) + "px";

    heart.style.animationDuration = (4 + Math.random() * 3) + "s";

    container.appendChild(heart);

    setTimeout(function(){

        heart.remove();

    },7000);

}
setInterval(createHeart,400);
function createFlower(){

    const container = document.getElementById("flower-container");

    const flower = document.createElement("div");

    flower.className = "flower";

    flower.innerHTML = "🌹";

    flower.style.left = Math.random() * 100 + "vw";

    flower.style.fontSize = (18 + Math.random() * 18) + "px";

    flower.style.animationDuration = (5 + Math.random() * 4) + "s";

    container.appendChild(flower);

    setTimeout(function(){

        flower.remove();

    },9000);

}
setInterval(createFlower,800);