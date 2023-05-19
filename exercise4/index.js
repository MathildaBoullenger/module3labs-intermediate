function camelCase(cssProp) {
  let firstUpper = cssProp.replace(/-(.)/g, function (match, letter) { //the parameter here looks complicated but it is simply selecting the first letter after '-'
    return letter.toUpperCase();
  });

  return firstUpper;
}

console.log('-- camelCase --');
console.log(camelCase('margin-left')) // marginLeft
console.log(camelCase('background-image')) // backgroundImage
console.log(camelCase('display')) // display

//b.

function camelCase1(cssProp) {
  let camelCaseString = '';
  let capitaliseNextLetterFlag = false;
  for (let i = 0; i < cssProp.length; i++) {
    const currentLetter = cssProp[i];
    if (currentLetter === '-') {
      capitaliseNextLetterFlag = true;
    } else if (capitaliseNextLetterFlag) {
      camelCaseString += currentLetter.toUpperCase();
      capitaliseNextLetterFlag = false;
    } else {
      camelCaseString += cssProp[i];
    }
  }
  return camelCaseString;
}

console.log('-- camelCase1 --');
console.log(camelCase1('margin-left')) // marginLeft
console.log(camelCase1('background-image')) // backgroundImage
console.log(camelCase1('display')) // display

//Other for loop

function camelCase2(cssProps) {
  let modifiedProp = ''; //this is our new, empty string
  let capitaliseNextLetterFlag1 = false;
  let camelCaseString1 = '';

  for (const char of cssProps) {
    const currentLetter = char;
    if (currentLetter === '-') {
      capitaliseNextLetterFlag1 = true;
    } else if (capitaliseNextLetterFlag1) {
      modifiedProp += currentLetter.toUpperCase();
      capitaliseNextLetterFlag1 = false;
    } else {
      modifiedProp += char;
    }
  }

  return modifiedProp;
}

console.log('-- camelCase2 --');
console.log(camelCase2('margin-left')) // marginLeft
console.log(camelCase2('background-image')) // backgroundImage
console.log(camelCase2('display')) // display

//With arrow function 

function camelCase3(cssProp) { 
let firstUpper = cssProp.replace(/-(.)/g, (match, letter) => letter.toUpperCase());
return firstUpper;
}

console.log('-- camelCase3 --');
console.log(camelCase3('margin-left')) // marginLeft
console.log(camelCase3('background-image')) // backgroundImage
console.log(camelCase3('display')) // display

