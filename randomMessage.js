//This app generates random horoscope messages each time user runs the program

 randomMessage = () => {//This arrow function takes no parameters

    let randomNumber = Math.floor(Math.random() * 6); //Generate random whole numbers between 0 and 5 then stores them in a declared randomNumber variable

    switch (randomNumber) { //Switch statement assign messages to random numbers generated

        case 0:
            return 'Let go and let God!';
            break;

        case 1:
            return 'You are highly favoured.';
            break;

        case 2:
            return 'Do not be anxious about the future or the past.';
            break;

        case 3:
            return 'The universe will deliver!';
            break;

        case 4:
            return 'Stop procrastinating take action now!';
            break;

        case 5:
            return 'So many blessings coming your way.';
            break;

        default:
            return 'Only for numbers between 0 and 5';
            break;
    }
}
console.log(randomMessage()); // logging function call to the console


