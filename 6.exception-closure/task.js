function parseCount(number){
    const pars = Number.parseFloat(number);
    if (isNaN(pars)) {
        throw new Error ('Невалидное значение');
    }
    return pars;
}

function validateCount(number){
    try {
        return parseCount(number);
    } catch (error) {
        return error;
    }
}

class Triangle {
    constructor (a,b,c){
        if (a + b < c){
            throw new Error ('Треугольник с такими сторонами не существует');
        }
        this.a = a;
        this.b = b;
        this.c = c;
    }

    get perimetr(){
        return this.a + this.b + this.c;
    }

    get area() {
        const perimetr = this.perimetr/2;
        return Math.sqrt ( (  perimetr / 2 ) - this.a ) * ( ( perimetr / 2 ) - this.b ) * ( ( perimetr / 2 ) - this.c );
    }
}

function getTriangle (a, b, c) {
    try{
        return new Triangle(a, b, c);
    } catch (error){ 
        return {
            get perimetr () {return 'Ошибка! Треугольник не существует'},
            get area () {return 'Ошибка! Треугольник не существует'}
        }
    }

}