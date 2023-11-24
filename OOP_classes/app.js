
//Declare main class
   class Vehicle{
    constructor(make, model, year){
        this.make = make;
        this.model = model;
        this.year = year;
    }
//Method for main class
    display(){
        console.log('Car Info:',this.make, this.model, this.year);
        return this;
    }
   }
//Declare a sub class and inherit main class properties using extends keyword
   class Car extends Vehicle{
   constructor(make, model, year, doors){
    super(make, model, year); //
    this.doors = doors;
   }
//Method for sub class
   display(){
    console.log('Car Info:', this.make, this.model, this.year, this.doors);
    return this;
  }

   }
//Create new instances of main and sub classes
   let car = new Vehicle('benz', 'd3', 2018);
   let taxi = new Car('nissan', 'b4', 2020, 4);
   //console.log(car);
   //console.log(taxi)

