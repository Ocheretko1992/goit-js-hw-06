// @ts-nocheck
const refs = {
  input: document.querySelector("#name-input"),
  output: document.querySelector("#name-output"),
};
refs.input.addEventListener("input", inputChange);
function inputChange(event) {
    const inputValue = event.target.value.trim();
    refs.output.textContent = inputValue ? inputValue : "Anonymous";
}