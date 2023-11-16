//Declare a function that takes temperature as a parameter
function isShortsWeather(temperature){
//Condition checks if temperature is greater or equal to 75
    if(temperature >= 75){
//Return true or false
        return true;
    }else{
        return false;
    }
}
//Call the function and print the results
console.log(isShortsWeather(100));
