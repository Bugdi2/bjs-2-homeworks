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
  
  return { min: min, max: max, avg: Number(avg.toFixed(2)) };
}
getArrayParams(-99, 99, 10)


function summElementsWorker(...arr) {
  let sumelement = 0;

  for (let i = 0; i < arr.length; i++){
    sumelement = sumelement + arr[i];

  }
  return sumelement;

}
summElementsWorker(1,2,3,4,5)

function differenceMaxMinWorker(...arr) {
  let max = arr[0];
  let min = arr[0];
  let diff = arr[0];

  if (arr == 0){
    return 0;
  } 
    max = Math.max(...arr);
    min = Math.min(...arr);
    diff = max - min;
    
    return diff;

}
differenceMaxMinWorker(1, 2, 3, 4, 5)

function differenceEvenOddWorker(...arr) {
  let sumEvenElement = 0;
  let sumOddElement = 0;
  let difference = 0;

    if(arr.length == 0){
      return 0;
    } 

  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0){
      sumEvenElement = sumEvenElement + arr[i];
    } else {
      sumOddElement = sumOddElement + arr[i];
    }
  }
  difference = sumEvenElement - sumOddElement;

  return difference;

}
differenceEvenOddWorker(10, 10, 11, 20, 10)



function averageEvenElementsWorker(...arr) {
  let sumEvenElement = 0;
  let countEvenElement = 0;
  
  if (arr.length === 0){
    return 0;
  }
  
  for (let i = 0; i < arr.length; i++){
    if (arr[i] % 2 == 0) {
      sumEvenElement = sumEvenElement + arr[i];
      countEvenElement = countEvenElement + 1;
    }
  }
  return (sumEvenElement / countEvenElement);
}

averageEvenElementsWorker(1,2,3,4,5)

function makeWork (arrOfArr, func) {
  let maxWorkerResult = -Infinity;
  
  for (let i = 0; i < arrOfArr.length; i++) {
     const result = func(...arrOfArr[i])
     if (result > maxWorkerResult) {
      maxWorkerResult = result;
     }
  }
  return maxWorkerResult;
}

makeWork([61, 206, 328, 284],summElementsWorker)
