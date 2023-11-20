//Select elements
const form = document.querySelector('form');
const product = document.querySelector('#product');
const quantity = document.querySelector('#qty');

const groceryList = document.querySelector('#list');
//Listen for event and prevent the default behavior
form.addEventListener('submit', function (e) {
    e.preventDefault();
//Create an empty li and add content to it
    const newList = document.createElement('li');
    newList.innerHTML = `${quantity.value} ${product.value}`;
//Append newlist to the grocery list
    groceryList.appendChild(newList);
//Clear values on the inputs
    quantity.value = "";
    product.value = "";
})
