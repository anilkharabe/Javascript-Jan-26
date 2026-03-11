let arr = [73, 95, 25, 907, 165, 375, 187, 26, 948]; // second largest

let arr2 = [734, 2873, 2764, 21823, 384, 2376]; // second largest

function findSecondLargestNumber(numberOfArray) {
  let highestNumber = -Infinity;
  let secondHighest = -Infinity;

  for (let i = 0; i <= numberOfArray.length; i++) {
    if (highestNumber < numberOfArray[i]) {
      secondHighest = highestNumber;
      highestNumber = numberOfArray[i];
    } else if (secondHighest < numberOfArray[i] && secondHighest != highestNumber) {
      secondHighest = numberOfArray[i];
    }
  }
  console.log("highest for ", highestNumber);
  console.log("second highest", secondHighest);
}

findSecondLargestNumber(arr);
findSecondLargestNumber(arr2);
