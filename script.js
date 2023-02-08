let idx = 1;
showSlides(idx);
function showSlides(n) {
  let i;
  let images = document.getElementsByClassName("picsShow");
  let dots = document.getElementsByClassName("dot");
  if (n > images.length) {
    idx = 1;
  }
  if (n < 1) {
    idx = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  images[idx - 1].style.display = "block";
  dots[idx - 1].className += " active";
}
function changeSlide(n) {
  showSlides((idx += n));
}
function currentSlide(n) {
  showSlides((idx = n));
}
//  scroll

function scrollToHome() {
  let elementSelected = document.getElementById("home");
  elementSelected.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
function scrollToAboutUs() {
  let elementSelected = document.getElementById("abUs");
  elementSelected.scrollIntoView({
    // block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
function scrollToImages() {
  let elementSelected = document.getElementById("imgPics");
  elementSelected.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
function scrollToServices() {
  let elementSelected = document.getElementById("servicesSec");
  elementSelected.scrollIntoView({
    block: "start",
    behavior: "smooth",
    inline: "start",
  });
}
