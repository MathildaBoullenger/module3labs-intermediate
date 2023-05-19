function ucFirstLetters(string) {
    let words = string.split(' '); //first I want to make sure that each word is stored as its own string so we can access the first letter of each.
    
    for (let i = 0; i < words.length; i++) { //It goes through each letter 
        words[i] = words[i].charAt(0).toUpperCase() + words[i].slice(1); //and it sets every first letter (index 0) to upper case. slice(1) is the remaining part of the word: from index 1 onwards. So the capitalised first letter and rest of the word are concatenated in the same line using the '+' operator. 
    }   //the previous lines return the words, but they are still returned as multiple strings.                                                                    
                                                                         
    return words.join(' '); //Here the words are joined back together, using the .join method. 
}

console.log(ucFirstLetters("los angeles")) //Los Angeles