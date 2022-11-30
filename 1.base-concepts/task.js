"use strict"

function solveEquation(a, b, c) {
  let arr = [];
  let sqrtOne;
  let sqrtTwo;
  let D = Math.pow(b, 2) - 4*a*c;

  if (D < 0){
    console.log ('Корней нет!')
  } else if (D === 0) {
    sqrtOne = -b/(2*a);
    arr.push(sqrtOne);
    console.log(arr);
  } else {
    sqrtOne= (-b + Math.sqrt(D))/ (2*a);
    sqrtTwo = (-b - Math.sqrt(D))/ (2*a);
    arr.push(sqrtOne);
    arr.push(sqrtTwo);
    console.log('Первый корень=' + arr[0] + ';' + ' Второй корень=' + arr[1])
  }

  return arr;
}
solveEquation(1, 2, 1)



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  
}