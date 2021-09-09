import { renderListItems, addToDo } from '../Data/functions.js';

const inputForm = document.getElementById('input-form');
const fullList = document.getElementById('list-items');

renderListItems(fullList);


inputForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const data = new FormData(inputForm);
    addToDo(data.get('input'));

    renderListItems(fullList);


});

