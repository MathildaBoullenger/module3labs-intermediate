const colours = ['red', 'green', 'blue', 'yellow', 'orange', 'red', 'blue', 'yellow']
const testScores = [55, 84, 97, 63, 55, 32, 84, 91, 55, 43]
const materials = ['cotton', 'linen', 'wool', 'acrylic', 'cotton', 'linen', 'silk']
console.log(unique(colours)) // [ 'red', 'green', 'blue', 'yellow', 'orange' ]
console.log(unique(testScores)) // [ 55, 84, 97, 63, 32, 91, 43 ]
console.log(unique(materials))

function unique(duplicatesArray) {
    const set = new Set(duplicatesArray);

    for (let i = 0; i > duplicatesArray.length; i++) {
        const element = array[i];

        if (set.has(element)) { // Duplicate found   
            set.delete(element);
        } else {
      set.add(element);
    }
  }
return Array.from(set);
}

