// create a list of all the images.
const images = document.querySelectorAll('img[data-src]');
console.log(images);

/* get data-src from the image, add the src attribute */
const loadImage = (img) => {
    img.setAttribute('src', img.getAttribute('data-src'));
    img.onload = () => {
        img.removeAttribute('data-src');
        img.classList.remove('hidden');
        img.classList.add('fade-in');
    };
};

const imgOptions = {
    root: null,
    threshold: 1, // set transition for loading images.
    rootMargin: '0px 0px 200px 0px' // positive numbers check for off of the screen.
};

if ('IntersectionObserver' in window) {
    // create the observer for each item in the list (callback, options)
    const imgObserver = new IntersectionObserver((entries, observer)=> {
    entries.forEach(entry => {
        if (!entry.isIntersecting) {
            return; // return if Intersection Observer is not supported.
        } else {
            const img = entry.target; 
            loadImage(img);
            // Stop observing the image as the image as already been loaded.
            observer.unobserve(img);
        }
    });
    }, imgOptions);

// loop through each image in the list.
images.forEach(img => {
    imgObserver.observe(img);
});
} else {

}