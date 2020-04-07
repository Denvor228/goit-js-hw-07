'use strict'

const Counter = function ({
    initialValue = 0,
    step = 1
}) {
    this.value = initialValue;
    this.step = step;
};

Counter.prototype.increment = function () {
    this.value += this.step;
};

Counter.prototype.decrement = function () {
    this.value -= this.step;
};

const counter = new Counter({
    initialValue: 0,
    step: 1
});

const counterValue = document.querySelector('span[id="value"]');
const incrementButton = document.querySelector('button[data-action="increment"]');
const decrementButton = document.querySelector('button[data-action="decrement"]');

const updateValue = () => {
    counterValue.textContent = counter.value;
}

incrementButton.addEventListener('click', () => {
    counter.increment();
    counterValue.textContent = counter.value;
});

decrementButton.addEventListener('click', () => {
    counter.decrement();
    counterValue.textContent = counter.value;
});