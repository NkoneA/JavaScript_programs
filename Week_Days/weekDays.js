
// declare an object with key-value pairs
const days = {1: 'Monday', 2: 'Tuesday', 3: 'Wednesday', 4: 'Thursday', 5: 'Friday', 6: 'Saturday', 7: 'Sunday'};
//declare a function that takes a number (num) between 1 and 7
function returnDay(num){
//check if the number (num) is less than 1 and greater than 7, return null if true
    if(num < 1 || num > 7){
        return null;
//return object (days) and its key, variable num
      }else{
         return days[num];
    }
}
//print function call with arguments to test the program
console.log(returnDay(5));
