//Declare array of objects
const fullNames = [{first: 'Albus', last: 'Dumbledore'}, {first: 'Harry', last: 'Potter'},
	{first: 'Hermione', last: 'Granger'}, {first: 'Ron', last: 'Weasley'},
	{first: 'Rubeus', last: 'Hagrid'}, {first: 'Minerva', last: 'McGonagall'},
	{first: 'Severus', last: 'Snape'}];

// Use Map to return only first names
let firstNames = fullNames.map(function(el){
    return el.first;
})
//print the results
console.log(firstNames);
