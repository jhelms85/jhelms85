// Referenced Websites
// https://www.w3schools.com/jsref/met_element_addeventlistener.asp
// https://www.geeksforgeeks.org/javascript-math-object/
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

const person = [];
const salaries = [];

const displayResultsButton = document.getElementById("display-results-btn");
const displaySalaryButton = document.getElementById("display-salary-btn");

document.getElementById("mod-salary-btn").addEventListener('click', function() {
    hideContent();
    const salarySelectDiv = document.querySelector(".salary-select");
    salarySelectDiv.style.display = "block";
});

document.getElementById("submit-salary-btn").addEventListener('click', function(event) {
    addSalary();
});

document.getElementById("add-salary-btn").addEventListener('click', function() {
    const salarySelectDiv = document.querySelector(".input-entry");
    salarySelectDiv.style.display = "block";
    focusOnNameInput();
});

document.getElementById("update-salary-btn").addEventListener('click', function(event) {
    modifySalary();
});

displayResultsButton.addEventListener('click', function(event) {
    displayResults();
});

document.getElementById("display-results-btn").addEventListener('click', function(event) {
    hideContent();
    const resultsSelectDiv = document.querySelector(".results");
    resultsSelectDiv.style.display = "block";
    displayResults();
});

//Added a clear display button that clears the display divs
document.getElementById("clear-display-btn").addEventListener('click', function(event) {
    hideContent();
});

//Added a delete all data button that clears display divs and sets the arrays to empty
document.getElementById("delete-results-btn").addEventListener('click', function(event) {
    const confirmation = confirm("Are you sure you want to delete all data?");
    if (confirmation) {
        clearResults();
    }
});


document.getElementById("display-salary-btn").addEventListener('click', function(event) {
    const resultsSelectDiv = document.querySelector(".salaries-table");
    resultsSelectDiv.style.display = "block";
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
        focusOnNameInput();
    } else {
        alert("Please fill out all fields and ensure salary is a valid number.")
    }
}

const modifySalary = () => {
    //clear the pass-fail-message for adding a salary
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

function hideContent() {
    //Hide all divs that contain content
    const divsToHide = document.querySelectorAll(".input-entry, .salary-select, .results, .salaries-table, .array-pass-fail-message");
    divsToHide.forEach(div => {
        div.style.display = "none";
    });

    const tableDiv = document.getElementById("salaries-table");
    tableDiv.innerHTML = "";
    tableDiv.style.display = "none";
}

const clearResults = () => {
    //clear div content
    hideContent();
    //clear arrays
    person.length = 0;
    salaries.length = 0;
    //clear results
    const resultsHeader = document.getElementById("results-header");
    const resultsHighest = document.getElementById("results-highest");
    const resultsAverage = document.getElementById("results-average");
    resultsHeader.textContent = "";
    resultsHighest.textContent = "";
    resultsAverage.textContent = "";
    //clear dropdown for modify salary function
    const dropdownBox = document.getElementById("employee-dropdown");
    dropdownBox.innerHTML = "";
}

const displaySalary = () => {
    //clear the pass-fail-message for adding a salary
    const resultsDiv = document.querySelector(".results");
    resultsDiv.style.display = "none";

    const tableDiv = document.getElementById("salaries-table");

    //clear table if one is already created
    while (tableDiv.firstChild) {
        tableDiv.removeChild(tableDiv.firstChild);
    }

    const salaryTable = document.createElement('table');
    const tableHeader = document.createElement('tr');
    const fNameHeader = document.createElement('th');
    const lNameHeader = document.createElement('th');
    const salaryHeader = document.createElement('th');

    fNameHeader.textContent = 'First Name';
    lNameHeader.textContent = 'Last Name';
    salaryHeader.textContent = 'Salary ($)';

    tableHeader.appendChild(fNameHeader);
    tableHeader.appendChild(lNameHeader);
    tableHeader.appendChild(salaryHeader);
    salaryTable.appendChild(tableHeader);

    for (let i = 0; i < person.length; i++) {
        const row = document.createElement('tr');
        const fName = document.createElement('td');
        const lName = document.createElement('td');
        const salary = document.createElement('td');

        fName.textContent = `${person[i].firstName}`;
        lName.textContent = `${person[i].lastName}`;
        salary.textContent = `$${salaries[i].toFixed(2)}`;

        row.appendChild(fName);
        row.appendChild(lName);
        row.appendChild(salary);
        salaryTable.appendChild(row);
    }

    tableDiv.appendChild(salaryTable);
}

const focusOnNameInput = () => {
    const nameInput = document.getElementById("f-name-input");
    nameInput.focus();
}