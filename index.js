//Task numero uno

const message = document.getElementById("message");

message.addEventListener("input", (event) => {
  const length = event.target.value.length;
  const lengthElement = document.getElementById("length");
  lengthElement.innerText = `characters : ${length} / 100`;

  if (length >= 100) {
    lengthElement.style.color = "red";
  } else {
    lengthElement.style.color = "black";
  }
});
// ----------------------------------------------------

// Task #2

const theme = document.getElementById("theme");
const button = document.getElementById("theme-btn");

let darkMode = false;

button.addEventListener("click", () => {
  if (darkMode) {
    theme.style.backgroundColor = "#FFF";
    theme.style.color = "#212529";
    button.textContent = "Dark Mode ";
  } else {
    theme.style.backgroundColor = "#212529";
    theme.style.color = "#FFF";
    button.textContent = "Light Mode";
  }

  if (darkMode === true) {
    darkMode = false;
  } else {
    darkMode = true;
  }
});
