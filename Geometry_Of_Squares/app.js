//Declare an object square
const square = {
//Object method calculating area
    area(side){
        return side * side;
    },
//Object method calculating parameter
    perimeter(side){
        return side * 4;
    }
}
//Access object properties and print the results
console.log(square.area(10));
console.log(square.perimeter(10));
