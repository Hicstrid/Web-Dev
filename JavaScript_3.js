const dots = document.querySelectorAll('.dot'); 
const slides = document.querySelectorAll(".slides img");
let slideIndex = 0;
let intervalId = null;

//initializeSlider();
document.addEventListener("DOMContentLoaded", initializeSlider);
function initializeSlider(){

    if(slides.length > 0){
      slides[slideIndex].classList.add("displaySlide");
      intervalId = setInterval(rightSlide,5000);
    }
    
}

function showSlide(index){
    if (index >= slides.length) {
        slideIndex = 0;

    } else if(index < 0 ){
        slideIndex = slides.length - 1;
    }

    slides.forEach(slide => {
        slide.classList.remove("displaySlide");
    })
    slides[slideIndex].classList.add("displaySlide");
    if (index >= slides.length) slideIndex = 0;
    if (index < 0) slideIndex = slides.length - 1;

}

function leftSlide(){
slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex > 0) ? currentIndex - 1 : slides.length - 1;
    slides[currentIndex].classList.add('active');
}

 function rightSlide(){
    slideIndex++;
    showSlide(slideIndex);

}
function slideRight() {
    slides[slideIndex].classList.remove('active');
    slideIndex = (slideIndex < slides.length - 1) ? slideIndex + 1 : 0;
    slides[slideIndex].classList.add('active');
}

updateDots();

function updateDots() {
    dots.forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex); 
    });
}