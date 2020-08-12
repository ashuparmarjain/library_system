
let Books = require('./book.js');
let User = require('./user.js');
let BookIssued = require('./bookIssued.js');


class Library{

    books = [];
    user = [];
    bookIssued = [];

    addBook(title, subject, author, publication_year){
        this.books.push(new Books(this.books.length+1, title, subject, author, publication_year))
    }

    addUser(name){
        this.user.push(new User(this.user.length+1, name));
    }

    issueBook(userID, bookID){
        if(this.bookIssued.filter((iss)=> iss.book_id === bookID && iss.status).length || this.books.length < bookID) 
            throw new Error('Book not available');
        let userIsssued = this.bookIssued.filter((iss) => userID === iss.user_id).filter((iss)=> iss.status);
        let num_of_book_issued = userIsssued.length;
        if(num_of_book_issued < 3){
            this.bookIssued.push(new BookIssued(this.bookIssued.length+1, bookID, userID,  new Date()))
        } else {
            throw new Error('User can avail upto 3 books max')
        }   
    }

    returnBook(bookIssuedID){
        this.bookIssued[bookIssuedID].returnBook();
    }

    booksAvailable(){
        return this.books.filter(res => !this.bookIssued.filter((iss) => iss.status).map(res => res.book_id).find((e) => e === res.id))
    }

    booksIssued(){
        return this.bookIssued;
    }

    search(title){
        let book =  this.books.find(res => res.title === title)
        if(book && this.bookIssued.filter(res => res.book_id === book.id && !res.status).length){ 
            return [{
                'book': book,
                'avaialble':true
            }]
        }
        else if(book && !this.bookIssued.filter(res => res.book_id === book.id && !res.status).length){
            return [{
                'book': book,
                'available':false,
                'next_availability':this.bookIssued.find(res => res.book_id === book.id && res.status).due_date
            }]
        }
        else {
            throw new Error('Book not found')
        }
    }


}


module.exports = Library; 