let arr = [73,95,25,907,165,375,187,26,948];

let highestNumber = -Infinity;
let secondHighest = -Infinity;

for(let i=0; i<= arr.length; i++){
    if(highestNumber < arr[i]){
        secondHighest = highestNumber;
        highestNumber = arr[i];
        
    }else if(secondHighest < arr[i] && secondHighest != highestNumber){
        secondHighest = arr[i]
    }
}

console.log('highest', highestNumber);
console.log('second highest', secondHighest)