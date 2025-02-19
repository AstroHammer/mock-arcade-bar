import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

// import Rellax from "rellax";
// let rellax = new Rellax('.rellax');


//intro border animations
gsap.from(".intro-blue", {scrollTrigger: {trigger: ".intro-blue", start: "50px 80%"}, duration: 2.5, ease:"none", drawSVG: 0});
gsap.from(".intro-purple", {scrollTrigger: {trigger: ".intro-purple", start: "50px 80%"}, duration: 2.5, ease:"none", drawSVG: 0});

// //__btm
// gsap.set('.btm-hex-cluster', {opacity: 0})
// gsap.set(".btm-hex-cluster > *", {transformOrigin: "center"});
// gsap.from(".btm-hex-cluster > *", {duration: .5, ease: "none", scale: 0, stagger: -.10});

//text animations
//__top
gsap.set(".tm-left > *", {transformOrigin: "center"});
gsap.set(".tm-left > *", {opacity: 0, scale: .8, x: 20});

gsap.set(".tm-right > *", {transformOrigin: "center"});
gsap.set(".tm-right > *", {opacity: 0, scale: .8, x: 20});


//menu timeline
gsap.set('.top-hex > *', {transformOrigin: "top right", scale: 0});
gsap.set('.middle-hex-cluster .mid-blue-hex', {transformOrigin: "10% 60%", scale: 0});
gsap.set('.under-layer', {transformOrigin: "bottom left", x: "-50%", y: "50%", scale: 0})
gsap.set('.mid-layer', {transformOrigin: "top left", x: "-50%", y: "-50%", scale: 0})
gsap.set('.top-layer', {transformOrigin: "bottom right", x: "60%", y: "60%", scale: 0})
gsap.set('.menu-shadow', {opacity: 0});

let blueMenuAnimations = gsap.timeline({scrollTrigger: {trigger: '.menu-blue', start:"10% 80%"}});
let purpleMenuAnimations = gsap.timeline({scrollTrigger: {trigger: '.menu-purple', start: '-150% top'}});                                                                                                                                                           


blueMenuAnimations
    .from('.menu-blue', {duration: 3, ease: "power1.inOut", drawSVG: 0})

    .to('.top-hex > *', {stagger: -.03, keyframes: [{duration: .5, scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")

    .from(".tm-left > *", {duration: .8, stagger: .10, keyframes: [{opacity: .5, scale: .9, x:-25, ease: "power1.outIn"}, {opacity: 1, scale: 1, x:0, ease: "power1.outIn"}]}, "-=.8")
    .from(".tm-right > *", {duration: .8, stagger: .10, keyframes: [{opacity: .5, scale: .9, x:-25, ease: "power1.outIn"}, {opacity: 1, scale: 1, x:0, ease: "power1.outIn"}]}, "-=1")
    .to('.menu-shadow', {duration: .8, ease: "power1.inout", opacity: .8}, "-=2")

    .to('.mid-blue-hex', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.8")
    .to('.mid-purp-hex', {stagger: .04, keyframes: [{duration: .4, ease: "power1.inOut"}, {duration: .5, scale: 1, x: "0%", y: "0%", ease: "back"}]}, "-=.7")
;


gsap.set('.sandwich-menu > *', {transformOrigin: "center", scale: .8, opacity: 0, y: -20});
gsap.set('.sandwich-title', {opacity: 0, y:20})
gsap.set('.tacos-menu > *', {transformOrigin: "center", scale: .8, opacity: 0, y: -20});
gsap.set('.tacos-title', {opacity: 0, y:-20})

purpleMenuAnimations
    .from('.menu-purple', {duration: 3, ease: "power1.inOut", drawSVG: 0})
    .to('.sandwich-title', {duration: 1, opacity:1, y: 0}, "-=1")
    .to('.tacos-title', {duration: 1, opacity:1, y: 0}, "-=.8")
    .to('.sandwich-menu > *', {duration: .8, stagger: .10, keyframes: [{opacity: .5, scale: .9, y:25, ease: "power1.outIn"}, {opacity: 1, scale: 1, y:0, ease: "power1.outIn"}]})
    .to('.tacos-menu > *', {duration: .8, stagger: .10, keyframes: [{opacity: .5, scale: .9, y:25, ease: "power1.outIn"}, {opacity: 1, scale: 1, y:0, ease: "power1.outIn"}]}, "-=0.8")

;








//IMAGE COLLAGE / CUSTOM MODAL CAROUSEL
const image = document.querySelectorAll('.img-container');
const modal = document.querySelector('.modal');
const closeModalX = document.querySelector('.close-modal');
const track = document.querySelector('.inner-carousel');
const slides = Array.from(track.children);
const pageBody = document.querySelector('body');
const prevButton = document.querySelector('.arrow-left');
const nextButton = document.querySelector('.arrow-right');


// position each slide side by side
const setSlidePosition = (slide, index) => {
    let slideWidth = track.getBoundingClientRect().width;
    // figure out way to set slide position once, and never again until page reload
    slide.style.transform = `translateX(${slideWidth * index}px)`;
}

//add click listener to all images, store and send the image that has been clicked to openModal function
image.forEach(image => {
    image.addEventListener('click', () => {
        openModal(image);
        slides.forEach(setSlidePosition);
        window.addEventListener("resize", resizeSlideListener);
    });
})

function resizeSlideListener() {
    const slideWidth = track.getBoundingClientRect().width;
    const setSlidePosition = (slide, index) => {
        slide.style.transform = `translateX(${slideWidth * index}px)`;
    }
    slides.forEach(setSlidePosition);
}

//add class to previously clicked image, reveal modal, send previously clicked image to exitModalListener function
function openModal(image) {
    image.classList.add('active-slide')
    modal.classList.remove('deactivated-modal');
    pageBody.style.overflow = "hidden";
    addArrowButtonListeners();
    


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
        window.removeEventListener("resize", resizeSlideListener)
    });
}
//remove class to previously clicked image and hide Modal, back to collage
function exitModal(image) {
    image.classList.remove('active-slide');
    modal.classList.add('deactivated-modal');
    pageBody.style.overflow = "auto";
    removeTrackTransition();
    removeCurrentSlideClass();
}

//get value of attribute on previously clicked collage image, change from string to number
function getSlidePos(image) {
    let selectedSlide = Number(image.getAttribute('data-slide'));
    //loop through array, use iteration as index and send out the elementnode that matches with selectedSlide value
    for(let i = 0; i < slides.length; i++) {
        if (i === selectedSlide) {
            moveTrack(slides[i]);
            moveTrackAddFuncs(slides[i]);
            // incase resizing track upon opening modal carousel
            resizeCarouselTrack(slides[i]);
        }
    }
}
//when clickin collage image, carousel is translated to that image in the carousel
const moveTrack = (targetSlide) => {
    let slideIndex = slides.indexOf(targetSlide);
    let slideWidth = track.getBoundingClientRect().width; // Get updated width
    let targetTranslateX = slideIndex * slideWidth;
    track.style.transform = `translateX(-${targetTranslateX}px)`;
}

// things related to interacting with track/slides but separate from resize events, (used to be in moveTrack cause im a noob)
function moveTrackAddFuncs(targetSlide) {
    showHideButtons(targetSlide);
    removeCurrentSlideClass();
    addCurrentSlideClass(targetSlide);
}


// resizing track while in modal carousel
function resizeCarouselTrack(targetSlide) {
    window.addEventListener("resize", () => {
        moveTrack(targetSlide);
        removeTrackTransition();
    });
}

// loop thru slides 
// if a slide contains class, find that slide, and remove it's class and image class
function removeCurrentSlideClass() {
    for (let j = 0; j < slides.length; j++) {
        //if any slide has current-slide class, remove class
        if (slides[j].classList.contains('current-slide')) {
            slides[j].classList.remove('current-slide');
            //take the class that did contain current-slide and send it out to remove it's childs slide-transition class
            removeSlideTransition(slides[j]);
        }
    }
}
// add class to the selected/targeted slide and it's image
function addCurrentSlideClass(selectedSlide) {
    selectedSlide.classList.add('current-slide');
    addSlideTransition(selectedSlide);
}

function removeSlideTransition(prevTargetSlide) {
    let targetImage = prevTargetSlide.querySelector('.testing-img');
    targetImage.classList.remove('slide-transition');
}
function addSlideTransition(targetSlide) {
    let targetImage = targetSlide.querySelector('.testing-img');
    targetImage.classList.add('slide-transition');
}


// click arrow buttons moves track to next slide / previous slide
function addArrowButtonListeners() {
    prevButton.addEventListener('click', moveToPrevSlide);
    nextButton.addEventListener('click', moveToNextSlide);
}
// use current-slide class to determine what is 'next' or 'previous' slide
function moveToNextSlide() {
    const currentSlide = track.querySelector('.current-slide');
    const nextSlide = currentSlide.nextElementSibling;
    moveTrack(nextSlide);
    // incase resizing track while in carousel modal after moving track to different slide
    resizeCarouselTrack(nextSlide);
    moveTrackAddFuncs(nextSlide);
    addTrackTransition();
}
function moveToPrevSlide() {
    const currentSlide = track.querySelector('.current-slide');
    const prevSlide = currentSlide.previousElementSibling;
    moveTrack(prevSlide);
    // incase resizing track while in carousel modal after moving track to different slide
    resizeCarouselTrack(prevSlide);
    moveTrackAddFuncs(prevSlide);
    addTrackTransition();
}

// when on first slide of carousel there is no previous button
// when on last slide of carousel there is no next button
// when on neither first or last slide, there is both buttons

function showHideButtons(targetSlide) {
    if (targetSlide.classList.contains('first-slide')) {
        prevButton.style.display = 'none';
        nextButton.style.display = 'block';
    } else if (targetSlide.classList.contains('last-slide')) {
        nextButton.style.display = 'none';
        prevButton.style.display = 'block';
    } else {
        prevButton.style.display = 'block';
        nextButton.style.display = 'block';
    }
}

function addTrackTransition() {
    if (track.classList.contains('track-transition')) {
        return;
    } else {
        track.classList.add('track-transition');
    }
}
function removeTrackTransition() {
    track.classList.remove('track-transition');
}



// Collage Image Scroll Animations

//as viewport enters image area, images animate and appear
//add individual scrolltrigger to each image

// var tl = gsap.timeline();
// tl.to(image, {scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, rotate: 0, duration: 2, ease: "none"});

// var scrollargs = {
//     trigger: image, 
//     scrub: true, 
//     animation: tl, 
//     end: "bottom 80%", 
//     markers: true
// }

// ScrollTrigger.create(scrollargs);

// image.forEach(image => {
    
//     if (image.complete) {
//         ScrollTrigger.refresh();
//     } else {
//         image.addEventListener('load', () => {
//             ScrollTrigger.refresh();
//         })
//     }
// })


image.forEach(image => {
    gsap.to(image, {scrollTrigger: {trigger: image, scrub: true, endTrigger: image, end: "bottom 80%", markers: true}, scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, rotate: 0, duration: 2, ease: "none"})
});

gsap.to(".section-3-title", {scrollTrigger: {trigger: ".section-3-tc", start: "bottom 90%", end: "bottom 70%", scrub: true}, opacity: 1, translateY: 0})
