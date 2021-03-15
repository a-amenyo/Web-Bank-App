const imgSlides = document.querySelector('.img-slides');
const carouselImages = document.querySelectorAll('img-slides img');
 
//buttons
const prevBtn = document.querySelector('prev-btn');
const nextBtn = document.querySelector('nxt-btn');

//Counter
let counter = 1;
const size = carouselImages[0].clientWidth;

imgSlides.getElementsByClassName.transform = 'translateX(' +( - size * counter ) + 'px)';

//button listeners
nextBtn.addEventListener('click' , ()=>{
  imgSlides.style.transition= "transform 0.5s ease-in-out";
  counter ++;
  console.log(counter);

});