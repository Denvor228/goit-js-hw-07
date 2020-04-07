'use strict';

let input = document.querySelector('input[id="name-input"]');
let span = document.querySelector('span[id="name-output"]');
const text = 'незнакомец';

input.addEventListener('keyup', event => {
    if (!event.target.value) {
        span.textContent = text;
    } else
        span.textContent = event.target.value;



});