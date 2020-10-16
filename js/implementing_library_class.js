// create a class library and implement the following:
// constructor must take the book list as an argument
// getBookList()
// issueBook(bookname, user)
// returnBook(bookname)

class Library {
    constructor(bookList) {
        this.bookList = bookList;
        this.issuedBooks = {};
    }

    getBookList() {
        this.bookList.forEach(element => {
            console.log(element);
        });
    }

    issueBook(bookName, user) {
        if (this.issuedBooks[bookName] == undefined) {
            this.issuedBooks[bookName] = user;
        }
        else {
            console.log("This book is already issued!");
        }
    }

    returnBook(bookName){
        delete this.issuedBooks[bookName];
    }
}

let books = ['book1', 'book2', 'book3'];
let library = new Library(books);
console.log(library.getBookList());
library.issueBook('book1', 'waqar');
library.issueBook('book1', 'waqar');         // prints - This book is already issued!
library.returnBook('book1');
