const books = [
    { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 },
    { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { id: 3, title: '1984', author: 'George Orwell', year: 1949 },
    { id: 4, title: 'Brave New World', author: 'Aldous Huxley', year: 1932 },
    { id: 5, title: 'The Catcher in the Rye', author: 'J.D. Salinger', year: 1951 },
];

//a.
let bookId = '3';
let getBookTitle = books.find(book => book.id == bookId);
console.log(getBookTitle.title);

//b.

let getOldBooks = books.filter(book => book.year < 1950);
console.log(getOldBooks);

//c.
books.genre = 'classic';

const key = 'genre';
const value = 'classic';

let addGenre = books.map(book => ({ ...book, genre: 'classic' }));
console.log(addGenre);

console.log(books); //the map method just creates a shallow copy so we see genre only when we call the function addGenre itself.

//d.

function getTitles(authorInitial) {
    let matchedBooks = books.filter(book => book.author.startsWith(authorInitial));
    let matchedTitles = matchedBooks.map(book => book.title);
    return matchedTitles;
}

console.log(getTitles('A')); //prints the titles of books written by authors whose names start with 'A'.

//e.

function latestBook() {
    let mostRecent = 0;
    books.forEach(book => {
        if (book.year > mostRecent) {
            mostRecent = book.year;
        }})
    let mostRecentBook = books.find(book => book.year = mostRecent);
    return mostRecentBook;
    }


console.log(latestBook());