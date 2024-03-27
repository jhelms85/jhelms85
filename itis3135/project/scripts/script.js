/* Function to remove styling when CSS image is clicked */
function removeCSS() {
    var confirmed = window.confirm("Are you sure you want to remove the styling? This is useful if you are having compatability issues. Refresh the page to restore the styling.");
    if (!confirmed) {
        return;
    }

    var stylesheets = document.querySelectorAll('link[rel="stylesheet"]');
    stylesheets.forEach(function(stylesheet) {
        stylesheet.disabled = true;
    });
}

