//Image Slider Function
let images = document.querySelectorAll(".picsShow");
let dots = document.querySelectorAll(".dot");
let idx = 1;
showImgSlides(idx);
function showImgSlides(count) {
  let i;
  if (count > images.length) {
    idx = 1;
  }
  if (count < 1) {
    idx = images.length;
  }
  for (i = 0; i < images.length; i++) {
    images[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" targeted", "");
  }
  images[idx - 1].style.display = "block";
  dots[idx - 1].className += " targeted";
}
function changeSlide(count) {
  showImgSlides((idx += count));
}
function currentSlide(count) {
  showImgSlides((idx = count));
}
//  scroll to particular section
function scrollTo(sec) {
  let elementSelected = document.getElementById(sec);
  elementSelected.scrollIntoView({
    behavior: "smooth",
  });
}
function scrollToHome() {
  scrollTo("home");
}
function scrollToAboutUs() {
  scrollTo("abUs");
}
function scrollToImages() {
  scrollTo("imgPics");
}
function scrollToServices() {
  scrollTo("servicesSec");
}
