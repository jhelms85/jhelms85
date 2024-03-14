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
    const fName = document.getElementById("f-name-input").value;
    const lName = document.getElementById("l-name-input").value;
    const salary = parseFloat(document.getElementById("s-input").value);

    if (fName.trim() != '' && lName.trim() != '' && !isNaN(salary)) {
        person.push({ firstName: fName, lastName: lName});
        salaries.push(salary);

        document.getElementById("f-name-input").value = "";
        document.getElementById("l-name-input").value = "";
        document.getElementById("s-input").value = "";

        const divMessage = document.querySelector(".array-pass-fail-message");
        divMessage.innerHTML = "Person and Salary added!"
    } else {
        const divMessage = document.querySelector(".array-pass-fail-message");
        divMessage.innerHTML = "Add was unsucessful.";
    }
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