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

document.getElementById("display-results-btn").addEventListener('click', function(event) {
    const resultsSelectDiv = document.querySelector(".results");
    resultsSelectDiv.style.display = "block";
});

document.getElementById("remove-results-btn").addEventListener('click', function(event) {
    clearResults();
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
    const divMessage = document.querySelector(".array-pass-fail-message");
    divMessage.innerHTML = "";

    const dropdownBox = document.getElementById("employee-dropdown");
    const employeeIndex = dropdownBox.selectedIndex;
    const newSalaryInput = document.getElementById("new-salary-input");
    const updatedSalary = parseFloat(newSalaryInput.value);

    if (employeeIndex !== -1 && !isNaN(updatedSalary)) {
        salaries[employeeIndex] = updatedSalary;
        newSalaryInput.value = "";
        divMessage.innerHTML = "Salary has been updated!";

        const salarySelectDiv = document.querySelector(".salary-select");
        salarySelectDiv.style.display = "none";

    } else {
        divMessage.innerHTML = "Update was unsuccessful. Please select an employee and enter a valid salary.";
    }
}

const displayResults = () => {
    const resultsHeader = document.getElementById("results-header");
    const resultsHighest = document.getElementById("results-highest");
    const resultsAverage = document.getElementById("results-average");
    const resultsDiv = document.querySelector(".results");
    const divMessage = document.querySelector(".array-pass-fail-message");

    divMessage.innerHTML = "";

    if (salaries.length === 0) {
        resultsHeader.textContent = "No salaries have been added. Please add salaries using the Add Salary button above.";
        return;
    }

    const largestSalary = Math.max(...salaries);
    const total = salaries.reduce((acc, curr) => acc + curr, 0);
    const avgSalary = total / salaries.length;

    resultsHeader.textContent = "Results";
    resultsHighest.textContent = `Highest Salary: $${largestSalary.toFixed(2)}`;
    resultsAverage.textContent = `Average Salary: $${avgSalary.toFixed(2)}`;
    resultsDiv.style.display = "block";

}

const clearResults = () => {
    const resultsDiv = document.querySelector(".results");
    resultsDiv.style.display = "none";

    const resultsHeader = document.getElementById("results-header");
    const resultsHighest = document.getElementById("results-highest");
    const resultsAverage = document.getElementById("results-average");
    resultsHeader.textContent = "";
    resultsHighest.textContent = "";
    resultsAverage.textContent = "";

}

const displaySalary = () => {
    alert("Test disp slry");
}