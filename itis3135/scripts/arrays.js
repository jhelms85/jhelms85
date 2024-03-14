const person = [];
const salaries = [];

const displayResultsButton = document.getElementById("display-results-btn");
const displaySalaryButton = document.getElementById("display-salary-btn");

document.getElementById("mod-salary-btn").addEventListener('click', function() {
    const salarySelectDiv = document.querySelector(".salary-select");
    salarySelectDiv.style.display = "block";
});

document.getElementById("submit-salary-btn").addEventListener('click', function(event) {
    addSalary();
});

document.getElementById("add-salary-btn").addEventListener('click', function() {
    const salarySelectDiv = document.querySelector(".input-entry");
    salarySelectDiv.style.display = "block";
});

document.getElementById("update-salary-btn").addEventListener('click', function(event) {
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

        const dropdownBox = document.getElementById("employee-dropdown");
        const option = document.createElement("option");
        option.text = `${fName} ${lName}`;
        option.value = person.length - 1;
        dropdownBox.appendChild(option);

        document.getElementById("f-name-input").value = "";
        document.getElementById("l-name-input").value = "";
        document.getElementById("s-input").value = "";

        const divMessage = document.querySelector(".array-pass-fail-message");
        divMessage.innerHTML = "Person and Salary added!"

        const salarySelectDiv = document.querySelector(".input-entry");
        salarySelectDiv.style.display = "none";

    } else {
        const divMessage = document.querySelector(".array-pass-fail-message");
        divMessage.innerHTML = "Add was unsuccessful.";
    }
}

const modifySalary = () => {
    const dropdownBox = document.getElementById("employee-dropdown");
    const employeeIndex = dropdownBox.selectedIndex;
    const newSalaryInput = document.getElementById("new-salary-input");
    const updatedSalary = parseFloat(newSalaryInput.value);

    if (employeeIndex !== -1 && !isNaN(updatedSalary)) {
        salaries[employeeIndex] = updatedSalary;
        newSalaryInput.value = "";
        const divMessage = document.querySelector(".array-pass-fail-message");
        divMessage.innerHTML = "Salary has been updated!";

        const salarySelectDiv = document.querySelector(".salary-select");
        salarySelectDiv.style.display = "none";

    } else {
        const divMessage = document.querySelector(".array-pass-fail-message");
        divMessage.innerHTML = "Update was unsuccessful. Please select an employee and enter a valid salary.";
    }
}

const displayResults = () => {
    alert("Test disp rslts");
}

const displaySalary = () => {
    alert("Test disp slry");
}