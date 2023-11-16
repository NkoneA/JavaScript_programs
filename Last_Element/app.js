//Declare a function that takes array as a parameter
function lastElement (arr) {
//for loop to iterate through an array
    for(let i = 0; i < arr.length; i++){
        let last = arr[arr.length - 1];
//if last element, it is returned
        if(last){
            return last;
        }
    }
// return null if array is empty
    if(arr.length === 0){
        return null;
    }
}
//call the function and print the results
console.log(lastElement([]));
