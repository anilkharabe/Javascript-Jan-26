const userMap = new Map();

userMap.set('name', 'Vishal');
userMap.set('age', 10);
userMap.set(1, 'One');
let obj =  {
    name:"vishal",
    age: 10,
    1: 'One',
}
userMap.set(obj, 'Object');
console.log("userMap", userMap)

let arr = [1,2,3]

userMap.set(arr, 'Array1');
userMap.set(arr, 'Duplicate');


userMap.set([1,2,3], 'Array2');


console.log('userMap', userMap);

console.log('trying to get object:', userMap.get(arr)) 


// console.log('obj', obj)

console.log(userMap.has('age')) ;
console.log(userMap.delete('age')) ;
console.log('userMap', userMap);
console.log('tying to convert to JSON', Object.fromEntries(userMap))

console.log(userMap.size);

let someObj = {
    name:"Ram",
    location: 'Ayodhya'
}

console.log("OBject.entries", Object.entries(someObj))

let someMap = new Map(Object.entries(someObj))
console.log('someMap', someMap)
console.log('convert map to object', Object.fromEntries(someMap))