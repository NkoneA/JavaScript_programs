
// https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/1.png

//Select element with container id
//Save common url of all pokemons
const container = document.querySelector('#container');
const baseURL = 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/'

//Loop over through 1 and 151 and for each loop create empty div, image and span
// Addd text to span, source to image and give div a class name
for (let i = 1; i <= 151; i++) {
    const pokemon = document.createElement('div');
    pokemon.classList.add('pokemon');
    const label = document.createElement('span');
    label.innerText = `#${i}`;
    const newImg = document.createElement('img');
    newImg.src = `${baseURL}${i}.png`

//Append pokemon to container
    pokemon.appendChild(newImg);
    pokemon.appendChild(label);
    container.appendChild(pokemon)
}

