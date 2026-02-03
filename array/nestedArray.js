let simpleArr = [1, 2, 3, 4, 5, 67, 8];

// for (let i = 0; i < simpleArr.length; i++) {
//   console.log(simpleArr[i]);
// }

// nestedArray

let nestedArr = [
  [1, 2, 3, 10, 100, 123], // max = -Infinity  // 123 // 0th index =>  [1, 2, 3]
  [4, 5, 6, 87, 99], // max = -Infinity 99 1st Index => [4, 5, 6]
  [7, 8, 9, 10, 11, 12, 87, 34],// max = -Infinity //87  // 2st Index => [7, 8 ,9]
];

let max = -Infinity;

for (let i = 0; i < nestedArr.length; i++) {
  let subArray = nestedArr[i];

    // let max = -Infinity;
  for(let j = 0; j < subArray.length; j++){
    console.log('j', subArray[j])
    if(max < subArray[j]){
        max = subArray[j]
    }
  }
}

console.log('max', max)


