// import { gsap } from "gsap";


// import Rellax from "rellax";

// let rellax = new Rellax('.rellax');


//psuedo-code for modal dialog carousel

//clicking image causes event
//container that takes up entire viewport is displayed (black bg with low opacity)
//a centered child container will contain the carousel

const image = document.querySelectorAll('.img-container');
const modal = document.querySelector('.modal');
const closeModalX = document.querySelector('.close-modal');

image.forEach(image => {
    image.addEventListener('click', openModal);
})
closeModalX.addEventListener('click', exitModal);

function openModal() {
    modal.classList.remove('deactivated-modal');
    closeModalX.classList.add('animated-exit');
}
function exitModal() {
    modal.classList.add('deactivated-modal');
}

const track = document.querySelector('.inner-carousel');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;



const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
// slides.forEach(setSlidePosition);





// attempt at increasing width of SVG dynamically as the viewport gets smaller
// let previousWidth = window.innerWidth;
// const container = document.querySelector('.holder');

// function adjustContainerWidth() {
//     const currentWidth = window.innerWidth;
//     const widthChange = currentWidth - previousWidth; // Calculate the change in width

//     // Get the current width in pixels
//     const currentContainerWidth = parseFloat(getComputedStyle(container).width);

//     if (widthChange > 0) { // Viewport has increased
//         // Decrease the width by the pixel change
//         const newWidth = Math.max(0, currentContainerWidth - widthChange); // Ensure it doesn't go negative
//         container.style.width = `${newWidth}px`;
//     } else if (widthChange < 0) { // Viewport has decreased
//         // Increase the width by the absolute pixel change
//         const newWidth = currentContainerWidth + Math.abs(widthChange);
//         container.style.width = `${newWidth}px`;
//     }

//     localStorage.setItem('containerWidth', container.style.width.replace('px', ''));

//     previousWidth = currentWidth; // Update previousWidth for next resize
// }

// window.addEventListener('resize', adjustContainerWidth);