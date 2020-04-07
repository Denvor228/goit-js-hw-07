'use strict'

let range = document.querySelector('input[id="font-size-control"]');
let span = document.querySelector('span[id="text"]');

range.addEventListener("change", function (event) {
    span.style.fontSize = this.value + "px";
});