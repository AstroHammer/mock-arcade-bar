import { gsap } from "gsap";

import { DrawSVGPlugin } from "gsap/DrawSVGPlugin";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { MotionPathPlugin } from "gsap/MotionPathPlugin";
gsap.registerPlugin(DrawSVGPlugin);
gsap.registerPlugin(ScrollTrigger);
gsap.registerPlugin(MotionPathPlugin);

let preShow = document.querySelector('#cover-show');
window.addEventListener('load', showPage);

function showPage() {
    preShow.style.display = "none";
}


//INTRO
const sectionOne = document.querySelector('.section-1-wrapper');
const sectionTwo = document.querySelector('.section-2');
let bluepulsetl = [];
let purppulsetl = [];


// falsy/truthy variables
let blueIntroComplete = false;
let purpIntroComplete = false;
let menuDrawComplete = false;
let insideSectionOne = false;
let insideSectionTwo = false;


//need to separate call logic
//1. run pulses when draw is complete
//2. run pulses when entering targetSection (only if draw is complete)



//reset and stop when leaving targetSection

//blue
gsap.fromTo(".intro-blue", 
    {drawSVG: "0%", visibility: "visible"},
    {scrollTrigger: 
        {trigger:
            ".intro-blue", 
            start: "50px 80%",
            invalidateOnRefresh: true
        },
        duration: 2.5, 
        ease:"none", 
        drawSVG: "100%",
        onComplete: () => {
            if (ScrollTrigger.isInViewport(sectionOne)) {
                beginBluePulses();
            } else {
                console.log('hold bluepulse');
            }
            // if (insideSectionOne) {
            //     blueIntroComplete = true;
            //     beginBluePulses();
            // } else {
            //     console.log('hold bluepulse');
            // }
        }
    }
)

function beginBluePulses() {
    bluepulsetl.forEach(tl => tl.pause(0)); //just ultimate assurance
    bluepulsetl.forEach(tl => tl.kill()); //just ultimate assurance
    bluepulsetl = [];
    gsap.set(".lcd > .bluepulse", { opacity: 0 }); //starting opacity seemed to get messed up upon resizing/scrolling, had to apply reset
    //new modular attempt
    if (ScrollTrigger.isInViewport(sectionOne)) {
        console.log('section one trigger worked')
        bluepulsetl.push(animateBluePulses(".lcd > .bluepulse.regular", 2.8, 0, 1, "#intro-blue-path", sectionOne));
        bluepulsetl.push(animateBluePulses(".lcd > .bluepulse.small", 3, 1, 2, "#intro-blue-path", sectionOne));
    } 
    if (ScrollTrigger.isInViewport(sectionTwo)) {
        console.log('section two trigger worked')
        bluepulsetl.push(animateBluePulses(".menu-container > .bluepulse.pleft", 2.5, 0, 1, "#menu-blue-path-left", sectionTwo))
        bluepulsetl.push(animateBluePulses(".menu-container > .bluepulse.pright", 2.5, 0, 1, "#menu-blue-path-right", sectionTwo))
    }
    // if (insideSectionOne) {
    //     console.log('section one trigger worked')
    //     bluepulsetl.push(animateBluePulses(".lcd > .bluepulse.regular", 2.8, 0, 1, "#intro-blue-path", insideSectionOne));
    //     bluepulsetl.push(animateBluePulses(".lcd > .bluepulse.small", 3, 1, 2, "#intro-blue-path", insideSectionOne));
    // } 
    // if (insideSectionTwo) {
    //     console.log('section two trigger worked')
    //     bluepulsetl.push(animateBluePulses(".menu-container > .bluepulse.pleft", 2.5, 0, 1, "#menu-blue-path-left", insideSectionTwo))
    //     bluepulsetl.push(animateBluePulses(".menu-container > .bluepulse.pright", 2.5, 0, 1, "#menu-blue-path-right", insideSectionTwo))
    // }
}
function animateBluePulses(targetPulse, duration, delay, repeatDelay, pathAlign, targetSection) {
    let blueTl = gsap.timeline();
    blueTl.to(targetPulse, {
        motionPath: {
        path: pathAlign,
        alignOrigin: [.5, .5],
        autoRotate: true,
        align: pathAlign,
        },
        delay: delay,
        duration: duration,
        repeatDelay: repeatDelay,
        ease: "power1.inOut",
        repeat: -1,
        keyframes: [{opacity: 1, duration: .1}, {opacity: 1, duration: 10},{opacity: 0, duration: .1}]
    });
    if (ScrollTrigger.isInViewport(targetSection)) {
        //seems like this conditional fixed some weird stuff that would happen when resizing outside the section and scrolling back into it. Pulses got all wonky...
        addEventListener('resize', refreshBluePulse);
    }
    // if (targetSection) {
    //     addEventListener('resize', refreshBluePulse);
    // }
    return blueTl;
}

//purp
gsap.fromTo(".intro-purple", 
    {drawSVG: "0%", visibility: "visible"},
    {scrollTrigger: 
        {trigger:
            ".intro-purple", 
            start: "50px 80%",
            invalidateOnRefresh: true
        },
        duration: 1.5, 
        ease:"none", 
        drawSVG: "100%",
        onComplete: () => {
            if (ScrollTrigger.isInViewport(sectionOne)) {
                beginPurpPulses();
            } else {
                console.log('hold purppulse');
            }
        }
    }
)
function beginPurpPulses() {
    purppulsetl.forEach(tl => tl.kill()); 
    purppulsetl = []; // Reset array to avoid accumulating old timelines
    gsap.set(".rcd > .purppulse", { opacity: 0 });//starting opacity seemed to get messed up upon resizing/scrolling, had to apply reset
    purppulsetl.push(animatePurpPulses(".rcd > .purppulse.regular", 3.5, 0, 1));
    purppulsetl.push(animatePurpPulses(".rcd > .purppulse.small", 4, 1, 1.5));
}
function animatePurpPulses(targetPulse, duration, delay, repeatDelay) {
    let purpTl = gsap.timeline();
    purpTl.to(targetPulse, {
        motionPath: {
          path: "M668 205.5H538.5C530.768 205.5 524.5 199.232 524.5 191.5V127.345C524.5 123.312 526.239 119.476 529.271 116.817L540.895 106.626C553.673 95.4238 561 79.2556 561 62.2621V58.6274C561 44.1393 555.245 30.2446 545 20V20C534.755 9.75537 520.861 4 506.373 4H505.127C490.639 4 476.745 9.75537 466.5 20V20C456.255 30.2446 450.5 44.1393 450.5 58.6274V62.0222C450.5 79.1544 457.947 95.4405 470.905 106.648L482.658 116.812C485.733 119.472 487.5 123.336 487.5 127.402V191.5C487.5 199.232 481.232 205.5 473.5 205.5H422C420.895 205.5 420 204.605 420 203.5V195.5C420 187.768 413.732 181.5 406 181.5H326C318.268 181.5 312 187.768 312 195.5V203.5C312 204.605 311.105 205.5 310 205.5H201.488C197.664 205.5 194.006 207.065 191.364 209.83L7.87588 401.942C5.38816 404.547 4 408.01 4 411.612V495V578.201C4 581.914 5.475 585.475 8.1005 588.101L93.3995 673.399C96.025 676.025 97.5 679.586 97.5 683.299V766.5",
          alignOrigin: [.5, .5],
          autoRotate: true,
          align: "#purple-path",
          start: .007
        },
        duration: duration,
        delay: delay,
        repeatDelay: repeatDelay,
        ease: "power3.inOut",
        repeat: -1,
        keyframes: [{opacity: 1, duration: .1}, {opacity: 1, duration: 10},{opacity: 0, duration: .1}]
    });
    if (ScrollTrigger.isInViewport(sectionOne)) {
        //seems like this conditional fixed some weird stuff that would happen when resizing outside the section and scrolling back into it. Pulses got all wonky...
        addEventListener('resize', refreshPurpPulse);
    }
    return purpTl;
}

//possible idea
//use truthy/falsy variables inside of triggerController to control when we're inside and outside of a section to then determine what actions should be executed

function triggerController(targetSection) {
    gsap.timeline({
        scrollTrigger: {
            trigger: targetSection,
            endTrigger: targetSection,
            start: "top 50%",
            end: "bottom 50%",
            markers: true,
            onEnter: () => {
                if (menuDrawComplete) {
                    beginBluePulses();
                }
            },
            // onEnter: () => {
            //     if (targetSection == sectionOne) {
            //         if (blueIntroComplete && purpIntroComplete && insideSectionOne) {
            //             beginBluePulses();
            //             beginPurpPulses();
            //         }
            //     }
            //     if (targetSection == sectionTwo) {
            //         if (menuDrawComplete && insideSectionTwo) {
            //             beginBluePulses();
            //             beginPurpPulses();
            //         }
            //     }
            // },
            onEnterBack: () => {
                console.log('onEnterBack')
                beginBluePulses();
                beginPurpPulses();
            },
            onLeave: () => {
                console.log('onLeave')
                bluepulsetl.forEach(tl => tl.pause(0));
                bluepulsetl.forEach(tl => tl.kill());
                bluepulsetl = [];
                purppulsetl.forEach(tl => tl.pause(0));
                purppulsetl.forEach(tl => tl.kill());
                purppulsetl = [];
            },
            onLeaveBack: () => {
                
            }
        }
    })
}
triggerController(sectionOne);
triggerController(sectionTwo);

function refreshBluePulse() {
    if (bluepulsetl) {
        console.log('bluepulsetl truthy')
        bluepulsetl.forEach(tl => tl.pause(0));
    }
    removeEventListener('resize', refreshBluePulse);
    beginBluePulses();
}
function refreshPurpPulse() {
    if (purppulsetl) {
        console.log('purppulsetl truthy')
        purppulsetl.forEach(tl => tl.pause(0));
    }
    removeEventListener('resize', refreshPurpPulse);
    beginPurpPulses();
}


//MENU

//menu sets
gsap.set('.top-hex > *', {transformOrigin: "top right", scale: 0});
gsap.set('.middle-hex-cluster .mid-blue-hex', {transformOrigin: "10% 60%", scale: 0});
gsap.set('.middle-hex-cluster .under-layer', {transformOrigin: "bottom left", x: "-50%", y: "50%", scale: 0})
gsap.set('.middle-hex-cluster .mid-layer', {transformOrigin: "top left", x: "-50%", y: "-50%", scale: 0})
gsap.set('.middle-hex-cluster .top-layer', {transformOrigin: "bottom right", x: "60%", y: "60%", scale: 0})
gsap.set('.menu-shadow', {opacity: 0});
gsap.set('.sandwich-menu > *', {transformOrigin: "center", scale: .8, opacity: 0, y: -20});
gsap.set('.sandwich-title', {opacity: 0, y:20})
gsap.set('.tacos-menu > *', {transformOrigin: "center", scale: .8, opacity: 0, y: -20});
gsap.set('.tacos-title', {opacity: 0, y:-20})
gsap.set(".btm-hex-cluster > *", {scale: 0});
gsap.set(".btm-hex-cluster .under-layer", {x: 40});
gsap.set(".btm-hex-cluster .top-right", {x: 40});
gsap.set(".btm-hex-cluster .btm-right", {x: 40});
gsap.set(".btm-hex-cluster .bighex", {x: 100, y: -10});


//menu timelines
const menuContainer = document.querySelector('.menu-container');
const blueSVG = document.querySelectorAll('.menu-blue');
const purpSVG = document.querySelectorAll('.menu-purple');
const allTopHex = document.querySelectorAll('.top-hex > *');

let firstMenuTl = gsap.timeline({
    scrollTrigger: {
        trigger: menuContainer,
        endTrigger: menuContainer,
        start: "top 50%",
        end: "bottom 50%",
    }
})
let secondMenuTl = gsap.timeline();
startMenuTimelines(firstMenuTl);
function startMenuTimelines(firstMenuTl) {
    firstMenuTl.set(blueSVG, {visibility: "visible"});
    firstMenuTl.from(blueSVG, {duration: 3, ease: "power1.inOut", drawSVG: 0});
    showTopMenu(firstMenuTl);
}

function showTopMenu(firstMenuTl) {
    firstMenuTl.fromTo(allTopHex, {visibility: "visible"}, {stagger: -.03, keyframes: [{duration: .5, scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]}, "-=1");
    firstMenuTl.from(".tm-left > .tm-left-mi", {duration: .8, stagger: .10, keyframes: [{opacity: .5, scale: .9, x:-25, ease: "power1.outIn"}, {opacity: 1, scale: 1, x:0, ease: "power1.outIn"}]}, "-=.8")
    firstMenuTl.from(".tm-right > .tm-right-mi", {duration: .8, stagger: .10, keyframes: [{opacity: .5, scale: .9, x:-25, ease: "power1.outIn"}, {opacity: 1, scale: 1, x:0, ease: "power1.outIn"}]}, "-=1")
    firstMenuTl.to('.menu-shadow', {duration: .8, ease: "power1.inout", opacity: .8}, "-=1.7")
    firstMenuTl.fromTo('.mid-blue-hex', {visibility: "visible"}, {stagger: -0.05, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]})
    firstMenuTl.fromTo('.mid-purp-hex', {visibility: "visible"}, {stagger: .04, keyframes: [{duration: .4, ease: "power1.inOut"}, {duration: .5, scale: 1, x: "0%", y: "0%", ease: "back"}]}, "-=.9")
    firstMenuTl.add(secondMenuTl);
    showBottomMenu(secondMenuTl);
}

function showBottomMenu(secondMenuTl) {
    secondMenuTl.set(purpSVG, {visibility: "visible"})
    //new modular attempt
    secondMenuTl.from(purpSVG, {duration: 3, ease: "power1.inOut", drawSVG: 0, onComplete: () => {
        if (ScrollTrigger.isInViewport(sectionTwo)) {
            menuDrawComplete = true;
            beginBluePulses();
            // beginPurpPulses();
        }
        // if (insideSectionTwo) {
        //     menuDrawComplete = true;
        //     beginBluePulses();
        //     beginPurpPulses();
        // }
    }})
    secondMenuTl.to('.sandwich-title', {duration: 1, opacity:1, y: 0}, "-=1")
    secondMenuTl.to('.tacos-title', {duration: 1, opacity:1, y: 0}, "-=.8")
    secondMenuTl.to('.sandwich-menu > *', {duration: .8, stagger: .10, keyframes: [{opacity: .5, scale: .9, y:25, ease: "power1.outIn"}, {opacity: 1, scale: 1, y:0, ease: "power1.outIn"}]})
    secondMenuTl.to('.tacos-menu > *', {duration: .8, stagger: .10, keyframes: [{opacity: .5, scale: .9, y:25, ease: "power1.outIn"}, {opacity: 1, scale: 1, y:0, ease: "power1.outIn"}]}, "-=0.8")
    secondMenuTl.to('.btm-hex-cluster .btm-blue-hex', {stagger: -0.1, keyframes: [{duration: .4,scale: 1.3, ease: "power1.inOut"}, {duration: .5,scale: 1, ease: "power1.inOut"}]})
    secondMenuTl.to('.btm-hex-cluster .btm-purp-hex', {stagger: .04, keyframes: [{duration: .4, ease: "power1.inOut"}, {duration: .5, scale: 1, x: 0, y: 0, ease: "back"}]}, "-=.5")
}

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
    modal.classList.add('activated-modal');
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
    setTimeout(() => {
        modal.classList.remove('activated-modal')
        console.log('timeout worked');
    }, 500); //so opacity of .5s has time to transition out before removing class, prob bad css, prob dum
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

// COLLAGE

image.forEach(image => {
    let bgTl = gsap.timeline({
        scrollTrigger: {
            trigger: image,
            endTrigger: image,
            start: "top bottom",
            end: () => `+=${image.offsetHeight}`,
            scrub: true,
            invalidateOnRefresh: true, 
            //solution to creating duplicate timelines
            onLeave: () => {
                if (!image.dataset.animated) {
                    image.dataset.animated = "true"; // Prevent duplicate triggers
                    animateBg(image);
                }
            }
        }
    })
    
    bgTl.fromTo(image, {scaleX: .1, scaleY: .05, skewX: 50, skewY: 10, rotate: 10}, {scaleX: 1, scaleY: 1, skewX: 0, skewY: 0, rotate: 0, visibility: "visible", immediateRender: false})
});

function animateBg(image) {
    const imageBg = image.parentElement.querySelectorAll('.cib');  
    
    // simplifid ternary version
    const raNum = Math.random() < 0.5 ? 1 : 2;
    // const raNum = Math.floor(Math.random() * 2) + 1;

    //cleaner ternary / template literal version
    function applyColors(imageBg, targetBg, raNum) {
        const color = raNum === 1 ? "#FF00FF" : "#0B9EF5";
        imageBg.style.background = `conic-gradient(from 0deg, transparent var(--gradient-percentage), ${color} 0%)`;
        targetBg.style.background = `conic-gradient(from 0deg, transparent var(--gradient-percentage), ${color} 0%)`;
    }
    // function applyColors(imageBg, targetBg, raNum) {
    //     if (raNum === 1) {
    //         imageBg.style.background = 'conic-gradient(from 0deg, transparent var(--gradient-percentage), #FF00FF 0%)';
    //         targetBg.style.background = 'conic-gradient(from 0deg, transparent var(--gradient-percentage), #FF00FF 0%)';
    //     } else if (raNum === 2) {
    //         imageBg.style.background = 'conic-gradient(from 0deg, transparent var(--gradient-percentage), #0B9EF5 0%)';
    //         targetBg.style.background = 'conic-gradient(from 0deg, transparent var(--gradient-percentage), #0B9EF5 0%)';
    //     } else {
    //         return;
    //     }
    // }

    imageBg.forEach(bg => {
        let targetBg = bg.querySelector('.before-element');
        applyColors(bg, targetBg, raNum);

        //solution to creating duplicate timelines
        if (!bg.dataset.animated) {
            bg.dataset.animated = "true";
    
            gsap.to(bg, {
                "--gradient-percentage": "50%",
                scrollTrigger: {
                    trigger: bg,
                    start: 'bottom bottom',
                    end: () => `+=${image.offsetHeight}`,
                    scrub: true,
                    invalidateOnRefresh: true
                }
            });
        }
    })
}

gsap.to(".section-3-title", {scrollTrigger: {trigger: ".section-3-tc", start: "bottom 90%", end: "bottom 70%", scrub: true}, opacity: 1, translateY: 0})

