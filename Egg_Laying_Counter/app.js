//Declare an object hen and its properties
const hen = {

    name: "Helen",

    eggCount: 0,
//Method that increment egg laying by 1 each time is called
    layAnEgg() {
        this.eggCount++;
        return "EGG";
    }
};
