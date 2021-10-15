const slideNumber = document.querySelector(".slideNumber");
const numberOfSlides = 5; //document.querySelector(".totalSlides");
const previewButton = document.querySelector(".previewButton");
const nextButton = document.querySelector(".nextButton");
var slide = document.querySelectorAll(".slide");
let countSlides = 0;

function changeSlides() {


    Array.from(slide).forEach(function (el) {
        el.classList.remove('active');
    });
    // Funkcja strzałkowa  Array.from(slide).forEach((el) => el.classList.remove('active'));

    // 
    //   slide.classList.add('active');

    console.log("grr");

}
// Kocham Andzie
function PreviewSlide() {
    if (countSlides >= 2) {
        countSlides--;
        changeSlides();
    }
    else {
        return;
    }
    slideNumber.innerHTML = countSlides;

}

function NextSlide() {
    if (countSlides < numberOfSlides) {
        countSlides++;
    } else {
        return;
    }
    slideNumber.innerHTML = countSlides;
}
// Nasłuchiwanie
previewButton.addEventListener("click", PreviewSlide);
nextButton.addEventListener("click", NextSlide);


