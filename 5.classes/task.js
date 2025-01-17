class PrintEditionItem {
    constructor(name, releaseDate, pagesCount) {
        this.name = name;
        this.releaseDate = releaseDate;
        this.pagesCount = pagesCount;
        this.state = 100;
        this.type = null;
        
    }

    fix (){
        this.state = this.state * 1.5;
    }

    set state (state){
        if (state >= 100){
            this._state = 100;
        } else if ( state <= 0){
            this._state = 0;
        } else {
            this._state = state;
        }

    }
    
    get state(){
        return this._state;
    }
    
}

class Magazine extends PrintEditionItem{
    constructor (name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.type ="magazine";
    }
    
}

class Book extends PrintEditionItem{
    constructor (author, name, releaseDate, pagesCount) {
        super(name, releaseDate, pagesCount);
        this.author = author;
        this.type = "book";
    }
}

class NovelBook extends Book {
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "novel";
    }
}

class FantasticBook extends Book{
    constructor(author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "fantastic";
    }
}

class DetectiveBook extends Book{
    constructor (author, name, releaseDate, pagesCount) {
        super(author, name, releaseDate, pagesCount);
        this.type = "detective";
    }
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state >= 30){
            this.books.push(book);
        }
    }

    findBookBy(type, value) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i][type] === value) {
                return this.books[i]                
            }
        }
        return null;
    }

    giveBookByName(bookName) {
        for (let i = 0; i < this.books.length; i++) {
            if (this.books[i].name == bookName) {
               let searchBook = this.books.splice(i, 1);
               return searchBook[0];
            }   
        }
        return null
    }
}

class Student {
    constructor(name) {
        this.name = name;
        this.marks = {};
    }

    addMark(subject){
        if (mark >= 2 && mark <= 5 ){
            if (Object.keys(this.marks).includes(subject) === false){
                this.marks[subject] = [];
                this.marks[subject].push(mark);
            }
            this.marks.subject.push(mark);
        }
    }

    getAverageBySubject(subject) {
        if ((Object.keys(this.marks).includes(subject) === false)){
            return 0;
        } else {
        Object.values(this.marks).reduce((sum,mark,index,arr) => {
            sum += mark;
            if (index === arr.length - 1){
                return sum/arr.length;
            }
            return sum;
        }, 0)
    }
    }
}
