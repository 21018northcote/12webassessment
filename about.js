function scrollAppear(){
  var aboutContent = document.querySelector(".about-section-text");
  var aboutContentPosition = aboutContent.getBoundingClientRect().top;
  var screenPosition = window.innerHeight / 1.5;
  
  if(aboutContentPosition < screenPosition){
    aboutContent.classList.add('about-location-text-appear');
  }
}

window.addEventListener('scroll', scrollAppear);