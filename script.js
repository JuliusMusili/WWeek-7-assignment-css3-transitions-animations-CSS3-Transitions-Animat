/* ------------------------
   Part 2: JavaScript Functions
------------------------- */

// Example of local vs global scope
let globalVar = "I am global!";

function showScopeExample() {
  let localVar = "I am local!";
  document.getElementById("scope-output").innerText =
    "Global Variable: " + globalVar + " | Local Variable: " + localVar;
}

// Example with parameters & return values
function calculateArea(length, width) {
  let area = length * width; // calculation
  document.getElementById("calc-output").innerText = 
    `Area of rectangle (${length}x${width}) = ${area}`;
  return area;
}


  // Part 3: CSS + JavaScript


// Animate box on button click
const animateBtn = document.getElementById("animate-btn");
const animatedBox = document.querySelector(".animated-box");

animateBtn.addEventListener("click", () => {
  animatedBox.classList.toggle("active");
});

// Modal open/close
const modalBtn = document.getElementById("modal-btn");
const modal = document.getElementById("modal");
const closeModal = document.getElementById("close-modal");

modalBtn.addEventListener("click", () => {
  modal.classList.add("show");
});

closeModal.addEventListener("click", () => {
  modal.classList.remove("show");
});
