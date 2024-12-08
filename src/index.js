import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

gsap.from(".blue", {scrollTrigger: {trigger: ".blue", start: "50px 80%", markers: true}, duration: 5, ease:"power1.inOut", drawSVG: 0});
gsap.from(".purple", {scrollTrigger: ".purple", duration: 5, ease:"power1.inOut", drawSVG: 0});
// gsap.fromTo(".pulse", {drawSVG: "2% 0"}, {duration: 3, delay: 5, repeat: -1, drawSVG: "100% 102%"});








// import Rellax from "rellax";

// let rellax = new Rellax('.rellax');




//IMAGE COLLAGE / CUSTOM MODAL CAROUSEL
const image = document.querySelectorAll('.img-container');
const modal = document.querySelector('.modal');
const closeModalX = document.querySelector('.close-modal');
const track = document.querySelector('.inner-carousel');
const slides = Array.from(track.children);
const slideWidth = slides[0].getBoundingClientRect().width;

// position each slide side by side
const setSlidePosition = (slide, index) => {
    slide.style.left = slideWidth * index + 'px';
}
slides.forEach(setSlidePosition);

//add click listener to all images, store and send the image that has been clicked to openModal function
image.forEach(image => {
    image.addEventListener('click', () => {
        openModal(image);
    });
})
//add class to previously clicked image, reveal modal, send previously clicked image to exitModalListener function
function openModal(image) {
    image.classList.add('active-slide')
    modal.classList.remove('deactivated-modal');
    //if previously clicked image has an active class, run a function to position the carousel at that image upon opening the Modal
    if(image.classList.contains('active-slide')) {
        getSlidePos(image);
    }
    //
    addExitModalListener(image);
}
//add listener to exit button, carry and transfer previously clicked image to exitModal function
function addExitModalListener(image) {
    closeModalX.addEventListener('click', () => {
        exitModal(image);
    });
}
//remove class to previously clicked image and hide Modal, back to collage
function exitModal(image) {
    image.classList.remove('active-slide');
    modal.classList.add('deactivated-modal');
}

//get value of attribute on previously clicked collage image, change from string to number
function getSlidePos(image) {
    let selectedSlide = Number(image.getAttribute('data-slide'));
    //loop through array, use iteration as index and send out the elementnode that matches with selectedSlide value
    for(let i = 0; i < slides.length; i++) {
        if (i === selectedSlide) {
            moveToSlide(track, slides[i]);
        }
    }
}
//when clickin collage image, carousel is translated to that image in the carousel
const moveToSlide = (track, targetSlide) => {
    // track.style.transition = 'transform 250ms ease-in';
    track.style.transform = 'translateX(-' + targetSlide.style.left + ')';
}



//svg manipulation

const topSVG = document.querySelector('.cb-top');
const btmSVG = document.querySelector('.cb-btm')
window.addEventListener('resize', adjustBorderTop);
const topSVGHeight = topSVG.clientHeight;
topSVG.style.top = -topSVGHeight + "px";
const btmSVGHeight = btmSVG.clientHeight;
btmSVG.style.bottom = -btmSVGHeight + "px";

function adjustBorderTop() {
    const topSVGHeight = topSVG.clientHeight;
    topSVG.style.top = -topSVGHeight + "px";
    const btmSVGHeight = btmSVG.clientHeight;
    btmSVG.style.bottom = -btmSVGHeight + "px";
}
