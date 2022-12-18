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
            return 100;
        } else if ( state <= 0){
            return 0;
        } else {
            return state;
        }

    }
    
    get state(){
        return this.state;
    }
    
}

class Magazine extends PrintEditionItem{
    type ="magazine";
}

class Book extends PrintEditionItem{
    type ="book";
}

class NovelBook extends Book {
    type = "novel";
}

class FantasticBook extends Book{
    type = "fantastic";
}

class DetectiveBook extends Book{
    type = "detective";
}

class Library {
    constructor(name){
        this.name = name;
        this.books = [];
    }

    addBook(book){
        if (book.state > 30){
            books.push(book);
        }
    }

    findBookBy(type, value) {
        
    }
}