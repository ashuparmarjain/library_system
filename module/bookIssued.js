// BooksIssued

class BookIssued{

    MAX_AVAIL_TIME = 10

    constructor(id, book_id, user_id){
        this.id = id;
        this.book_id = book_id;
        this.user_id = user_id;
        this.issued_date = new Date();
        this.due_date = new Date(new Date().setDate(new Date().getDate() + this.MAX_AVAIL_TIME)) 
        this.status = true
    }

    returnBook(){
        this.status = false;
    }

}

module.exports = BookIssued; 