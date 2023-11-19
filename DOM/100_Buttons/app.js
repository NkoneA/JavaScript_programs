//loop over 1 through 100
for(let i = 1; i <= 100; i++){
//Create empty button
    let b = document.createElement('button');
//Add text to empty button
     b.innerText = 'Hello!';
//Select the target element
     let div = document.querySelector('#container');
//Append buttons to the target element
     div.appendChild(b);
}
