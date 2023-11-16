//Declare a function that takes usernames array as a parameter
function validUserNames(usernames) {
// Filter function returns an array of usernames that are less than 10 characters
  return usernames.filter(u => u.length < 10);
}
//Function call and print results
console.log(validUserNames(['mark', 'staceysmom1978', 'q29832128238983', 'carrie98', 'MoanaFan']));

