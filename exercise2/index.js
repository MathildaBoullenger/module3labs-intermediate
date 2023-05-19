function truncate(str, max) {
    if (str.length > max) { //If the string's total length is greater than the max length,
        let substringVar = str.substring(0, max); //we create a substring whiches lentgh is from the first letter of the word (index0) until the chosen maximum (max). This only works because the end of the range is exclusive.
        return (substringVar + '...'); //in the same instance, we want to return the substring followed by '...' 
    }
    else {
        return (str); //if the condition is not met/ the length of the string is not greater than max, we can simply return the string itself
    }
}

console.log(truncate('This text will be truncated if it is too long', 25))

/*let str = 'The sun is shining today!'
console.log(str.length)*/ //This only displays the length of the array for testing purpose

//b.

let str1 = 'It is sunny outside';
let max = 30
const truncate1 = (str1.length > max) ? console.log(str1.substring(0, max) + '...') : console.log(str1); //this is an arrow function
//using conditional operators enables us to be concise


