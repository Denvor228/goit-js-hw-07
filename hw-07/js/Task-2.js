'use strict'

const ingredients = [
    'Картошка',
    'Грибы',
    'Чеснок',
    'Помидоры',
    'Зелень',
    'Приправы',
];

const listContainer = document.querySelector('.ingredients');
const list = lis(ingredients);

listContainer.append(list);

function lis() {
    let item = undefined;
    ingredients.forEach(element => {
        item = document.createElement('li');
        item.textContent = element;
        listContainer.append(item);
    });
    return item;
}