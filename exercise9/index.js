let salaries = {
    "Timothy": 35000,
    "David": 25000,
    "Mary": 55000,
    "Christina": 75000,
    "James": 43000
};

//a.

//loop
let sum = 0;
for (let key in salaries) {
    sum += salaries[key]; //indexing the key so this will return the value
}

console.log(sum);

/*reduce method
const sum1 = Object.values(salaries).reduce((accumulator, currentValue) => accumulator + currentValue, 0); 
console.log(sum1); //here we are converting the object into an array and can then use a method specific to arrays. The nature of the reduce method means that it works with an accumulator.
*/

//b.

function topEarner(salaries) {
    let highestSalary = 0;
    let topEarnerName = '';
    for (let [name, value] of Object.entries(salaries)) {
        if (value > highestSalary) {
            highestSalary = value;
            topEarnerName = name;
        }
    }
    return topEarnerName;
}

console.log(topEarner(salaries));