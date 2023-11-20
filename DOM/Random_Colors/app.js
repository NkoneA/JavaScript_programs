//Select a button and h1
const button = document.querySelector('button');
const h1 = document.querySelector('h1');
//Add eventListener to the button when is clicked
//Update h1 text
button.addEventListener('click', function () {
    const newColor = makeRandColor();
    document.body.style.backgroundColor = newColor;
    h1.innerText = newColor;
})
//Function returning a randon color
const makeRandColor = () => {
    const r = Math.floor(Math.random() * 255);
    const g = Math.floor(Math.random() * 255);
    const b = Math.floor(Math.random() * 255);
    return `rgb(${r}, ${g}, ${b})`;
}

