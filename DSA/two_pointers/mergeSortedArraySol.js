let arr1  = [1, 3, 5, 7, 9]
let arr2 = [2, 4]

let sortedArray = [];

let i = 0;
let j = 0;

while(i < arr1.length && j < arr2.length){
    if(arr1[i] <= arr2[j]){
        sortedArray.push(arr1[i]);
        i++;
    }else{
        sortedArray.push(arr2[j]);
        j++;
    }
}

while(i < arr1.length){
     sortedArray.push(arr1[i]);
    i++;
}


while(j < arr2.length){
     sortedArray.push(arr2[j]);
    j++;
}

console.log('sortedArray', sortedArray)