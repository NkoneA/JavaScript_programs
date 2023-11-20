//Select elements
const input = document.querySelector('#username')
const h1 = document.querySelector('h1');
//Listen for the input event and change h1 text
input.addEventListener('input', function(){
    h1.innerHTML = `Welcome, ${input.value}`;
//check if input is empty
    if(input.value === ""){
        h1.innerHTML = 'Enter Your Username';
    }
})
