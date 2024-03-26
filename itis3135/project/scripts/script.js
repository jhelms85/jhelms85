/* Function to remove styling when CSS image is clicked */
function removeCSS() {
    var stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(function(stylesheet) {
        stylesheet.disabled = true;
    });
}

