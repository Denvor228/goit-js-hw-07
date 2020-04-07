'use strict'

const input = document.querySelector('input[id="validation-input"]');

input.onblur = function () {
    if (input.value.length < 6) {
        input.classList.add('invalid');
    } else {
        input.classList.add('valid');
    }
};

input.onfocus = function () {
    if (this.classList.contains('invalid')) {

        this.classList.remove('invalid');

    }
};