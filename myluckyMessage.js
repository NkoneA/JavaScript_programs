//This program generates a random horoscopic message each time user runs the program

 randomMessage = () => {//This arrow function takes no parameters


    let randomNumber = Math.floor(Math.random() * 6); //Generate random whole numbers between 0 and 5 then stores them in a declared randomNumber variable


    switch (randomNumber) { //Switch statement assign messages to random numbers generated

        case 0:
            return 'Your lucky planet now : Mars \nMessage : Do not try to resolve everything, Let go and let God!';
            break;

        case 1:
            return 'Your lucky planet now : Jupiter \nMessage : You are highly capable never doubt yourself again.';
            break;

        case 2:
            return 'Your lucky planet now : Venus \nMessage : Do not be anxious about the future or the past.';
            break;

        case 3:
            return 'Your lucky planet now : Earth \nMessage : Be patient the universe will deliver.';
            break;

        case 4:
            return 'Your lucky planet now : Saturn \nMessage : Stop procrastinating and take action right now!';
            break;

        case 5:
            return 'Your lucky planet now : Uranus \nMessage : The future looks bright stop overthinking.';
            break;

        default:
            return 'No readings at this time';
            break;
    }
}
console.log(randomMessage()); // logging function call to the console



 



    

      
            
           

        
            
           

        
            
            

        
            
            

        
            
            

       
            
            

        
    






