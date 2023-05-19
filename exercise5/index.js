let twentyCents = 0.20
let tenCents = 0.10
console.log(`${twentyCents} + ${tenCents} = ${twentyCents + tenCents}`)
// 0.2 + 0.1 = 0.30000000000000004

let fixedTwenty = twentyCents.toFixed(2);
let fixedTen = tenCents.toFixed(2);
console.log(fixedTwenty + fixedTen) //why is this not working?

/*a. This code returns the wrong answer because the .toFixed method returns a string with indicated number of decimal places. 
By using + we simply concatenate the two strings we created.*/

//b.

const currencyAddition = (float1, float2) => { let sumResult = parseFloat((float1 + float2).toFixed(2)); return sumResult; };
console.log(currencyAddition(twentyCents, tenCents));

//c. and d.

function currencyOperation(float1, float2, operation, numDecimals) {
    if (numDecimals <= 10) {
    switch (operation) {
      case '+':
        const currencyAddition = (float1, float2) => {
          let sumResult = parseFloat((float1 + float2).toFixed(numDecimals));
          return sumResult;
        };
        return currencyAddition(float1, float2);
      case '-':
        const currencySubstraction = (float1, float2) => {
          let sumResult = parseFloat((float1 - float2).toFixed(numDecimals));
          return sumResult;
        };
        return currencySubstraction(float1, float2);
      case '/':
        const currencyDivision = (float1, float2) => {
          let sumResult = parseFloat((float1 / float2).toFixed(numDecimals));
          return sumResult;
        };
        return currencyDivision(float1, float2);
      case '*':
        const currencyMultiplication = (float1, float2) => {
          let sumResult = parseFloat((float1 * float2).toFixed(numDecimals));
          return sumResult;
        };
        return currencyMultiplication(float1, float2);
      default:
        console.log("Empty action received.");
        }
    } else {
        return currencyOperation(float1, float2, operation, 10);
    }
    }


console.log(0.3 == currencyAddition(0.1, 0.2)) // true
console.log(0.3 == currencyOperation(0.1, 0.2, '+')) // true

/*console.log(currencyOperation(0.20, 0.10, '+'));  // Output: 0.30
console.log(currencyOperation(0.20, 0.10, '-'));  // Output: 0.10
console.log(currencyOperation(0.20, 0.10, '/'));  // Output: 2.00
console.log(currencyOperation(0.20, 0.10, '*'));  // Output: 0.02*/
