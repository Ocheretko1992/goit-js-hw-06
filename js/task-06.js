// @ts-nocheck

const textInput = document.getElementById('validation-input');

textInput.addEventListener('blur', borderColor);

const dataLength = textInput.getAttribute('data-length');

function borderColor(event) {
    const quantityValue = event.target.value.trim().length;
    if (Number(dataLength) === quantityValue) {
        textInput.classList.add('valid');
        textInput.classList.remove('invalid');
    }else {
        textInput.classList.add('invalid');
        textInput.classList.remove('valid');
    }
}
