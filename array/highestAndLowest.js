let arr = [-73, -35, -2, -98, -7634, -234, -163];

// highest => 7634
// lowest = 2

// highest 

// -Infinity
// Infinity

let max = -Infinity;
let min = Infinity;

for(let i=0; i< arr.length; i++){
    if(max < arr[i]){
        max = arr[i]
    }
    if(min > arr[i]){
        min = arr[i]
    }
}



console.log('max', max)
console.log('min', min)

// find out 2nd highest number
