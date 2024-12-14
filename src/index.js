import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);

//intro border animations
gsap.from(".intro-blue", {scrollTrigger: {trigger: ".intro-blue", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});
gsap.from(".intro-purple", {scrollTrigger: {trigger: ".intro-purple", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});

//menu border animations
// gsap.from(".menu-blue", {scrollTrigger: {trigger: ".menu-blue", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});
// gsap.from(".menu-purple", {scrollTrigger: {trigger: ".menu-purple", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});

//gallery border animations
gsap.from(".gallery-top-blue", {scrollTrigger: {trigger: ".gallery-top-blue", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});
gsap.from(".gallery-top-purple", {scrollTrigger: {trigger: ".gallery-top-purple", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});
gsap.from(".gallery-mid-blue", {scrollTrigger: {trigger: ".gallery-mid-blue", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});
gsap.from(".gallery-mid-purple", {scrollTrigger: {trigger: ".gallery-mid-purple", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});
gsap.from(".gallery-btm-blue", {scrollTrigger: {trigger: ".gallery-btm-blue", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});
gsap.from(".gallery-btm-purple", {scrollTrigger: {trigger: ".gallery-btm-purple", start: "50px 80%", markers: true}, duration: 2.5, ease:"none", drawSVG: 0});

//hex cluster animations
//__top
gsap.set(".top-hex-cluster > *", {transformOrigin: "center"});
// gsap.set(".top-hex-cluster > *", {scale: 0});
// gsap.from(".top-hex-cluster > *", {scrollTrigger: ".top-hex-cluster", duration: 1, ease: "none", stagger: -.10, keyframes: [{scale: 1.3, ease: "power1.outIn"}, {scale: 1}]});

// //__mid
gsap.set('.middle-hex-cluster', {opacity: 0})
// gsap.set(".middle-hex-cluster > *", {transformOrigin: "center"});
// gsap.from(".middle-hex-cluster > *", {duration: .5, ease: "none", scale: 0, stagger: -.10});

// //__btm
gsap.set('.btm-hex-cluster', {opacity: 0})
// gsap.set(".btm-hex-cluster > *", {transformOrigin: "center"});
// gsap.from(".btm-hex-cluster > *", {duration: .5, ease: "none", scale: 0, stagger: -.10});

//text animations
//__top
gsap.set(".tm-left > * *", {transformOrigin: "center"});
gsap.set(".tm-left > * *", {scale: 0});

gsap.set(".tm-right > * *", {transformOrigin: "center"});
gsap.set(".tm-right > * *", {scale: 0});

// //__sandwich
gsap.set('.sandwich-menu', {opacity: 0});
// gsap.set(".sandwich-menu > * *", {transformOrigin: "center"});
// gsap.from(".sandwich-menu > * *", {duration: .5, ease: "none", scale: 0, stagger: .10});

// //__tacos
gsap.set('.tacos-menu', {opacity: 0})
// gsap.set(".tacos-menu > * *", {transformOrigin: "center"});
// gsap.from(".tacos-menu > * *", {duration: .5, ease: "none", scale: 0, stagger: .10});


//menu timeline
gsap.set('.top-hex > *', {scale: 0, transformOrigin: "center"});
gsap.set('.menu-shadow', {opacity: 0});
let tl1 = gsap.timeline({scrollTrigger: {trigger: '.menu-blue', start:"100px 80%", markers: true}});
let tl2 = gsap.timeline({scrollTrigger: {trigger: '.menu-purple', start: '200px 80%', markers: true}});

tl1
    .from('.menu-blue', {duration: 3, ease: "power1.inOut", drawSVG: 0}, "-=.5")
    .to('.top-hex-1 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]})
    .to('.top-hex-2 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")
    .to('.top-hex-3 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")
    .to('.top-hex-4 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")
    .to('.top-hex-5 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")
    .to('.top-hex-6 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")
    .to('.top-hex-7 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")
    .to('.top-hex-8 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")
    .to('.top-hex-9 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=.92")
    .to('.top-hex-10 > *', {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.out"}]}, "-=.92")
    .from(".tm-left > * *", {duration: .8, stagger: .10, keyframes: [{scale: 1.3, ease: "power1.outIn"}, {scale: 1}]}, "-=.8")
    .from(".tm-right > * *", {duration: .8, stagger: .10, keyframes: [{scale: 1.3, ease: "power1.outIn"}, {scale: 1}]}, "-=1.8")
    .to('.menu-shadow', {duration: .8, ease: "power1.inout", opacity: .7}, "-=2");
//

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
