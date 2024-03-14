const person = [];
const salaries = [];

const addSalaryButton = document.getElementById("add-salary-btn");
const modSalaryButton = document.getElementById("mod-salary-btn");
const displayResultsButton = document.getElementById("display-results-btn");
const displaySalaryButton = document.getElementById("display-salary-btn");

addSalaryButton.addEventListener('click', function(event) {
    addSalary();
});

modSalaryButton.addEventListener('click', function(event) {
    modifySalary();
});

displayResultsButton.addEventListener('click', function(event) {
    displayResults();
});

displaySalaryButton.addEventListener('click', function(event) {
    displaySalary();
});

const addSalary = () => {
    alert("Test Add Sal");
}

const modifySalary = () => {
    alert("Test mod sal");
}

const displayResults = () => {
    alert("Test disp rslts");
}

const displaySalary = () => {
    alert("Test disp slry");
}