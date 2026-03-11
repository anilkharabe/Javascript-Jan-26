let arr = [ 1, 2, 3, 4, 5, 6, 15, 18, 29, 39, 41, 43, 54, 55, 78, 90, 102, 286, 1003, 2003];


function binarySeach(arr, searchNumber){
  let leftIndex = 0;
  let rightIndex = arr.length - 1;
  let indexNumber = -1;

  while(leftIndex <= rightIndex){
    let middleIndex = Math.round ((leftIndex + rightIndex)/2);
    if(arr[middleIndex] == searchNumber){
      indexNumber = middleIndex;
      break;
    }else if(searchNumber < arr[middleIndex]){
      rightIndex = middleIndex -1;
    }else{
      leftIndex = middleIndex + 1; 
    }
  }

  return indexNumber;
}

console.log(binarySeach(arr, 6000)) ;