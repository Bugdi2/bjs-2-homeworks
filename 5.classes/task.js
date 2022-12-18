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