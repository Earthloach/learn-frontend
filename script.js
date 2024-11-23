import { getCount, setCount, incrementCount } from './countModule.js';

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    // If the form is invalid, prevent submission
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Please fill out all required fields correctly.");
    }
  });

  let count = getCount();
  const button = document.querySelector("#count-button");
  const display = document.querySelector("#count-display");

  display.textContent = `Count: ${count}`;

  button.addEventListener("click", () => {
    count = incrementCount(count);
    display.textContent = `Count: ${count}`;
    setCount(count); // Save the updated count to local storage
    if (count > 10) {
      alert("You've clicked the button 10 times!");
    }
  });

  // Fetch data from API
  fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => {
      const userTable = document.getElementById("user-table");
      users.forEach(user => {
        const row = document.createElement("tr");
        const nameCell = document.createElement("td");
        const emailCell = document.createElement("td");
        nameCell.textContent = user.name;
        emailCell.textContent = user.email;
        row.appendChild(nameCell);
        row.appendChild(emailCell);
        userTable.appendChild(row);
      });
    })
    .catch(error => console.error('Error fetching users:', error));
});