

//Array of colors
const colors = ['red', 'orange', 'yellow', 'green', 'blue', 'indigo', 'violet'];
//Select all spans and save them to a variable
const span =document.querySelectorAll('span');
//Loop over spans and assign color for each
for(let i=0; i<span.length; i++){
    span[i].style.color = colors[i];
}

