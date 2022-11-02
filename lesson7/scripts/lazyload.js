// create a list of all the images.
const images = document.querySelectorAll("img[data-src]");

/* Function: Get the data-src from the image. */
function preloadImage(img) {
    const src = img.getAttribute("data-src");
    if(!src) { // return if there is no data-src.
        return;
    } 
    img.src = src;
}

const imgOptions = {
    threshold: 1, // set transition for loading images.
    rootMargin: "0px 0px -100px 0px" // positive numbers check for off of the screen.
};

const imgObserver = new IntersectionObserver((entries, imgObserver)=> {
entries.forEach(entry => {
    if (!entry.isIntersecting) {
        return; // return if Intersection Observer is not supported.
    } else {
        preloadImage(entry.target);
        // Stop observing the image as the image as already been loaded.
        imgObserver.unobserve(entry.target);
    }
})
}, imgOptions);

// loop through each image in the list.
images.forEach(image => {
    imgObserver.observe(image);
});
