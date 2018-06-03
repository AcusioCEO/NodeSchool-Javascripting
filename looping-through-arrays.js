// Mauricio Rojas
// Saturday June 2nd, 2018


// Declares an array named pets
var pets = ['cat', 'dog', 'rat'];


// For every object in the pets array
for (i = 0; i < pets.length; i++) {
// For every index in the pets array it will add an "s"
pets[i] = pets[i] + 's';
}
// Logs the result to the Console
console.log(pets);
