function getArrayParams(...arr) {
  let min = arr[0];
  let max = arr[0];
  let sum = 0;
  let avg;

  for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i];
    
    if(min > arr[i]){
      min = arr[i];
    } else if (max < arr[i]){
      max = arr[i];
    } 
  }
  avg = sum / arr.length;
  

  console.log("min:" + min + ", max:" + max + ", avg:" + avg.toFixed(2));
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}
getArrayParams(-99, 99, 10)


function summElementsWorker(...arr) {
  let sumelement = 0;

  for (let i = 0; i < arr.length; i++){
    sumelement = sumelement + arr[i];

  }
  console.log(sumelement);
  return sumelement;

}
summElementsWorker(1,2,3,4,5)

function differenceMaxMinWorker(...arr) {
  let max = arr[0];
  let min = arr[0];
  let diff = arr[0];

  if (arr == 0){
    console.log("Введите значения и перезагрузите страницу");
    return 0;
  } else {
    max = Math.max(...arr);
    min = Math.min(...arr);
    console.log("Максимальное значение: " + max);
    console.log("Минимальное значение: " + min);
    diff = max - min;
    
    console.log("Разница: " + max + " - " + min + " = " + diff);
    return diff;
  }

}
differenceMaxMinWorker(1, 2, 3, 4, 5)

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;

  for (let i = 0; i < arr.length; i++){
    if(arr.length == 0){
      console.log("Введите значения!")
    } else if (arr[i] % 2 == 0){
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  difference = sumEvenElement - sumOddElement;

  console.log ("Разница = " + difference);
  return difference;

}
differenceEvenOddWorker(10, 10, 11, 20, 10)



function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  for (let i = 0; i < arr.length; i++){
    if (arr.length == 0){
      console.log("Пустой массив");
      return false;
    } else if (arr[i] % 2 == 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  console.log("резулитат деления =" + sumEvenElement / countEvenElement)
  return (sumEvenElement / countEvenElement);
}

averageEvenElementsWorker(1,2,3,4,5)

function makeWork (arrOfArr, func) {
  let maxWorkerResult = arrOfArr[0];

  for (let i = 0; i < arrOfArr.length; i++){
    func += [...arrOfArr[i]];
    if (func > maxWorkerResult){
      maxWorkerResult = func;
    }
    console.log("Максимум = " + maxWorkerResult);
    return maxWorkerResult;
  }

}

makeWork([61, 206, 328, 284],summElementsWorker)
