// const imgSlides = document.querySelector('.img-slides');
// const carouselImages = document.querySelectorAll('img-slides img');
 
//buttons
// const prevBtn = document.querySelector('prev-btn');
// const nextBtn = document.querySelector('nxt-btn');

//Counter
// let counter = 1;
// const size = carouselImages[0].clientWidth;

// imgSlides.getElementsByClassName.transform = 'translateX(' +( - size * counter ) + 'px)' ;

//button listeners
// nextBtn.addEventListener('click' , ()=>{
//   imgSlides.style.transition= "transform 0.5s ease-in-out";
//   counter ++;
//   imgSlides.getElementsByClassName.transform = 'translateX(' +( - size * counter ) + 'px)' ;
//   console.log(counter);

// });

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
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