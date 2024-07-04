function toggleMobileMenu(menu) {
  menu.classList.toggle('open');
}
function toggleBreadcrumb(breadcrumb) {
  breadcrumb.classList.toggle('toggle');
}

let navbar = document.getElementById("top-nav-container");

var sticky = 150;

function stickNav(){
  if(window.scrollY >= sticky){
    navbar.classList.add("stickNav");
  } else {
    navbar.classList.remove("stickNav");
  }
}

document.addEventListener("mousemove", function(event) {
    if (event.clientY < 50) {
      document.getElementById("top-nav-container").style.top = "0";
    } else {
      document.getElementById("top-nav-container").style.top = "-50%";
    }
    const windowHeight = window.innerHeight;
    const threshold = 20;
    if (event.clientY >= windowHeight - threshold) {
      document.getElementByClassName("Breadcrumb-container").style.bottom = "0";
    } else {
      document.getElementById("Breadcrumb-container").style.bottom = "-50%";
    }
});
window.onscroll = function() {
  stickNav();
};

