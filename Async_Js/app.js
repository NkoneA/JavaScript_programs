
//Declare async function
const get = async () => {
// requesting data
    try{
        let res = await fetch('https://catfact.ninja/breeds');
        let data = await res.json();
        console.log(data);
//Catch any error that may come up
    }catch(e){
        console.log('Error data not found!');
    }
};
// Call the function
get();
