let arr = [10, 23, 76, 23, 98, 71];
let sum = 0;

for(let i = 0; i < arr.length; i++){
    sum = sum + arr[i]
}

console.log("sum:", sum)

// reduce 

// let multiplyBy10 = arr.map((currentElement)=>{
//     return currentElement * 10
// })
// console.log('multiplyBy10', multiplyBy10)

let sumReduce = arr.reduce((sumAcc, currentElement)=>{
    return sumAcc + currentElement;
}, 0)

console.log('sumReduce', sumReduce)

const numbers = [-384, -87, -21, 12, 1276, 247, 1625, -3437, 623, 98, 623, -87, 27, 87, 247, 12, -21];

let occurrences = numbers.reduce((acc, currentElement)=>{
    if(acc[currentElement]){
        acc[currentElement] += 1;
    }else{
        acc[currentElement] = 1;
    }

    return acc;
}, {});

console.log('occurrences', occurrences)

