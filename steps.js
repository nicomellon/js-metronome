/** HTML elements **/
const stepsSection = document.querySelector(".steps-section");
const addStepBtn = document.querySelector("#add-step-btn");
const removeStepBtn = document.querySelector("#remove-step-btn");
const stepsCount = document.querySelector("#steps-count");

function createStep(checked) {
  const stepInput = document.createElement("input");
  stepInput.type = "checkbox";
  stepInput.checked = checked;

  const stepDiv = document.createElement("div");
  stepDiv.classList.add("step-div", "border", "rounded", "flex");
  stepDiv.appendChild(stepInput);
  return stepDiv;
}

function addStep(checked) {
  stepsSection.appendChild(createStep(checked));
  updateStepSpan();
}

function removeStep() {
  if (stepsSection.childElementCount > 1)
    stepsSection.removeChild(stepsSection.lastChild);
  updateStepSpan();
}

function updateStepText() {
  const stepTexts = stepsSection.querySelectorAll("p");
  stepTexts.forEach((p) => console.log(p));
}

function updateStepSpan() {
  stepsCount.innerText = stepsSection.childElementCount;
}

/** event listeners **/
addStepBtn.onclick = () => addStep(false);
removeStepBtn.onclick = removeStep;

/** on script load **/
console.log("steps.js loaded");
addStep(true);
addStep(false);
addStep(false);
addStep(false);
