//Select all the lis
let li = document.querySelectorAll('li');
//Loop over the lis and highlight only index 1 and index 4
for(let i = 0; i < li.length; i++){
    if(li[1] && li[4]){
         li[i].classList.toggle('highlight');
//turn off styling for all other elements
    }else{
        li[i].classList.toggle('highlight');
}
}
