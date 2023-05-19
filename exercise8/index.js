const phoneBookABC = new Map() //an empty map to begin with
phoneBookABC.set('Annabelle', '0412312343')
phoneBookABC.set('Barry', '0433221117')
phoneBookABC.set('Caroline', '0455221182')

//a.

const phoneBookDEF = new Map() //an empty map to begin with

//b.

phoneBookDEF.set('Daisy', '0458761954')
phoneBookDEF.set('Emilio', '0414758932')
phoneBookDEF.set('Felix', '0457896412')

//console.log(phoneBookABC);
//console.log(phoneBookDEF);

//c.

//Changing the value of an existing entry
phoneBookABC.set('Caroline', '0487562954');
//console.log(phoneBookABC);

//d. 

function printPhoneBook(contacts) {
  console.log (contacts.entries());
  }

printPhoneBook(phoneBookABC);
printPhoneBook(phoneBookDEF);

//OR 

/*for (let contacts of phoneBookABC) {
    console.log(contacts)}*/

//e.

const phoneBook = new Map([...phoneBookABC, ...phoneBookDEF]);

//f.

function printPhoneBookNames(contacts) {
  console.log (contacts.keys());
  }

printPhoneBookNames(phoneBook);