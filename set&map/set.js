//set => collection of unique numbers


// create new Set
const set = new Set([1, 2, 3, 4, 5, 5]);


set.add(6);
console.log('set', set)

console.log('set.has', set.has(7)) 

set.delete(4)
console.log('set', set);

console.log(set.size) 

for(let value of set){
    console.log("value", value)
}

let obj = {a:1};

const setwithObject = new Set([{a:1}, {a:1}]);
console.log('setwithObject',setwithObject)


const arr = [3,4,5,2,3,5,67,8,9,10,11];
const uniqueArray = [...new Set(arr)]

console.log('uniqueArray', uniqueArray)
