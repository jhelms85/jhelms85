const homeLink = document.getElementById("home-link");
const aboutLink = document.getElementById("about-link");
const whenLink = document.getElementById("when-link");
const tuningsLink = document.getElementById("tunings-link");
const howLink = document.getElementById("how-link");
const whyLink = document.getElementById("why-link");
const homeSection = document.getElementById("home");
const aboutSection = document.getElementById("about");
const whenSection = document.getElementById("when");
const tuningsSection = document.getElementById("tunings");
const howSection = document.getElementById("how");
const whySection = document.getElementById("why");
const cssBtn = document.getElementById("no-css-btn");

function showSection(section) {
    section.style.display = "block";
}

function hideSection(section) {
    section.style.display = "none";
}

function hideAllSections() {
    hideSection(homeSection);
    hideSection(aboutSection);
    hideSection(whenSection);
    hideSection(tuningsSection);
    hideSection(howSection);
    hideSection(whySection);
}

homeLink.addEventListener("click", function() {
    hideAllSections();
    showSection(homeSection);
});

aboutLink.addEventListener("click", function() {
    hideAllSections();
    showSection(aboutSection);
});

whenLink.addEventListener("click", function() {
    hideAllSections();
    showSection(whenSection);
});

tuningsLink.addEventListener("click", function() {
    hideAllSections();
    showSection(tuningsSection);
});

howLink.addEventListener("click", function() {
    hideAllSections();
    showSection(howSection);
});

whyLink.addEventListener("click", function() {
    hideAllSections();
    showSection(whySection);
});

cssBtn.addEventListener("click", function() {
    const styleTag = document.querySelector("style");
    styleTag.innerHTML = "";
});