import { getCount, setCount, incrementCount } from "./countModule.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  const handleFormSubmit = (event) => {
    // If the form is invalid, prevent submission
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Please fill out all required fields correctly.");
    }
  };

  form.addEventListener("submit", handleFormSubmit);

  let count = getCount();
  const button = document.querySelector("#count-button");
  const display = document.querySelector("#count-display");

  display.textContent = `Count: ${count}`;

  const handleButtonClick = () => {
    count = incrementCount(count);
    display.textContent = `Count: ${count}`;
    setCount(count); // Save the updated count to local storage
    if (count > 10) {
      alert("You've clicked the button 10 times!");
    }
  };

  button.addEventListener("click", handleButtonClick);

  const createTableRow = (name, email) => {
    const userTable = document.getElementById("user-table");
    const row = userTable.insertRow();
    const nameCell = row.insertCell();
    const emailCell = row.insertCell();
    const deleteCell = row.insertCell();
    nameCell.textContent = name;
    emailCell.textContent = email;

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      userTable.deleteRow(row.rowIndex);
    });
    deleteCell.appendChild(deleteButton);
  };

  const fetchData = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        users.forEach((user) => {
          createTableRow(user.name, user.email);
        });
      })
      .catch((error) => console.error("Error fetching users:", error));
  };

  fetchData();

  // Prompt user for data and add to table
  const addUserButton = document.createElement("button");
  addUserButton.textContent = "Add User";
  document.body.appendChild(addUserButton);

  addUserButton.addEventListener("click", () => {
    const name = prompt("Enter the user's name:");
    const email = prompt("Enter the user's email:");

    if (name && email) {
      createTableRow(name, email);
    } else {
      alert("Both name and email are required.");
    }
  });
});
