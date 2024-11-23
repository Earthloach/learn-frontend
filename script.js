document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    // If the form is invalid, prevent submission
    if (!form.checkValidity()) {
      event.preventDefault();
      alert("Please fill out all required fields correctly.");
    }
  });

  let count = localStorage.getItem("count") ? parseInt(localStorage.getItem("count")) : 0;
  const button = document.querySelector("#count-button");
  const display = document.querySelector("#count-display");

  display.textContent = `Count: ${count}`;

  button.addEventListener("click", () => {
    count++;
    display.textContent = `Count: ${count}`;
    localStorage.setItem("count", count);
    if (count > 10) {
      alert("You've clicked the button 10 times!");
    }
  });
});