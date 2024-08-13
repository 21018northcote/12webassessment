let teamSlideIndex = 1;
showSlides(teamSlideIndex);

// Next/previous controls
function plusSlidesAbout(n) {
  showSlides(teamSlideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(teamSlideIndex = n);
}

function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("specials-slide");
  if (n > slides.length) {teamSlideIndex = 1}
  if (n < 1) {teamSlideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[teamSlideIndex-1].style.display = "flex";
}