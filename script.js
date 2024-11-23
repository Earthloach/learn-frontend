document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("myForm");

  form.addEventListener("submit", (event) => {
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;

    if (!name || !email) {
      alert("Please fill out all fields.");
      event.preventDefault(); // Prevent form submission
    } else {
      alert("Form submitted successfully!");
    }
  });

  let count = 0;
  const button = document.querySelector("#count-button");
  const display = document.querySelector("#count-display");

  button.addEventListener("click", () => {
    count++;
    display.textContent = `Count: ${count}`;
    if (count > 10) {
      alert("You've clicked the button 10 times!");
    }
  });
});