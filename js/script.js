const slideNumber = document.querySelector(".slideNumber");
let numberOfSlides = document.querySelector(".totalSlides");
const previewButton = document.querySelector(".previewButton");
const nextButton = document.querySelector(".nextButton");
let slide = document.querySelectorAll(".slide");
let countSlides = 0;
var slideCount = slide.length - 1;
numberOfSlides.innerHTML = slideCount + 1;
numberOfSlides = slideCount;;

function changeSlide() {
    Array.from(slide).forEach((el) => el.classList.remove('active'));

    let cSlides = slide[countSlides];
    cSlides.classList.add("active");
    Array.from(slide).forEach(function (el) {
        el.classList.add('d-none');
    });
    cSlides.classList.remove("d-none");
}

function PreviewSlide() {
    countSlides--;
    if (countSlides == 0) {
        previewButton.disabled = true;
    }
    nextButton.disabled = false;
    changeSlide();
    slideNumber.innerHTML = countSlides + 1;
}

function NextSlide() {
    countSlides++;
    if (countSlides < numberOfSlides) {
        previewButton.disabled = false;
        nextButton.disabled = false;
    }
    else if (countSlides == numberOfSlides) {
        nextButton.disabled = true;
    }
    slideNumber.innerHTML = countSlides + 1;
    changeSlide()
}

// NS
previewButton.addEventListener("click", PreviewSlide);
nextButton.addEventListener("click", NextSlide);


