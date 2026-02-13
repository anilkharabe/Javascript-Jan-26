const numbers = [
  -384, -87, -21, 12, 1276, 247, 1625, -3437, 623, 98, 623, -87, 27, 87, 247,
  12, -21,
];

function findMax() {
  const max = numbers.reduce((currentMax, currentElement) => {
    if (currentElement > currentMax) {
      currentMax = currentElement;
    }
    return currentMax;
  }, -Infinity);
  return max;
}

// count occurrences

// let objEx = {
//     'name':'Rushi',
//     'age': 20
// }

// if(objEx['name']){
//     console.log(objEx['name'])
// }

// if(objEx['city']){
//     console.log('Pune')
// }

/*
expected object

{
  -387: 1,
  -87: 2, 
  -21: 2
}


*/
function countOccurrence() {
  const repeatedNumberObj = numbers.reduce((acc, currentElement) => {
    acc[currentElement]
      ? (acc[currentElement] += 1)
      : (acc[currentElement] = 1);

    // if(acc[currentElement]){
    //   acc[currentElement] += 1;
    // }else{
    //   acc[currentElement] = 1;
    // }

    return acc;
  }, {});

  console.log("repeatedNumberObj", repeatedNumberObj);
}

// countOccurrence()

let animals = [
  "Penguin",
  "Giraffe",
  "Elephant",
  "Tiger",
  "Kangaroo",
  "Dolphin",
  "Panda",
  "Zebra",
  "Wolf",
  "Hippopotamus",
  "Eagle",
];

function longestAnimalWord() {
  const longestWordString = animals.reduce((longestWord, currentAnimal) => {
    console.log("longestWord", longestWord);
    if (currentAnimal.length > longestWord.length) {
      longestWord = currentAnimal;
    }
    return longestWord;
  }, "");
  console.log("longestWordString", longestWordString);
}

longestAnimalWord();

const nestedArr = [
  [2,5,1],
  [5,28,10],
  [6,2,98]
]

console.log(![].includes(2)) 
//uniqueArray = [2,5,1,28, 10, 6, 98];
// [];

function uniqueArray(){
  const mergedUniqueArray = nestedArr.reduce((acc, currentArray)=>{
    currentArray.map((currentElement)=>{
      if(!acc.includes(currentElement)){
        acc.push(currentElement)
      } 
    })
    return acc;
  }, []);
  console.log('mergedUniqueArray', mergedUniqueArray);
}

uniqueArray()


