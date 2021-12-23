const stepsSection = document.querySelector(".steps-section");
const addStepBtn = document.querySelector("#add-step-btn");
const removeStepBtn = document.querySelector("#remove-step-btn");
const stepsCount = document.querySelector("#steps-count");

function removeStep() {
  if (stepsSection.childElementCount > 1)
    stepsSection.removeChild(stepsSection.lastChild);
  updateStepSpan();
}

function createStep(checked) {
  const stepInput = document.createElement("input");
  stepInput.type = "checkbox";
  stepInput.checked = checked;
  return stepInput;
}

function addStep(checked) {
  stepsSection.appendChild(createStep(checked));
  updateStepSpan();
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
