/* Functions for all pages */
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

/* Functions for index.html page */

/* Functions for overview.html page */

/* Functions for syntax.html page */

/* Functions for basics.html page */

/* Functions for advanced.html page */

function validateInput() {
    var userInput = document.getElementById("userInput").value.trim();
    var expectedInput = 'print("Hello, World!")';
    var outputDiv = document.getElementById("first-code-output");
    var congratsDiv = document.getElementById("congrats-div");

    if (userInput === expectedInput) {
        outputDiv.textContent = "Hello, World!";
        outputDiv.style.display = "flex";
        congratsDiv.style.display = "block";
    } else {
        outputDiv.textContent = "SyntaxError: Please try again.";
        outputDiv.style.display = "flex";
        congratsDiv.style.display = "none";
    }
}

document.getElementById("first-code-next-btn").addEventListener("click", function() {
    document.getElementById("hello-world").style.display = "none";
    document.getElementById("math-practice").style.display = "block";
});


/* Functions for documentation.html page */

/* Functions for test.html page */
