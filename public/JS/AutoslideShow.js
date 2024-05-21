let slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  clearInterval(slideInterval); // clear the interval
  showSlides(slideIndex += n);
  slideInterval = setInterval(function(){plusSlides(1)}, 3000); // set the interval again
}

// Thumbnail image controls
function currentSlide(n) {
  clearInterval(slideInterval); // clear the interval
  showSlides(slideIndex = n);
  slideInterval = setInterval(function(){plusSlides(1)}, 3000); // set the interval again
}
function showSlides(n) {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

// Automatic slideshow - change image every 3 seconds
let slideInterval = setInterval(function(){plusSlides(1)}, 3000);