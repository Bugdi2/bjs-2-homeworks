"use strict"

function solveEquation(a, b, c) {
  const arr = [];
  let sqrtOne;
  let sqrtTwo;
  let discriminant = Math.pow(b, 2) - 4*a*c;

  if (discriminant < 0){
    console.log ('Корней нет!')
  } else if (discriminant === 0) {
    sqrtOne = -b/(2*a);
    arr.push(sqrtOne);
    console.log(arr);
  } else {
    sqrtOne= (-b + Math.sqrt(discriminant))/ (2*a);
    sqrtTwo = (-b - Math.sqrt(discriminant))/ (2*a);
    arr.push(sqrtOne);
    arr.push(sqrtTwo);
    console.log('Первый корень=' + arr[0] + ';' + ' Второй корень=' + arr[1])
  }

  return arr;
}
solveEquation(1, 2, 1)



function calculateTotalMortgage(percent, contribution, amount, countMonths) {
  let body;
  let monthsPers;
  let payMonth;
  let sum;
  if( isNaN(percent) || isNaN(contribution) || isNaN(amount)|| isNaN(countMonths)){
    console.log('Введите корректные данные');
    return false;

  }

  body = amount - contribution;
  monthsPers = percent/100/12;
  payMonth = body * (monthsPers + (monthsPers/ (((1 + monthsPers)**countMonths)-1)))
  sum = Number((payMonth * countMonths).toFixed(2));
  console.log(sum);
  return sum;
}

calculateTotalMortgage("2", 0, 50000, 12)