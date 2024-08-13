function scrollAppear(){
  var homeOrderContent = document.querySelector(".home-order-segment-container");
  var homeOrderContentPosition = homeOrderContent.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;

  if(homeOrderContentPosition < screenPosition){
    homeOrderContent.classList.add('home-order-segment-appear');
  }
}

window.addEventListener('scroll', scrollAppear);

const homeText = document.querySelector('.home-title-text');
const strHomeText = homeText.textContent;
const splitHomeText = strHomeText.split("");
homeText.textContent = "";
for(let i = 0; i < splitHomeText.length; i++){
  homeText.innerHTML += "<span>"+ splitHomeText[i] + "</span>"
}
let char = 0;
let timer = setInterval(onTick, 50);
function onTick(){
  const span = homeText.querySelectorAll('span')[char];
  span.classList.add('fade');
  char++;
  if(char === splitHomeText.length){
    complete();
    return;
  }
}

function complete(){
  clearInterval(timer);
  timer = null;
}

let specialsSlideIndex = 1;
showSlides(specialsSlideIndex);

// Next/previous controls
function plusSlidesHome(n) {
  showSlides(specialsSlideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(specialsSlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("specials-slide");
  if (n > slides.length) {specialsSlideIndex = 1}
  if (n < 1) {specialsSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[specialsSlideIndex-1].style.display = "flex";
}
