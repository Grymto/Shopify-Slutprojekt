//alert("Hello world");

// Get all elements with the class .footer-block__details-content.rte
var elements = document.querySelectorAll('.footer-block__details-content.rte');

// Loop through each element
elements.forEach(function(element) {
    // Get all children of the current element
    var children = element.children;

    // Loop through each child element
    for (var i = 0; i < children.length; i++) {
        // Add a class to each child element with the format 'iconN' where N is the index + 1
        children[i].classList.add('icon' + (i + 1));
    }
});

// javascript to put classes on the banners
var banners = document.querySelectorAll('.banner__media.media.scroll-trigger.animate--fade-in');

// Loop through each banner element
banners.forEach(function(banner) {
    // Get all children of the current banner element
    var children = banner.children;

    // Loop through each child element
    for (var i = 0; i < children.length; i++) {
        // Add a class to each child element with the format 'bannerN' where N is the index + 1
        children[i].classList.add('banner' + (i + 1));
    }
});



/* CART */

// Välj elementet som matchar .rich-text__wrapper--left
var richTextWrapper = document.querySelector('.rich-text__wrapper--left');

// Kontrollera om skärmbredden uppfyller medieförfrågan
if (window.matchMedia('(min-width: 750px)').matches) {
    // Ändra justeringsattributet till flex-end om medieförfrågan uppfylls
    richTextWrapper.style.justifyContent = 'flex-end';
}
