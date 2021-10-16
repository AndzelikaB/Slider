const slideNumber = document.querySelector(".slideNumber");
let numberOfSlides = document.querySelector(".totalSlides");
const previewButton = document.querySelector(".previewButton");
const nextButton = document.querySelector(".nextButton");
var slide = document.querySelectorAll(".slide");
let countSlides = 0;
var slideCount = slide.length;

numberOfSlides = slideCount;

function changeSlide() {
    Array.from(slide).forEach(function (el) {
        el.classList.remove('active');
    });

    // Funkcja strzałkowa  Array.from(slide).forEach((el) => el.classList.remove('active'));

    let zmienna = slide[countSlides];
    zmienna.classList.add("active");

    Array.from(slide).forEach(function (el) {
        el.classList.add('d-none');
    });

    zmienna.classList.remove("d-none");

    console.log(countSlides);

}
// Kocham Andzie
function PreviewSlide() {
    countSlides--;
    if (countSlides < 0) {

        previewButton.disabled = true;
        console.log("przekroczono przedział w dó");


    }
    else {
        changeSlide();
    }

    slideNumber.innerHTML = countSlides + 1;
}

function NextSlide() {
    if (countSlides == numberOfSlides) {
        nextButton.disabled = true;
    }
    else if (countSlides < numberOfSlides) {
        countSlides++;
        slideNumber.innerHTML = countSlides + 1;
        console.log("next" + countSlides)
        changeSlide()

        previewButton.disabled = false;

    }

}
// Nasłuchiwanie
previewButton.addEventListener("click", PreviewSlide);
nextButton.addEventListener("click", NextSlide);


