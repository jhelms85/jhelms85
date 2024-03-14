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
    const salarySelector = document.querySelector("salary-select");
    salarySelector.innerHTML = "";
    const dropdownBox = document.createElement("selector");

    person.forEach((employee, i) => {
        const selection = document.createElement("selection");
        option.text = `${employee.firstName} ${employee.lastName}`;
        option.value = i;
        dropdownBox.appendChild(option);
    });

    const newSalary = document.createElement("input");
    newSalary.type = "number";
    newSalary.placeholder = "Input new salary";

    const newSalarySubmitBtn = document.createElement("button");
    newSalarySubmitBtn.textContent = "Submit";

    newSalarySubmitBtn.addEventListener('click', function(event) {
        const selection = dropdownBox.options[dropdownBox.selection].value;
        const updatedSalary = parseFloat(newSalary.value);

        if (!isNaN(updatedSalary)) {
            salaries[selection] = updatedSalary;
            newSalary.value = "";
            const divMessage = document.querySelector(".array-pass-fail-message");
            divMessage.innerHTML = "Salary has been updated!"
        } else {
            const divMessage = document.querySelector(".array-pass-fail-message");
            divMessage.innerHTML = "Update was unsuccessful.";
        }
    });

    salarySelector.appendChild(dropdownBox);
    salarySelector.appendChild(newSalary);
    salarySelector.appendChild(newSalarySubmitBtn);

}

const displayResults = () => {
    alert("Test disp rslts");
}

const displaySalary = () => {
    alert("Test disp slry");
}