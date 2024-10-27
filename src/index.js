import { gsap } from "gsap";


import Rellax from "rellax";

let rellax = new Rellax('.rellax');

let previousWidth = window.innerWidth;
const container = document.querySelector('.holder');

function adjustContainerWidth() {
    const currentWidth = window.innerWidth;
    const widthChange = currentWidth - previousWidth; // Calculate the change in width

    // Get the current width in pixels
    const currentContainerWidth = parseFloat(getComputedStyle(container).width);

    if (widthChange > 0) { // Viewport has increased
        // Decrease the width by the pixel change
        const newWidth = Math.max(0, currentContainerWidth - widthChange); // Ensure it doesn't go negative
        container.style.width = `${newWidth}px`;
    } else if (widthChange < 0) { // Viewport has decreased
        // Increase the width by the absolute pixel change
        const newWidth = currentContainerWidth + Math.abs(widthChange);
        container.style.width = `${newWidth}px`;
    }

    localStorage.setItem('containerWidth', container.style.width.replace('px', ''));

    previousWidth = currentWidth; // Update previousWidth for next resize
}

window.addEventListener('resize', adjustContainerWidth);