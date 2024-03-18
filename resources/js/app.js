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