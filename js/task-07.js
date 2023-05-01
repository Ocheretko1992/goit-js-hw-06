// @ts-nocheck
const interactionWithFont = document.querySelector('#font-size-control');
const interactionText = document.querySelector('#text');

function rangeChange(event) {
    interactionText.style.fontSize = `${event.currentTarget.value}px`
}

interactionWithFont.addEventListener('input', rangeChange);