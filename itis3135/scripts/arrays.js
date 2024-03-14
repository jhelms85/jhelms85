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
    } else {
        const divMessage = document.querySelector(".array-pass-fail-message");
        divMessage.innerHTML = "Add was unsuccessful.";
    }
}

const modifySalary = () => {
    const dropdownBox = document.getElementById("employee-dropdown");
    const employeeIndex = dropdownBox.selectedIndex;

    if (employeeIndex !== -1) {
        const updatedSalary = parseFloat(document.getElementById("s-input").value);

        if (!isNaN(updatedSalary)) {
            salaries[selection] = updatedSalary;
            newSalary.value = "";
            const divMessage = document.querySelector(".array-pass-fail-message");
            divMessage.innerHTML = "Salary has been updated!"
        } else {
            const divMessage = document.querySelector(".array-pass-fail-message");
            divMessage.innerHTML = "Update was unsuccessful.";
        }
    } else {
        const divMessage = document.querySelector(".array-pass-fail-message");
        divMessage.innerHTML = "Please select an employee."
    }
}

const displayResults = () => {
    alert("Test disp rslts");
}

const displaySalary = () => {
    alert("Test disp slry");
}