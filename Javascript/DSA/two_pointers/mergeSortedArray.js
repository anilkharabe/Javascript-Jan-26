let arr1  = [1, 3, 5, 7, 9]
let arr2 = [2, 4, 6, 8, 10]

let sortedArray = [];


// let i = 0;
// while(i < arr1.length){

//     sortedArray.push(arr1[i]);
//     i++;
// }

// i = 0;
// while(i< arr2.length){
//     sortedArray.push(arr2[i])
//     i++;
// }

sortedArray = [...arr1, ...arr2];
console.log('before sort', sortedArray)


sortedArray =  sortedArray.sort((a, b)=>{
    return a - b
})

console.log('after  sortedArray', sortedArray);