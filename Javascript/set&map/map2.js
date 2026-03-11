const userMap = new Map();


let arr = [1,2,3] // address => 0x1234

userMap.set(arr, 'Array1');

userMap.set([1,2,3], 'Array2'); //[1,2,3]=>  0x1236


console.log('userMap', userMap);

console.log('trying to get object:', userMap.get([1,2,3])) // [1,2,3]=>  0x1238

let arr2 = []

console.log([] == [])



let num = 1;  

userMap.set(num, 'Number1'); 

userMap.set(1, 'Number2');


console.log('userMap', userMap);

console.log('trying to get object:', userMap.get(num)) 

