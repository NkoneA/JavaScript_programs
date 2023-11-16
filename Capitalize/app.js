// Declare a function that takes a string as a parameter
function capitalize(str){
// Declare an empty string
    let upper = "";
//loop through string characters and convert the first character to uppercase
    for(let char of str){
        if(str.indexOf(char) === 0){
            upper = char.toUpperCase();
        }
    }
//return concatenated string with first letter capitalized
    return upper + str.slice(1);
}
