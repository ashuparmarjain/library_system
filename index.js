let librarySystem = require('./module/library.js');
let query = require('./utility/print.js');
let library = new librarySystem();


// Added few books here
library.addBook('The Alchemist', 'novel', 'Paulo', '2015');
library.addBook('Composing Software', 'JS', 'xyz', '2018');
library.addBook('El JS', 'as', 'hjg', '2017');
library.addBook('text 4', 'asds', 'jkh', '2017');


// Added few users here
library.addUser('Ashutosh');
library.addUser('Ram');
library.addUser('Sham');
library.addUser('Kishore');


// issue books

library.issueBook(1, 1)
library.issueBook(2, 2)
library.issueBook(1, 3)
library.issueBook(1, 4)

// return book




// check avaialble books
query.log(library.booksAvailable())


// check books issued
query.log(library.booksIssued())


// return book
library.returnBook(1)

// check books issued
query.log(library.booksIssued())


// check books issued
query.log(library.booksIssued())


// check avaialble books
query.log(library.booksAvailable())

// search book and check the availability!
query.log(library.search('The Alchemist'))