const animals = ['Tiger', 'Giraffe']
console.log(animals)

//a.
animals.push('Flamingo', 'Rhinoceros');
console.log(animals)

//b.
animals.unshift('Elephant', 'Lion');
console.log(animals)

//c.
animals.sort();
console.log(animals)

//d.
const middleIndex = (animals.length / 2) 
console.log(middleIndex)

animals.splice(3, 0, 'Monkey'); //This works because it starts at this index and 3 will actually be the new index for 'Monkey'. 
console.log(animals)

//for testing the filter function
animals.push('Emu');

//e.
let searchString = 'E'; //Works when case is matched only
let findMatchingAnimals = animals.filter(animal => animal.startsWith(searchString)); //We are using the inbuilt function 'startsWith()'
console.log(findMatchingAnimals);

//to make it work regardless over lowercase or uppercase, we can convert both the search input and the string items to the same format (uppercase or lowercase)
let searchString1 = 'e';
let findMatchingAnimals1 = animals.filter(animal => animal.toLowerCase().startsWith(searchString1.toLowerCase()));
console.log(findMatchingAnimals1)

